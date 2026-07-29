# VetCare · Bakı — Premium Veterinary Clinic Sales Demo

Multi-language (AZ / EN / RU) Next.js landing page template for selling websites to veterinary clinics in Azerbaijan.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion + Lucide
- next-intl (AZ / EN / RU)
- Vercel-ready

## Quick start

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/az`.

## Customize a clinic (< 15 minutes)

1. Edit [`src/config/clinic.ts`](src/config/clinic.ts) — name, phone, WhatsApp, address, maps, socials, stats
2. Replace logo at `public/images/logo.svg`
3. Update copy in `src/messages/az.json`, `en.json`, `ru.json`
4. Swap doctors / gallery / testimonials in `src/content/*`
5. Set `NEXT_PUBLIC_SITE_URL` for production SEO

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |

## Deploy on Vercel

1. Push this repo to GitHub
2. Import at [vercel.com/new](https://vercel.com/new) (Framework: Next.js)
3. Add env `NEXT_PUBLIC_SITE_URL` = your production URL (no trailing slash)
4. Deploy — every push to `main` = Production; PRs = Preview

Region is set to `fra1` (Frankfurt) in `vercel.json`.

## Booking flow

The appointment form opens WhatsApp (`wa.me`) with a prefilled message. No backend required.

## Local formats

- Currency: AZN (₼)
- Phone: +994 XX XXX XX XX
- Date: DD.MM.YYYY
