import { quiz } from "./content";
import { telegramCredentials } from "./public-config";
import type { ApplyRequestBody, BudgetBand, ExperienceLevel } from "./types";

const EXPERIENCE: ExperienceLevel[] = ["yes", "no", "partial"];
const BUDGETS: BudgetBand[] = ["under25", "25to50", "50to80", "over80"];
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 8;

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

function clientRateLimited() {
  if (typeof window === "undefined") {
    return false;
  }
  const key = "kok-apply-hits";
  const now = Date.now();
  const recent = (JSON.parse(sessionStorage.getItem(key) || "[]") as number[]).filter(
    (stamp) => now - stamp < WINDOW_MS,
  );
  if (recent.length >= MAX_HITS) {
    sessionStorage.setItem(key, JSON.stringify(recent));
    return true;
  }
  recent.push(now);
  sessionStorage.setItem(key, JSON.stringify(recent));
  return false;
}

export async function sendTelegramMessage(text: string) {
  const { token, chatId } = telegramCredentials();
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

export async function submitFranchiseApplication(input: unknown) {
  if (clientRateLimited()) {
    return { ok: false as const, error: "Слишком много заявок. Подождите немного." };
  }

  const parsed = validateApplication(input);
  if ("error" in parsed) {
    if (parsed.error === "rejected") {
      return { ok: true as const, delivered: true };
    }
    return { ok: false as const, error: parsed.error };
  }

  const submittedAt = new Date().toISOString();
  const text = formatTelegramMessage(parsed, submittedAt);
  const telegram = await sendTelegramMessage(text);
  return {
    ok: true as const,
    delivered: telegram.delivered,
    reason: "reason" in telegram ? telegram.reason : undefined,
  };
}
