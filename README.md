# ByteSpace

A responsive website for **ByteSpace**, an online course platform, built from the provided Figma design.

The assessment asked for the landing page (required) and the login/sign-up pages (bonus). The remaining screens in the design file (course search, course details, creator profile and 404) are implemented as well and linked together, so the site can be browsed end to end.

## Tech stack

| | |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, static generation) |
| UI | React 19, TypeScript (strict) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) with design tokens from the Figma style guide |
| Fonts | Poppins (`next/font`), Satoshi (self-hosted `woff2`) |
| Tooling | [Bun](https://bun.sh), ESLint |

No UI library is used; every component is built from the design.

## Getting started

Requires [Bun](https://bun.sh) 1.x.

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Description |
|---|---|
| `bun dev` | Start the development server |
| `bun run build` | Production build |
| `bun start` | Serve the production build |
| `bun run lint` | Lint with ESLint |
| `bun run typecheck` | Generate Next.js route types and type-check with `tsc` |

## Pages

| Route | Page |
|---|---|
| `/` | Home (landing page) |
| `/login` | Sign in |
| `/signup` | Create an account |
| `/courses` | Course search: keyword search, level/category filters, topics, sort menu, pagination |
| `/courses/[slug]` | Course details: **About** tab (default) |
| `/courses/[slug]/lessons` | Course details: **Lessons** tab |
| `/courses/[slug]/reviews` | Course details: **Reviews** tab (rating summary, star filter) |
| `/creators/[slug]` | Creator profile with the creator's courses |
| any unknown URL | Custom 404 page |

Course and creator pages are statically generated for every item in `data/`; unknown slugs return the 404 page.

## Project structure

```
app/                      Routes (App Router), root layout, icons
  globals.css             Design tokens (@theme) and typography utilities (@utility)
  courses/[slug]/         Shared course layout + About / Lessons / Reviews routes
components/
  ui/                     Reusable building blocks (Button, Pill, Dropdown, TextField,
                          CourseCard, CategoryCard, TestimonialCard, Pagination, ...)
  layout/                 Navbar, Footer
  sections/               Home page sections (Hero, Courses, Categories, Growth, ...)
  search/ course/         Page-specific components
  creator/ auth/
  icons/                  Icon set used in the design (Material icons)
data/                     Page content (courses, course detail, creators, testimonials)
lib/                      Small helpers (class names, validation)
public/                   Images, 3D renders, logos and fonts
```

## Implementation notes

- **Design tokens.** Colors, the type scale (`text-heading-l`, `text-body-m`, `text-label-s`, …) and the card shadow are defined once in `app/globals.css`, using the exact values and names from the Figma style guide.
- **Pixel accuracy.** At 1440px the layouts follow the Figma coordinates, and each page was measured against the design (element positions and page heights). Some borders in the design sit outside their box; this is reproduced so cards and inputs line up exactly.
- **Responsive.** Tablet and mobile layouts stack the content. Decorative compositions (floating cards, 3D shapes) scale down proportionally. No horizontal scrolling from 390px to 1440px.
- **3D shapes.** The coil, torus, cone, cylinder and pyramid are grayscale renders tinted in CSS with a `hard-light` blend (`components/ui/Ornament.tsx`), the same technique the design uses. One image per shape serves every color.
- **Graphics.** The logo, partner logos, social icons and the 404 digits are inline SVG/SVG files, so they stay sharp at any size. The blue grid background is drawn in CSS.
- **Interactivity.** Keyword search, the level/category filters and the review star filter filter the sample data. Topic pills, the sort and filter menus, pagination, course tabs, share, follow, the newsletter form and the login/sign-up forms (with validation and a password visibility toggle) are fully interactive. There is no backend, so the content is static sample data and form submissions only show a confirmation.
- **Accessibility.** Semantic landmarks and headings, labelled form controls, `aria-current` / `aria-pressed` states, keyboard-operable menus (Escape to close) and descriptive `alt` text.

## Development workflow

Each feature was built on its own branch and merged through a pull request:

`feature/landing-page` → `feature/search-page` → `fix/auth-pages-design` → `feature/course-details` → `feature/creator-profile-404` → `feature/home-assets` → `feature/satoshi-fon` → `chore/project-polish`
