# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server on :3000
npm run build    # production build (only real typecheck — tsconfig has noEmit, no separate tsc script)
npm run start    # serve the production build
npm run lint     # next lint (eslint-config-next/core-web-vitals)
```

No test suite exists. Both `bun.lockb` and `package-lock.json` are committed; npm is the practical default.

## Architecture

Next.js 14 App Router, TypeScript strict, Tailwind. Path alias `@/*` → `src/*`.

### Two route groups, two different apps

- `src/app/(portfolio)/` — the public site. Root `layout.tsx` (`src/app/layout.tsx`) holds only metadata; the portfolio layout adds `ThemeProvider`, `Navbar`, `Footer`, and `GsapAnimator`.
- `src/app/(dashbord)/dashboard/` — admin CRUD (note the misspelled directory name). Separate layout with a sidebar, no theme provider, no portfolio chrome.

### Content lives in two disconnected systems

This is the single most important thing to know before editing content:

1. **`src/data/portfolio.ts` + `src/data/tools.ts`** (static TS, typed by `src/types/index.ts`) drive **everything rendered publicly** — projects, experience, skills, education, social links, `personalInfo`. To change what visitors see, edit these files.
2. **`data/projects.json` / `data/contacts.json`** + `src/app/api/projects/`, `src/app/api/experience/` are a legacy `fs`-backed CRUD layer used only by the dashboard. **Nothing in `(portfolio)` reads them.** These routes write to disk, so they are ephemeral/broken on Vercel. The dashboard's experience create/edit pages also post to `/api/projects` rather than `/api/experience`.

### Section components serve both home and dedicated pages

`src/components/sections/*` take `{ preview?: boolean; showHeader?: boolean }`. The home page (`(portfolio)/page.tsx`) renders every section with `preview`, showing a trimmed variant (e.g. featured projects only, fewer highlights, a "view all" link). The per-topic routes (`/about`, `/projects`, `/skills`, `/tools`, `/experience`, `/contact`) render the same component full. Any change to a section must be checked in both modes.

### Design tokens and primitives

`src/style/globals.css` owns the whole design system: semantic CSS variables (`--surface*`, `--fg*`, `--line*`, `--solid*`, `--radius`, `--nav-h`, four motion durations, two easings) exposed through `tailwind.config.ts` as `bg-surface`, `text-fg-muted`, `border-line`, `duration-base`, etc. **Write semantic classes, not `neutral-*`** — every color is a light/dark pair and the tokens flip automatically. A `[data-band="inverse"]` block re-declares them as their dark values, which is how `<Section band="inverse">` produces an always-dark band with no `text-white` overrides.

The same file defines the type scale as `@layer components` classes: `.type-display`, `.type-h1`/`h2`/`h3`, `.type-card-title`, `.type-stat`, `.type-lead`, `.type-body`/`-sm`/`-xs`, `.type-eyebrow`, `.type-label`. Each carries its own color token. Use these instead of ad-hoc size/leading/tracking combinations; Tailwind utilities still override them.

Layout comes from `src/components/ui/`: `Container` (one padding ramp, `narrow`/`default`/`wide`), `Section` (band + vertical rhythm + dividers), `Button` (cva: `solid`/`outline`/`ghost`/`link`/`muted` × `sm`/`md`/`lg`/`icon`, with hover, `active:`, focus and disabled states), `Card`, `Eyebrow`, `Chip`. Reach for these before writing new markup — they exist because the same recipes were previously copy-pasted 10–18 times.

### Animation is attribute-driven

`ScrollReveal` (`src/components/motion/ScrollReveal.tsx`, mounted once in the portfolio layout) drives reveals with an `IntersectionObserver`; the transitions themselves are CSS in `globals.css`. Two attributes: `data-reveal` (fades and rises on entry) and `data-reveal-group` (its `[data-reveal]` descendants stagger together). Rules:

- **Never put `data-reveal` on a section wrapper or anything containing a `fixed` element** — a transform on the ancestor becomes its containing block. Reveal the items, not the container.
- Nothing above the fold is revealed; the hero and page headers paint immediately.
- The hidden start state is gated on `html.js`, set by the blocking script in `src/app/layout.tsx` before first paint. Without JS, or under `prefers-reduced-motion`, everything is simply visible.
- A `MutationObserver` re-observes nodes React adds later (e.g. project filtering), so nothing gets stuck at opacity 0.

### Theming

Dark mode is `class`-based. A blocking inline script in `src/app/layout.tsx` resolves the theme (localStorage `theme`, else `prefers-color-scheme`) and sets `dark` + `color-scheme` + `js` on `<html>` **before first paint** — that script is what prevents both the theme flash and the reveal flash, so don't move it below the fold or into a component. `src/context/ThemeContext.tsx` reads the class the script already applied and persists only on explicit toggle, so the system preference keeps being followed until the visitor chooses.

The `dark` class lands on `<html>` globally, so the dashboard and login pages pin themselves light with `bg-white text-neutral-900 [color-scheme:light]`.

### Auth

- `src/middleware.ts` matches only `/dashboard/:path*` and `/api/protected`; it checks the `ttll` cookie and redirects to `/login`.
- API routes are **not** covered by the middleware and authorize themselves (see `isAdminRequest` in the contact route).
- The "user store" is `src/models/user.ts`: one in-memory admin built from `ADMIN_EMAIL`/`ADMIN_PASSWORD` at module load, bcrypt-hashed. `src/utils/jwt.ts` signs/verifies with `JWT_SECRET`. Both fall back to hardcoded defaults if env is missing.

### Contact flow

`src/app/api/contact/route.ts` is the most substantial route (`runtime = "nodejs"`):
- `POST` is public: honeypot field `website`, field-length validation, in-memory per-IP rate limit (5 / 15 min, kept on `globalThis`), HTML-escaped email sent via the Resend REST API (no SDK dependency).
- `GET`/`DELETE` require the admin cookie and back the dashboard contacts table.
- Storage prefers Upstash Redis REST (`portfolio:contact-messages`, capped at 200) and falls back to writing `data/contacts.json` — that fallback only works locally.

## Conventions

- Visual language is deliberately monochrome — no accent hue. Emphasis comes from weight, scale, space, and inverted bands, not color.
- **Separate with surface and depth, not outlines.** Rounded (`--radius-sm/–/lg/xl` = 8/12/16/22px), soft elevation (`shadow-sm/md/lg`), and half-strength hairlines (`ring-line/60`, `border-line/60`). A full-strength `border border-line` box is a regression — use a tinted surface, a ring, or a shadow instead. Buttons and chips are pills (`rounded-full`).
- Fonts are Inter + JetBrains Mono, loaded with `next/font/google` in the root layout and wired to Tailwind through `--font-sans` / `--font-mono`. Don't add `<link>` tags or a second font pipeline.
- `--nav-h` is the exact rendered height of the fixed navbar. **Nothing may change header height at runtime.** Use `pt-nav` / `pt-nav-lg` / `calc(var(--nav-h) + …)` for clearance, never a literal, and rely on the global `scroll-padding-top` for anchors instead of per-element `scroll-mt-*`.
- Motion uses four durations (`duration-micro`/`base`/`slow`/`reveal`) and two easings (`ease-out`, `ease-smooth`). framer-motion is now used only for the Projects quick-view modal; everything else is CSS.
- Remote images require the hostname in `next.config.mjs` `images.remotePatterns` (currently `images.pexels.com`, `t3.ftcdn.net`).
- Env vars are documented in `.env.example` (Resend, admin credentials, JWT secret, Upstash).
- Vestigial code that should not be treated as active surface: `src/app/stripe/`, `src/stripe/`, `src/components/dashboard/ui/FileManager.tsx` (Flmngr demo server), and the `jodit-react`/`primereact`/`quill` editor deps.
