<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.3.5-000000?logo=nextdotjs&logoColor=white" alt="Next.js 16.3.5">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black" alt="React 19">
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4.2-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4">
</p>

<h1 align="center">414 Car Detailing (demo)</h1>

<p align="center">Landing page and booking mockup for a mobile car detailing service. Demonstration project.</p>

<p align="center">🇪🇸 <a href="README.md">Leer en español</a></p>

> **Demonstration project.** It is not a real business, it does not accept bookings, and it does not save or send any data. The name "414 Car Detailing" is illustrative: any resemblance to a real business is coincidental.

## About

A one-page landing site and a booking mockup (`/booking`), built with Next.js 16 (App Router), React, Tailwind CSS and Framer Motion. It presents a fictional mobile car detailing service.

It is a personal project, made for a friend who planned to open a business of this kind and did not follow through. It is not part of any course.

### What it is NOT

- **Not a real business, and it does not accept bookings.**
- **No backend:** there is no database, no API routes and no environment variables.
- **`/booking` is a mockup:** it only uses `useState`. There is no `fetch`, no `localStorage`, no form submission and no email.
- **Contact details, services and prices are fictional:** the phone `+1 (416) 555-0100`, the email `info@example.com`, the services, the prices and the references to Toronto are all examples.

## Sections

A fixed demo banner appears at the top of `/` and `/booking`.

| Section | Content |
|---|---|
| Navbar | Logo and anchors Home, Services, About, Contact |
| Hero | Headline and a "Book Now" button linking to `/booking` |
| Services | 4 expandable packages with per-vehicle pricing (2-seat and 5-seat SUV) and extras |
| WhyChooseUs | 4 benefit cards and a decorative card |
| Process | 2 phases with a before/after slider (sample images) |
| Gallery | Carousel that advances every 5 s and a grid of 4 sample images |
| ContactCTA and Footer | Sample phone and email (plain text, no links), opening hours, a Google map centered on Toronto and quick links |
| FloatingButtons | Scroll-to-top button and "Book Online" linking to `/booking` |

### `/booking` (mockup, in development)

- **Step 1:** a fixed service card (Exterior Detail, 1 h, CA$80), two extras with checkboxes that are not saved, 5 fixed days in April 2026 and the same 7 time slots from 8:00 to 8:30 on every day. Picking a slot moves to step 2.
- **Step 2:** four fields (first name, last name, phone and email) with no validation. The summary always says "Friday, April 17, 2026", whichever day you chose. "Complete Appointment" only shows a notice that this is a demo and nothing was saved.
- **There is no way back** from step 2 to step 1.
- To be a real booking system it would need: a backend with a database or calendar, real availability, validation, email confirmation, dynamic dates and time zones, and a privacy notice.

## Tech stack

Exact versions from `package-lock.json` (lockfile v3):

| Package | Version |
|---|---|
| Next.js / eslint-config-next | 16.3.5 |
| React / React DOM | 19.2.4 |
| TypeScript | 5.9.3 |
| Tailwind CSS and @tailwindcss/postcss | 4.2.2 |
| Framer Motion | 12.38.0 |
| lucide-react | 0.475.0 |
| clsx / tailwind-merge | 2.1.1 / 3.5.0 |
| ESLint | 9.39.4 |

