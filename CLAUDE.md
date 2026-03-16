# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture

**TUSK Trade Company** — a multilingual, single-page marketing website for an international food trade company built with Next.js 15 App Router.

### Page Structure

All content lives on one page (`src/app/page.tsx`) composed of section components: `Header`, `HeroSection`, `About`, `Products`, `Global`, `Contact`, `WhyChooseUs`, `Footer`. Navigation uses anchor hash links (`#about`, `#products`, `#global`, `#contact`).

All interactive section components are Client Components (`"use client"`). The root layout is a Server Component.

### Translations System

The app supports 4 languages: English (`en`), Spanish (`es`), Chinese (`cn`), Russian (`ru`).

- `src/context/translations/TranslationsProvider.tsx` — React Context providing `{ lang, setLang, translations }` to the entire app
- `src/context/translations/types.ts` — `Translations` interface, `ProductKey` and `ProductDetail` types
- `src/context/translations/translations.ts` — aggregates all language files
- `src/context/translations/{en,es,cn,ru}.ts` — per-language translation objects

When adding new UI text, add keys to the `Translations` interface in `types.ts` and implement them across all 4 language files. Access translations in components via the `useTranslations()` hook.

### Email API

`src/app/api/email/route.ts` — POST endpoint that sends contact form submissions via Gmail SMTP (nodemailer). Requires `process.env.email` and `process.env.password` environment variables.

### Key Conventions

- **Primary brand color:** `#8A1719`
- **Styling:** Tailwind utility classes only; no component-level CSS files
- **Dialogs:** Product detail modals use Radix UI `Dialog` component
- **Images:** Use Next.js `Image` component; static assets in `/public/products/`
- **Form handling:** `src/app/Contact.tsx` uses direct DOM `querySelector` to read form values before submitting to `/api/email`
