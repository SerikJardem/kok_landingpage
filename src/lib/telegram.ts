import { quiz } from "./content";
import type { ApplyRequestBody, BudgetBand, ExperienceLevel } from "./types";

const EXPERIENCE: ExperienceLevel[] = ["yes", "no", "partial"];
const BUDGETS: BudgetBand[] = ["under25", "25to50", "50to80", "over80"];

function isExperience(value: unknown): value is ExperienceLevel {
  return typeof value === "string" && EXPERIENCE.includes(value as ExperienceLevel);
}

function isBudget(value: unknown): value is BudgetBand {
  return typeof value === "string" && BUDGETS.includes(value as BudgetBand);
}

export function validateApplication(input: unknown): ApplyRequestBody | { error: string } {
  if (!input || typeof input !== "object") {
    return { error: "Пустой запрос" };
  }
  const body = input as Record<string, unknown>;
  if (typeof body.company === "string" && body.company.trim().length > 0) {
    return { error: "rejected" };
  }
  const city = typeof body.city === "string" ? body.city.trim() : "";
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const contact = typeof body.contact === "string" ? body.contact.trim() : "";
  if (city.length < 2 || city.length > 80) {
    return { error: "Укажите город" };
  }
  if (!isExperience(body.experience)) {
    return { error: "Укажите опыт" };
  }
  if (!isBudget(body.budget)) {
    return { error: "Укажите бюджет" };
  }
  if (name.length < 2 || name.length > 80) {
    return { error: "Укажите имя" };
  }
  if (contact.length < 3 || contact.length > 80) {
    return { error: "Укажите телефон или Telegram" };
  }
  return {
    city,
    experience: body.experience,
    budget: body.budget,
    name,
    contact,
  };
}

export function formatTelegramMessage(app: ApplyRequestBody, submittedAt: string) {
  const experience = quiz.experience[app.experience];
  const budget = quiz.budget[app.budget];
  return [
    "<b>KŌK · заявка партнёра</b>",
    "",
    `<b>Город:</b> ${escapeHtml(app.city)}`,
    `<b>Опыт:</b> ${escapeHtml(experience)}`,
    `<b>Бюджет:</b> ${escapeHtml(budget)}`,
    `<b>Имя:</b> ${escapeHtml(app.name)}`,
    `<b>Контакт:</b> ${escapeHtml(app.contact)}`,
    `<b>Время:</b> ${escapeHtml(submittedAt)}`,
  ].join("\n");
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export async function sendTelegramMessage(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();
  if (!token || !chatId) {
    return { delivered: false as const, reason: "telegram_not_configured" as const };
  }

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    return {
      delivered: false as const,
      reason: "telegram_failed" as const,
      detail: detail.slice(0, 240),
    };
  }

  return { delivered: true as const };
}