- **Node:** `engines.node >= 20.9.0` (Next 16's minimum) and `.nvmrc` set to 22. Tested with Node 22.23.2 and npm 10.9.8.
- **Build:** Turbopack.
- **Fonts:** Geist and Geist Mono are downloaded from Google Fonts at build time and in development, so internet access is required.

## Project structure

```
.
├─ public/          (13 sample SVG images + 5 unused template SVGs)
├─ src/
│  ├─ app/          (layout, home page, styles, booking/)
│  ├─ components/   (11 .tsx components, including DemoBanner)
│  └─ lib/          (utils.ts)
├─ package.json · package-lock.json · .nvmrc
├─ eslint.config.mjs · next.config.ts · postcss.config.mjs · tsconfig.json
└─ AGENTS.md · CLAUDE.md · .gitignore
```

## How to run

Requires Node 20.9 or later (22 recommended).

```bash
git clone https://github.com/DiegoACx/car-detailing-demo.git
cd car-detailing-demo
npm ci
npm run dev      # http://localhost:3000
```

Other commands: `npm run build`, `npm run start` (requires a previous build) and `npm run lint`.

- There are no environment variables and no `.env.example`.
- **Note:** `next dev` regenerates `AGENTS.md` (a block of rules for AI agents). You can restore it with `git restore AGENTS.md` or commit the change.

## Images

The 13 images in `public/` are **SVG placeholders** with the text "Imagen de ejemplo" ("sample image"). The original photos were removed because their licenses could not be verified.

To use your own photos or clearly licensed ones:

1. Replace the files in `public/` keeping the same names, or change the paths in `Hero.tsx`, `Process.tsx` and `Gallery.tsx`.
2. Resize them to about 2000 px at most, as JPEG or WebP.
3. Record author, source and license for each photo.
4. Avoid legible license plates and faces, or get consent.
5. Update the `alt` texts and the gallery captions.

## Dependency audit

- **Result:** `npm audit` reported **0 vulnerabilities** on 2026-09-20 (npm 10.9.8, Node 22.23.2), against the current lockfile.
- **How we got there:** Next 16.2.4 had 24 advisories, 2 of them critical: GHSA-p293-qw3h-jr36 / CVE-2026-75604 (remote code execution on Windows servers) and GHSA-2xp9-vwfh-vxw4 (remote code execution in AVIF image optimization), both fixed in 16.3.3. It was upgraded to 16.3.5. Six transitive dev-only advisories remained, and `npm audit fix` (without `--force`) brought them to 0.
- **What it does not cover:** only already-published advisories ("0" does not mean "no vulnerabilities"); it does not review code, configuration, licenses or package integrity; third-party services (Google Fonts and the Google map) are outside its scope.

## What was tested and what was not

**Automated** (Windows 11, Node 22.23.2):

- `npm run lint`: 0 errors and 6 warnings.
- `npm run build`: passes (Next reports 5/5 pages generated and lists the routes `/`, `/_not-found` and `/booking`).
- HTTP checks against `next start`: `/` and `/booking` return 200 and include the banner; the 13 SVGs return 200 and the old photo paths return 404.
- `npm audit`: 0 vulnerabilities.

**Manual review by the author** (not covered by the automated checks): reviewed the app in the browser using the development server and it looked good, including the demo banner and the placeholders.

**Not verified:**

- Deployment on Vercel, Linux and macOS.
- Node 20.9 and `npm ci` on a clean clone.
- Real mobile devices and other browsers.
- Accessibility audit and Lighthouse.

## Limitations

- **Accessibility pending:** two `<h1>` on the home page, generic `alt` texts, map `<iframe>` without a `title`, icon-only buttons without an accessible name, form labels without `htmlFor`. Contrast and `prefers-reduced-motion` were not reviewed.
- **6 lint warnings** `@next/next/no-img-element`: plain `<img>` is used instead of `next/image`.
- **No tests.**
- **Sample text:** Toronto and the GTA, fictional prices, fixed April 2026 dates (already past), stale "TOMORROW" labels and marketing phrases such as "Toronto's Premier".
- **Design leftovers:** the decorative card in "WhyChooseUs" is now empty and the `scan` animation is not defined.
- **Third parties:** the Google map contacts Google when it loads.
- The CSS declares the Inter font, but Geist is the one loaded.

## Project history

It was created with `create-next-app` in April 2026. In September 2026 it was prepared as a public demo:

- **Dependencies:** Next 16.2.4 → 16.3.5 because of 2 critical advisories; `engines.node` and `.nvmrc`.
- **Lint:** 11 errors fixed (unescaped apostrophes) and unused imports removed.
- **Sample data:** a phone number from the 555-01xx range (reserved for fiction) and an `example.com` email (reserved by RFC 2606); a personal name was removed from the `/booking` service.
- **Unverified content:** claims such as "Certified specialists", a component with made-up figures and the generic social media links were removed.
- **Demo banner** on every page and a demo message instead of "Booking complete!".
- **Images:** the 13 original photos were replaced with SVG placeholders and the gallery captions are neutral.
- **History:** this repository was published with a fresh history, without the original photos.

## License

This repository does not include a `LICENSE` file, so the code is all rights reserved. Dependency licenses were not verified.

## Author

- Diego Castro — [@DiegoACx](https://github.com/DiegoACx)

The project was developed with assistance from Claude (Anthropic).
