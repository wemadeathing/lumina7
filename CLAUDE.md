# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Lumina7 is an Astro-based static site for a design studio. The site features a scalable design system, dark mode, content collections, and comprehensive SEO optimization. Built with Astro v5, Tailwind CSS, and MDX for content.

**Site URL:** https://lumina7.co.za
**Deployment:** Netlify

## Development Commands

```bash
# Development
npm run dev          # Start dev server at localhost:4321

# Production
npm run build        # Build static site to dist/
npm run preview      # Preview production build locally

# Utilities
npm run astro        # Access Astro CLI (e.g., npm run astro add tailwind)
```

## Architecture Overview

### Content Collections System

The site uses Astro Content Collections with type-safe schemas defined in `src/content/config.ts`:

- **Blog posts:** `src/content/blog/` - Articles with frontmatter (title, description, pubDate, category, tags)
- **Portfolio projects:** `src/content/portfolio/` - Client work with images, services, outcomes, featured flag

Both collections use MDX format and are queried via `getCollection()` throughout the site.

### Design System Architecture

The design system is **CSS custom properties + Tailwind utilities**:

1. **Design Tokens** (`src/styles/design-tokens.css`)
   - CSS variables for colors, typography, spacing, shadows, transitions
   - Light/dark mode variables (`:root` and `html.dark`)
   - Semantic utility classes (`.text-primary`, `.bg-secondary`, `.text-heading-1`)

2. **Tailwind Config** (`tailwind.config.mjs`)
   - Extends default Tailwind with custom colors, animations, typography scales
   - `darkMode: 'class'` - dark mode toggled via `.dark` class on `<html>`
   - Custom border radius (4px default), gray scale palette

3. **Component Variants System**
   - Components like `Button.astro`, `Card.astro`, `Section.astro` accept `variant` and `size` props
   - Example: `<Button variant="primary" size="md">Click</Button>`
   - Variants defined as objects mapping to Tailwind classes

**Critical:** Always use semantic classes (`.text-primary`, `.bg-secondary`) over direct Tailwind colors (`text-gray-900`) to ensure light/dark mode compatibility.

### Layout Structure

- **Base Layout:** `src/layouts/Layout.astro`
  - Handles SEO meta tags (Open Graph, Twitter cards, canonical URLs)
  - Structured data (JSON-LD for Organization/LocalBusiness)
  - Dark mode initialization script (runs before page render to prevent FOUC)
  - Imports `design-tokens.css`

- **Page Routes:** `src/pages/`
  - File-based routing: `index.astro`, `about.astro`, `services.astro`, etc.
  - Dynamic routes: `insights/[...slug].astro`, `work/[...slug].astro`
  - 404 page: `404.astro`

### Component System

Core reusable components in `src/components/`:

- `Button.astro` - 4 variants (primary, secondary, outline, ghost), 3 sizes, polymorphic (renders `<a>` if `href` provided)
- `Card.astro` - Multiple variants for different visual styles
- `Section.astro` - Section wrapper with background variants, padding options
- `Header.astro` - Site navigation with mobile menu, includes `ThemeToggle`
- `Footer.astro` - Site footer with links, structured for SEO
- `ThemeToggle.astro` - Dark mode toggle (updates `localStorage` + `<html>` class)
- `CTA.astro` - Call-to-action sections
- `FAQ.astro` - Accordion-style FAQ component

### Dark Mode Implementation

Class-based dark mode (`darkMode: 'class'` in Tailwind):

1. **Toggle:** `ThemeToggle.astro` component updates `localStorage.setItem('color-theme', 'dark')`
2. **Initialize:** Inline script in `Layout.astro` `<head>` reads `localStorage` and adds/removes `.dark` class on `<html>`
3. **Styles:** All components use semantic classes that automatically adapt (`.text-primary`, `.bg-primary`)

**FOUC Prevention:** Dark mode script is `is:inline` in `<head>` before page render.

### SEO Architecture

Comprehensive SEO built into `Layout.astro`:

- **Meta Tags:** Description, Open Graph, Twitter cards, canonical URLs
- **Structured Data:** JSON-LD for Organization, LocalBusiness (includes address, phone, social profiles)
- **Sitemaps:** Auto-generated via `@astrojs/sitemap` integration
- **robots.txt:** Located in `public/robots.txt`
- **Prefetching:** Enabled for viewport links (`prefetch: { prefetchAll: true }` in `astro.config.mjs`)

When creating new pages, always provide `title`, `description`, and optionally `image` props to `Layout`.

## Brand Voice Guidelines

Sourced from `.cursor/rules/brand-voice.mdc`:

**Core Voice:** Confident but humble, professional but warm, outcome-oriented, accessible not academic.

**Language Framework:**
- **Use:** Partner, collaborate, professional, genuine, strategic, thoughtful
- **Avoid:** Disrupt, revolutionary, stunning, bleeding-edge, jargon like "touchpoints"

**Structure:** Start with action verbs, be specific (e.g., "15+ years"), connect to business outcomes, use "we" language.

When writing content (blog posts, page copy), adhere to these voice guidelines. Sound like a trusted business advisor, not a flashy agency.

## Design System Best Practices

### Typography

Use semantic classes instead of arbitrary sizes:

