# KŌK Franchise Landing

Next.js landing page for KŌK franchise partners.

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local`:

| Variable | Purpose |
| :--- | :--- |
| `GOOGLE_SHEETS_CSV_URL` | Public Google Sheet CSV / gviz endpoint. Columns: `city`, `region`, `status`, `launch`, `note` (RU aliases also work). Status: `Available` / `Occupied` / `In Construction`. |
| `TELEGRAM_BOT_TOKEN` | Bot token for lead delivery. |
| `TELEGRAM_CHAT_ID` | Channel or group chat id. |

If the sheet URL is empty, the page uses `data/locations.csv`. If Telegram is not configured, the quiz still submits and tells the applicant the lead was collected but not delivered.

Leads POST to `/api/apply`. Locations are exposed at `/api/locations`.
