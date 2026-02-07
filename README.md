# revinobakmaldi.com

Personal portfolio and landing page for Revino B Akmaldi — Data Science & Analytics Manager and AI Product Builder.

## Overview

A single-page portfolio showcasing 7+ years of experience across data science, analytics, and AI product development. Features animated sections, interactive project cards, and a digital products preview.

## Sections

- **Hero** — Animated gradient background with rotating taglines and profile avatar
- **About** — Professional bio, experience stats, and tech stack highlights
- **Projects** — Featured work including ML systems, BI dashboards, and developer tools
- **Products** — Upcoming digital products (templates, AI tools, courses)
- **Blog** — Latest articles on data engineering and ML deployment
- **Contact** — GitHub, LinkedIn, and email with copy-to-clipboard

## Tech Stack

- **Next.js 16** with React 19 and TypeScript
- **Tailwind CSS 4** for styling
- **Framer Motion** for scroll-triggered animations and transitions
- **Lucide React** for icons
- Deployed on **Vercel**

## Project Structure

```
app/
├── page.tsx          # Main page composing all sections
├── layout.tsx        # Root layout with Geist font
└── globals.css       # Tailwind theme and custom properties

components/
├── navigation.tsx    # Sticky navbar with mobile menu
├── hero.tsx          # Landing section with typing effect
├── about.tsx         # Bio and skills
├── projects.tsx      # Featured work grid
├── products.tsx      # Digital products preview
├── blog.tsx          # Latest articles
├── contact.tsx       # Social links
└── footer.tsx        # Footer with quick links

lib/
└── data.ts           # All site content (projects, posts, products)

types/
└── index.ts          # TypeScript interfaces
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |
