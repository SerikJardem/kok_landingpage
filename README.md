# KŌK Franchise Landing

Next.js landing page for KŌK franchise partners. Production is a static export on GitHub Pages with custom domain:

**https://www.kokfood.kz/**

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local`:

| Variable | Purpose |
| :--- | :--- |
| `GOOGLE_SHEETS_CSV_URL` / `NEXT_PUBLIC_GOOGLE_SHEETS_CSV_URL` | Public Google Sheet CSV. Columns: `city`, `region`, `status`, `launch`, `note` (RU aliases also work). Status: `Available` / `Occupied` / `In Construction`. |
| `TELEGRAM_BOT_TOKEN` / `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN` | Bot token for lead delivery. |
| `TELEGRAM_CHAT_ID` / `NEXT_PUBLIC_TELEGRAM_CHAT_ID` | Channel or group chat id. |

GitHub Pages has no Node server, so the quiz talks to Telegram from the browser and the locations table refreshes from the published CSV. If the sheet URL is empty, the build uses `data/locations.csv`. If Telegram is not configured, the quiz still submits and tells the applicant the lead was collected but not delivered.

Repository Actions secrets / variables used by `.github/workflows/deploy.yml`:

- `GOOGLE_SHEETS_CSV_URL` (Actions variable)
- `TELEGRAM_BOT_TOKEN` (Actions secret)
- `TELEGRAM_CHAT_ID` (Actions secret)

## GitHub Pages + custom domain

Publishes from the Pages branch root: `index.html`, `_next/`, `brand/`, `CNAME`.

Rebuild and refresh those files with:

```bash
npm run build:pages
```

Builds **without** `PAGES_BASE_PATH` so assets load at the site root. `public/CNAME` is `www.kokfood.kz`.

DNS (ps.kz) for GitHub Pages:

- Apex `kokfood.kz` → A: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `www` → CNAME `serikjardem.github.io`

GitHub → Settings → Pages → Custom domain: `www.kokfood.kz` → Enforce HTTPS after DNS propagates.

`.nojekyll` tells GitHub not to run Jekyll (keeps `_next` visible).
