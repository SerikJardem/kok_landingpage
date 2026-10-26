export const DEFAULT_GOOGLE_SHEETS_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTYqR9LjKBS0h1EXmrZPlNC89xEvy105P64R0dX2aEPU5q1wv6bPRhgvVdsiVhNmSOJ51WyqWO9azh/pub?output=csv";

const DEFAULT_TELEGRAM_BOT_TOKEN = "8726524564:AAH-DnNHVhaiCKbxqCxvaZYJQT9C1iIEA-c";
const DEFAULT_TELEGRAM_CHAT_ID = "-5399861746";

export function googleSheetsCsvUrl() {
  return (
    process.env.NEXT_PUBLIC_GOOGLE_SHEETS_CSV_URL?.trim() ||
    process.env.GOOGLE_SHEETS_CSV_URL?.trim() ||
    DEFAULT_GOOGLE_SHEETS_CSV_URL
  );
}

export function telegramCredentials() {
  const token =
    process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN?.trim() ||
    process.env.TELEGRAM_BOT_TOKEN?.trim() ||
    DEFAULT_TELEGRAM_BOT_TOKEN;
  const chatId =
    process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID?.trim() ||
    process.env.TELEGRAM_CHAT_ID?.trim() ||
    DEFAULT_TELEGRAM_CHAT_ID;
  return { token, chatId };
}
