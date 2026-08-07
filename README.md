# Portfolio

A minimalist, dark-mode portfolio built with [Next.js](https://nextjs.org) (App Router) and deployed to [Cloudflare Workers](https://workers.cloudflare.com/) via [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare).

> **Note:** the content in `lib/data.ts` (name, bio, experience, skills, links) and the projects in `app/projects` are placeholders — swap them for your own before publishing.

## Pages

- `/` — Home
- `/about` — Background, experience, and skills
- `/projects` — Project grid
- `/contact` — Contact form and social links

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command           | Action                                                              |
| ------------------ | -------------------------------------------------------------------- |
| `npm run dev`      | Start the local Next.js dev server                                  |
| `npm run build`    | Production build (`next build`)                                     |
| `npm run preview`  | Build for Cloudflare and run it locally under Wrangler (`workerd`)  |
| `npm run deploy`   | Build for Cloudflare and deploy to your Workers account             |
| `npm run cf-typegen` | Regenerate `worker-configuration.d.ts` from `wrangler.jsonc`      |

`deploy` requires a Cloudflare account — run `npx wrangler login` first, or set `CLOUDFLARE_API_TOKEN`/`CLOUDFLARE_ACCOUNT_ID` in CI.

## Contact form

`app/api/contact/route.ts` is a stub: it validates and logs submissions but doesn't send email anywhere yet. Wire up a real backend (your own [Web3Forms](https://web3forms.com) access key, [Resend](https://resend.com), Formspree, etc.) before relying on it.

## Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS
- `@opennextjs/cloudflare` + Wrangler
