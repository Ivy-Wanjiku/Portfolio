# Ivy Wanjiku Portfolio

A personal portfolio built with Next.js, TypeScript, Tailwind CSS, and the App Router.

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

## Contact form setup

The contact form sends email through Resend from the server-only `/api/contact` route.

1. Copy `.env.example` to `.env.local`.
2. Create a Resend API key and add it as `RESEND_API_KEY`.
3. Keep `CONTACT_EMAIL=wanjiruwanjikuivy@gmail.com` as the recipient.
4. For initial testing, the route uses Resend's `onboarding@resend.dev` sender when `RESEND_FROM_EMAIL` is empty.
5. Before production launch, verify a sending domain in Resend, publish the DNS records Resend provides, and set `RESEND_FROM_EMAIL` to an address on that domain, for example `Ivy Wanjiku Portfolio <hello@yourdomain.com>`.

The API key must remain in `.env.local` or the deployment platform's environment settings. Never expose it through a variable prefixed with `NEXT_PUBLIC_`.

## Verification

```bash
npm run lint
npx tsc --noEmit
npm run build
```
