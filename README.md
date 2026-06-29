# AVGC Studios

Marketing website for **AVGC Studios** — a creative production company that helps churches and ministries amplify their message through visual storytelling, animation, sermon enhancement, content repurposing, and media production.

The site presents services, portfolio work, process, testimonials (including inline video testimonials), FAQs, and contact information for prospective ministry partners.

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | [React 19](https://react.dev/) |
| App framework | [TanStack Start](https://tanstack.com/start) (SSR, file-based routing) |
| Routing | [TanStack Router](https://tanstack.com/router) |
| Data fetching | [TanStack Query](https://tanstack.com/query) |
| Build tool | [Vite 8](https://vite.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| UI components | [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/) patterns |
| Forms & validation | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| Server / deployment | [Nitro](https://nitro.build/) (Cloudflare Workers preset) |
| Tooling | ESLint, Prettier |
| Editor sync | [Lovable](https://lovable.dev/) |

## Prerequisites

- **Node.js** 18+ (20+ recommended), or **Bun**
- npm, pnpm, yarn, or bun for package management

## Getting started

### 1. Install dependencies

Using npm:

```bash
npm install
```

Using Bun:

```bash
bun install
```

### 2. Run the development server

```bash
npm run dev
```

Or with Bun:

```bash
bun run dev
```

The app will be available at the local URL printed in the terminal (typically `http://localhost:5173`).

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build locally

```bash
npm run preview
```

## Available scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot reload |
| `npm run build` | Create an optimized production build |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## Project structure

```
src/
├── assets/          # Images and static media
├── components/      # Reusable UI (SiteHeader, SiteFooter, TestimonialVideo, etc.)
├── hooks/           # Custom React hooks
├── lib/             # Utilities and shared helpers
├── routes/          # File-based pages (TanStack Router)
│   ├── index.tsx    # Home page
│   ├── about.tsx
│   ├── services.tsx
│   ├── work.tsx
│   ├── process.tsx
│   ├── resources.tsx
│   ├── contact.tsx
│   └── __root.tsx   # App shell layout
├── styles.css       # Global styles and design tokens
└── server.ts        # SSR server entry
```

Routes are defined by files in `src/routes/`. See `src/routes/README.md` for routing conventions. `routeTree.gen.ts` is auto-generated — do not edit it manually.

## Deployment

Production builds output to `.output/` via Nitro. The default preset targets **Cloudflare Workers**. After building:

```bash
npx nitro deploy --prebuilt
```

This project is connected to Lovable; commits pushed to the linked branch sync back to the Lovable editor.

## License

Private project — all rights reserved.
