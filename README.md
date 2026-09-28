# ByteSpace

Landing page for **ByteSpace**, an online course platform, built from the provided Figma design.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) with design tokens from the Figma style guide
- [Bun](https://bun.sh) as package manager and script runner

## Getting started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command       | Description               |
| ------------- | ------------------------- |
| `bun dev`     | Start the dev server      |
| `bun run build` | Production build        |
| `bun start`   | Serve the production build |
| `bun run lint` | Lint with ESLint         |

## Project structure

```
app/                  Routes (App Router), root layout, global styles & design tokens
components/
  icons/              Icon set used in the design
  layout/             Navbar, Footer
  sections/           Landing page sections (Hero, Courses, Categories, ...)
  ui/                 Reusable UI (Button, Pill, CourseCard, CategoryCard, ...)
data/                 Page content (courses, categories, testimonials, links)
lib/                  Small helpers
public/               Images, icons and self-hosted fonts
```

## Design notes

- Colors, typography, and the card shadow are defined once in `app/globals.css`
  (`@theme` + `@utility`) using the exact values from the Figma style guide.
- Desktop (1440px) follows the Figma coordinates; tablet and mobile layouts
  stack and scale the compositions.
