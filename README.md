# Manar Transport

A premium, responsive transportation website for Manar Transport, designed around airport transfers, Makkah and Madinah transportation, Ziyarat journeys, intercity travel, Hajj and Umrah-related transport inquiries, and a curated vehicle fleet.

## Technology stack

- React 19 + TypeScript
- Vite + Tailwind CSS 4
- Wouter for client-side routing
- Font Awesome for brand icons
- CSS-driven motion and responsive layouts
- Vercel-compatible static deployment

> **Session note:** The managed website scaffold available in this session is React + Vite rather than native Next.js. The project still follows the requested production structure—separate pages, reusable components, centralized data, utility functions, and Vercel-ready configuration. The page/data organization is intentionally easy to port to a Next.js `app/` directory later.

## Installation

```bash
pnpm install
# npm install also works
```

## Development

```bash
pnpm run dev
# or
npm run dev
```

The local development server runs on the port reported by Vite. The managed preview uses the configured project preview URL.

## Production build

```bash
pnpm run check
pnpm run build
pnpm run start
```

The build outputs the client bundle and the small static-serving wrapper used by the managed scaffold.

## Vercel deployment

The Vite frontend builds to `dist/public`; Vercel serves the API routes in `api/` as serverless functions. `vercel.json` sets the output directory and rewrites client-side routes to `/index.html` while Vercel's filesystem routing keeps the API functions available.

Use the repository root as the Vercel project root and `pnpm run build` (or `npm run build`) as the build command. The `/api/holy-cities` function fetches prayer times and weather for Makkah and Madinah. No API key is needed for those data sources. Website images are served from the local `client/public/images` collection.

The Saudi local clock is formatted in the browser using the `Asia/Riyadh` time zone and does not depend on the API.

## Environment variables

The current static site does not expose or require secret API keys. Copy `.env.example` to `.env.local` only if a future chatbot/API integration is added.

- `CHATBOT_API_KEY` — keep server-side; never expose in browser code.
- `CHATBOT_API_URL` — future provider endpoint.
- `VITE_ANALYTICS_ENDPOINT` and `VITE_ANALYTICS_WEBSITE_ID` — optional analytics placeholders from the scaffold.

## WhatsApp booking flow

The reusable utility in `client/src/utils/whatsapp.ts` builds a readable, encoded WhatsApp URL from the requested booking fields:

- Full name
- Email
- WhatsApp number
- Travel date
- Trip / service details
- Optional additional notes

The form does **not** pretend to be a database or CRM. It opens a pre-filled WhatsApp message to `+966590832169` so the customer can review and send it. The team then follows up in WhatsApp.

## How to replace images and final branding

Image paths and content are centralized in `client/src/data/siteData.ts`. The current visual references are stored in Manus web storage and are used as licensed/search-sourced placeholders. Replace the `media` paths with approved company assets when supplied.

The supplied official logo was not present in the provided attachment. The current header/footer therefore use a clearly editable typographic `M` mark placeholder. Replace that mark with the exact official logo as soon as the logo asset is supplied; do not alter the official logo proportions or colors.

## How to add vehicles

Add a new object to the `vehicles` array in `client/src/data/siteData.ts` with:

```ts
{
  slug: "vehicle-slug",
  name: "Approved vehicle name",
  category: "Sedan / SUV / Van",
  intro: "Short approved description",
  description: "Approved full description",
  image: "/manus-storage/approved-image.jpg",
  gallery: ["/manus-storage/front.jpg", "/manus-storage/interior.jpg"],
  features: ["Feature one", "Feature two"],
  seats: "Approved seating data",
  luggage: "Approved luggage data"
}
```

The fleet index and `/fleet/:slug` detail page read the data automatically.

## How to add services

Add a new object to the `services` array in `client/src/data/siteData.ts`. The service card, service index page, navigation dropdown, and `/services/:slug` detail route are data-driven.

## How to change contact information

Update the `contact` object in `client/src/data/siteData.ts`. The WhatsApp utility, footer, contact page, booking flow, and floating button all use that centralized data.

## How to update navigation

Edit `navGroups` in `client/src/data/siteData.ts`. The desktop hover dropdown and mobile expandable drawer use the same source.

## How to connect a chatbot API

The current chatbot is deliberately safe and local: it answers common routing questions in English, Urdu/Roman Urdu, and Arabic, then escalates to WhatsApp when it is not confident. To add a provider:

1. Create a secure server/API route in a backend-enabled deployment.
2. Read `CHATBOT_API_KEY` and `CHATBOT_API_URL` only on the server.
3. Add a small provider abstraction behind `FloatingActions.tsx`.
4. Do not put secrets in `VITE_*` variables or frontend source.
5. Use official Saudi sources for time-sensitive Hajj and Umrah information and distinguish travel information from religious guidance.

## Future database integration

A future backend can follow this boundary:

```text
Frontend → API → Backend service → Database
```

Possible options include Supabase, Firebase, PostgreSQL, or MongoDB. Suggested future records are customer inquiries, booking requests, partner accounts, commission events, and admin audit records. The current WhatsApp flow intentionally works without pretending that any of those records are persisted.

## Project structure

```text
client/
  public/
  src/
    components/
      booking/
      chatbot/
      home/
      layout/
      ui/
    data/
    hooks/
    pages/
      about/
      fleet/
      info/
      policies/
      services/
      travel-agent/
    utils/
    App.tsx
    index.css
    main.tsx
server/
api/
  holy-cities.ts
  unsplash/
    image.ts
shared/
.env.example
vercel.json
```

## Content placeholders

The code uses `[ADD COMPANY CONTENT]`, `[ADD VEHICLE DETAILS]`, `[ADD SEATING INFO]`, `[ADD LUGGAGE INFO]`, `[ADD BUSINESS HOURS]`, and `Add your licensed content here` where company-specific facts or final legal wording were not provided. Replace these placeholders before launch.