```html
<h1 class="text-heading-1">Page Title</h1>
<h2 class="text-heading-2">Section Heading</h2>
<p class="text-body-lg">Intro paragraph</p>
<p class="text-body">Body text</p>
<span class="text-caption">LABEL TEXT</span>
```

**DO NOT** use arbitrary values like `text-[2.5rem]` or direct Tailwind sizes (`text-5xl`) - always use semantic classes.

### Colors

Always use semantic color utilities:

```html
<div class="bg-primary text-primary">Primary background with primary text</div>
<div class="bg-secondary text-secondary">Secondary background with secondary text</div>
```

**DO NOT** hardcode colors like `bg-gray-900 dark:bg-gray-100` - use `.bg-primary` instead.

### Components

Prefer using component variants:

```astro
<Button variant="primary" size="md" href="/contact">Get in Touch</Button>
<Section variant="gray" padding="lg">
  <h2>Section Content</h2>
</Section>
```

### Border Radius

Standard border radius is 4px (`.rounded` or no modifier). Use `.rounded-full` for pills/buttons only.

### Transitions

All interactive elements automatically have 300ms transitions. Additional classes available:
- `.transition-smooth`, `.transition-fast`, `.transition-slow`
- `.hover-lift`, `.hover-scale`, `.hover-glow`

## File Organization

```
src/
├── components/       # Reusable UI components (Button, Card, etc.)
├── layouts/          # Page layouts (Layout.astro is main)
├── pages/            # File-based routes
│   ├── index.astro       # Homepage
│   ├── about.astro       # About page
│   ├── services.astro    # Services page
│   ├── insights.astro    # Blog listing
│   ├── insights/[...slug].astro  # Blog post detail
│   ├── work/[...slug].astro      # Portfolio detail
│   ├── contact.astro
│   └── 404.astro
├── content/          # Content collections
│   ├── blog/             # MDX blog posts
│   ├── portfolio/        # MDX portfolio items
│   └── config.ts         # Collection schemas (Zod validation)
└── styles/
    └── design-tokens.css # Design system foundation

docs/                 # Project documentation
├── README.md             # Docs index
├── DESIGN_SYSTEM.md      # Full design system reference
└── SEO-QUICK-REFERENCE.md

public/               # Static assets (images, fonts, robots.txt)
├── assets/
│   ├── logos/
│   ├── textures/
│   └── favicon/
└── fonts/
```

## Configuration Files

- `astro.config.mjs` - Astro configuration (integrations: tailwind, sitemap, mdx)
- `tailwind.config.mjs` - Tailwind + design system extensions
- `tsconfig.json` - TypeScript config (extends Astro strict preset)
- `netlify.toml` - Netlify deployment config (if exists)

## Common Patterns

### Creating a New Page

1. Create file in `src/pages/` (e.g., `new-page.astro`)
2. Import and use `Layout` component
3. Pass `title`, `description`, `image` props for SEO
4. Use semantic classes from design system
5. Test light and dark modes

Example:

```astro
---
import Layout from '../layouts/Layout.astro';
import Section from '../components/Section.astro';
---

<Layout
  title="Page Title | Lumina7"
  description="Page description for SEO"
>
  <Section variant="primary" padding="lg">
    <h1 class="text-heading-1 text-primary">Page Heading</h1>
    <p class="text-body text-secondary">Content here.</p>
  </Section>
</Layout>
```

### Adding Blog Posts

1. Create MDX file in `src/content/blog/` with frontmatter:

```mdx
---
title: "Post Title"
description: "Post description"
pubDate: 2025-01-15
category: "Design"
tags: ["branding", "strategy"]
heroImage: "/assets/blog/hero.jpg"
---

Post content here...
```

2. Query in pages using `getCollection('blog')`

### Adding Portfolio Items

Similar to blog posts, create in `src/content/portfolio/` with schema fields like `company`, `services`, `heroImage`, `featured`, `order`.

### Modifying Design Tokens

1. Edit `src/styles/design-tokens.css` for CSS variables
2. Update `tailwind.config.mjs` for Tailwind extensions
3. Rebuild with `npm run build` to see changes

## Important Notes

- **Font:** Uses Instrument Sans (Google Fonts) via preconnect in `Layout.astro`
- **Static Output:** Site is fully static (`output: 'static'`), no SSR
- **CSS Minification:** Enabled in Vite config for production builds
- **Prefetching:** Viewport-based prefetching enabled for faster navigation
- **Node Version:** Requires Node.js v18+ (Astro 5 requirement)

## Troubleshooting

**Dark mode not working:**
- Verify `darkMode: 'class'` in `tailwind.config.mjs`
- Check `ThemeToggle` is in `Header.astro`
- Ensure dark mode script is `is:inline` in `Layout.astro` head

**Build errors:**
- Clear cache: `rm -rf dist node_modules/.astro`
- Reinstall: `npm install`

**Styles not applying:**
- Check semantic classes are defined in `design-tokens.css`
- Verify Tailwind content paths include all file extensions

## Documentation

Full docs in `docs/` directory:
- `docs/DESIGN_SYSTEM.md` - Complete design system reference
- `docs/SEO-QUICK-REFERENCE.md` - SEO guidelines and checklist
- `docs/README.md` - Documentation index
