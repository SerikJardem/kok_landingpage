import { formatTelegramMessage, sendTelegramMessage, validateApplication } from "@/lib/telegram";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 8;
const hits = new Map<string, number[]>();

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") || "unknown";
}

function isLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((stamp) => now - stamp < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  const ip = clientIp(request);
  if (isLimited(ip)) {
    return Response.json({ ok: false, error: "Слишком много заявок. Подождите немного." }, { status: 429 });
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Некорректный JSON" }, { status: 400 });
  }

  const parsed = validateApplication(json);
  if ("error" in parsed) {
    if (parsed.error === "rejected") {
      return Response.json({ ok: true, delivered: true });
    }
    return Response.json({ ok: false, error: parsed.error }, { status: 400 });
  }

  const submittedAt = new Date().toISOString();
  const payload = {
    source: "kok-franchise-landing",
    ...parsed,
    submittedAt,
  };
  const text = formatTelegramMessage(parsed, submittedAt);

  try {
    const telegram = await sendTelegramMessage(text);
    return Response.json({
      ok: true,
      delivered: telegram.delivered,
      reason: "reason" in telegram ? telegram.reason : undefined,
      payload,
    });
  } catch {
    return Response.json(
      { ok: false, error: "Не удалось связаться с Telegram", payload },
      { status: 502 },
    );
  }
}
