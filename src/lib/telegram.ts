import { catering, quiz } from "./content";
import { telegramCredentials } from "./public-config";
import type {
  ApplyRequestBody,
  BudgetBand,
  CateringHeadcount,
  CateringNeed,
  CateringRequestBody,
  ExperienceLevel,
} from "./types";

const EXPERIENCE: ExperienceLevel[] = ["yes", "no", "partial"];
const BUDGETS: BudgetBand[] = ["under25", "25to50", "50to80", "over80"];
const CATERING_NEEDS: CateringNeed[] = ["food", "drinks", "both"];
const CATERING_HEADCOUNTS: CateringHeadcount[] = ["50", "100", "200plus"];
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

function isCateringNeed(value: unknown): value is CateringNeed {
  return typeof value === "string" && CATERING_NEEDS.includes(value as CateringNeed);
}

function isCateringHeadcount(value: unknown): value is CateringHeadcount {
  return (
    typeof value === "string" &&
    CATERING_HEADCOUNTS.includes(value as CateringHeadcount)
  );
}

function parseEventDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return null;
  }
  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) {
    return null;
  }
  return date;
}

export function validateCateringRequest(
  input: unknown,
): CateringRequestBody | { error: string } {
  if (!input || typeof input !== "object") {
    return { error: "Пустой запрос" };
  }
  const body = input as Record<string, unknown>;
  if (typeof body.company === "string" && body.company.trim().length > 0) {
    return { error: "rejected" };
  }
  if (!isCateringNeed(body.need)) {
    return { error: "Укажите, что нужно" };
  }
  if (!isCateringHeadcount(body.headcount)) {
    return { error: "Укажите число гостей" };
  }

  const eventDate = typeof body.eventDate === "string" ? body.eventDate.trim() : "";
  const parsedDate = parseEventDate(eventDate);
  if (!parsedDate) {
    return { error: "Укажите дату события" };
  }
  const minTime = Date.now() + 24 * 60 * 60 * 1000;
  const timePart =
    typeof body.eventTime === "string" && /^\d{2}:\d{2}$/.test(body.eventTime)
      ? body.eventTime
      : "23:59";
  const eventStart = new Date(`${eventDate}T${timePart}:00`);
  if (Number.isNaN(eventStart.getTime()) || eventStart.getTime() < minTime) {
    return { error: catering.dateTooSoon };
  }

  const eventTime = typeof body.eventTime === "string" ? body.eventTime.trim() : "";
  if (eventTime && !/^\d{2}:\d{2}$/.test(eventTime)) {
    return { error: "Укажите время в формате ЧЧ:ММ" };
  }

  const city = typeof body.city === "string" ? body.city.trim() : "";
  const venue = typeof body.venue === "string" ? body.venue.trim() : "";
  const organization =
    typeof body.organization === "string" ? body.organization.trim() : "";
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const contact = typeof body.contact === "string" ? body.contact.trim() : "";
  const notes = typeof body.notes === "string" ? body.notes.trim() : "";

  if (city.length < 2 || city.length > 80) {
    return { error: "Укажите город" };
  }
  if (venue.length < 3 || venue.length > 160) {
    return { error: "Укажите адрес или площадку" };
  }
  if (organization.length > 120) {
    return { error: "Слишком длинное название организации" };
  }
  if (name.length < 2 || name.length > 80) {
    return { error: "Укажите имя" };
  }
  if (contact.length < 3 || contact.length > 80) {
    return { error: "Укажите телефон или Telegram" };
  }
  if (notes.length > 500) {
    return { error: "Комментарий слишком длинный" };
  }

  return {
    need: body.need,
    headcount: body.headcount,
    eventDate,
    eventTime,
    city,
    venue,
    organization,
    name,
    contact,
    notes,
  };
}

export function formatCateringTelegramMessage(
  order: CateringRequestBody,
  submittedAt: string,
) {
  const need = catering.need[order.need];
  const headcount = catering.headcount[order.headcount];
  const when = order.eventTime
    ? `${order.eventDate} · ${order.eventTime}`
    : order.eventDate;
  return [
    "<b>KŌK · catering заявка</b>",
    "",
    `<b>Нужно:</b> ${escapeHtml(need)}`,
    `<b>Гости:</b> ${escapeHtml(headcount)}`,
    `<b>Дата / время:</b> ${escapeHtml(when)}`,
    `<b>Город:</b> ${escapeHtml(order.city)}`,
    `<b>Адрес:</b> ${escapeHtml(order.venue)}`,
    `<b>Организация:</b> ${escapeHtml(order.organization || "—")}`,
    `<b>Имя:</b> ${escapeHtml(order.name)}`,
    `<b>Контакт:</b> ${escapeHtml(order.contact)}`,
    `<b>Заметки:</b> ${escapeHtml(order.notes || "—")}`,
    `<b>Время заявки:</b> ${escapeHtml(submittedAt)}`,
  ].join("\n");
}

export async function submitCateringRequest(input: unknown) {
  if (clientRateLimited()) {
    return { ok: false as const, error: "Слишком много заявок. Подождите немного." };
  }

  const parsed = validateCateringRequest(input);
  if ("error" in parsed) {
    if (parsed.error === "rejected") {
      return { ok: true as const, delivered: true };
    }
    return { ok: false as const, error: parsed.error };
  }

  const submittedAt = new Date().toISOString();
  const text = formatCateringTelegramMessage(parsed, submittedAt);
  const telegram = await sendTelegramMessage(text);
  return {
    ok: true as const,
    delivered: telegram.delivered,
    reason: "reason" in telegram ? telegram.reason : undefined,
  };
}
