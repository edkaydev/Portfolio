# Edward Kayiira — Portfolio

A modern, single-page portfolio for Edward Kayiira, a frontend web developer from Uganda. Built with React, TypeScript, Tailwind CSS and Vite, with smooth Framer Motion animations and a particle backdrop.

## Overview

This portfolio presents Edward's work — real client projects, UI/UX designs, certificates and web development expertise — in a clean, fast, interactive single page. Visitors can book a call directly through integrated Calendly scheduling.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Vite 7 + React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4 |
| Animation | Framer Motion |
| Scheduling | react-calendly |
| SEO | react-helmet |
| Icons | lucide-react |

## Features

- **About** — personal introduction and background
- **Portfolio** — featured projects and client work
- **Resume** — downloadable CV
- **Certificates** — credentials and achievements
- **Contact** — Calendly booking + contact section
- **Visual flair** — particle sphere backdrop, animated transitions, sidebar navigation

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
```

Open the printed localhost URL in your browser.

## Scripts

```bash
npm run dev      # Development server (Vite)
npm run build    # Typecheck + production build
npm run preview  # Preview the production build
npm run lint     # Lint with ESLint
```

## Project Structure

```
src/
├── components/     # About, Contact, Certificates, Portfolio, Resume, Sidebar, ParticleSphere
├── data/
│   └── data.ts     # Centralized content data
└── App.tsx
```

## License

Public — see repository for license details.
