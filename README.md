# Object1 — Premium Real Estate

A luxury real estate website built with Next.js 15, React, TypeScript, and Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/              # App Router pages and layouts
├── components/
│   ├── layout/       # Header, Footer, Container
│   ├── sections/     # Homepage sections
│   └── ui/           # Reusable UI primitives
├── constants/        # Editable content and data
├── lib/              # Utilities and helpers
└── types/            # TypeScript interfaces
```

## Editing Content

All placeholder copy lives in `src/constants/`:

- `site.ts` — company name, contact info, tagline
- `navigation.ts` — header and footer links
- `properties.ts` — property listings
- `services.ts` — service offerings
- `about.ts` — about section content

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- ESLint
- Turbopack
