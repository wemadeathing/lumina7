# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Core Commands
- `npm run dev` - Start development server at http://localhost:4321
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally

### Development Notes
- The dev server runs on port 4321 by default
- No separate linting or typechecking scripts are defined in package.json
- TypeScript uses Astro's strict config (`astro/tsconfigs/strict`)

## Project Architecture

### Tech Stack
This is an **Astro 5.x** static site with:
- **Tailwind CSS** for styling
- **MDX** for content pages
- **Static site generation** (SSG) - outputs to `dist/`
- Deployed to **Netlify**

### Content Architecture
The site uses **Astro Content Collections** with two main collections:

1. **Portfolio** (`src/content/portfolio/*.mdx`)
   - Schema: title, company, description, year, category, services[], heroImage, images[], featured, order
   - Accessed at `/work/[slug]`
   - Featured projects can be shown on homepage

2. **Blog/Insights** (`src/content/blog/*.mdx`)
   - Schema: title, description, pubDate, category, tags[], author, readTime
   - Accessed at `/insights/[slug]`
   - Note: `/blog/*` redirects to `/insights/*` (see netlify.toml)

### Routing Structure
- Static pages: `/` (index), `/about`, `/services`, `/contact`
- Dynamic routes: `/work/[...slug].astro`, `/insights/[...slug].astro`
- List pages: `/work.astro`, `/insights.astro`
- All route files are in `src/pages/`

### Component Architecture
- **Layout.astro**: Base layout with SEO meta tags, fonts (IBM Plex Sans/Serif), and page transition scripts
- **Header.astro**: Sticky header with mobile menu, smooth scrolling, and hover effects
- **Footer.astro**: Site footer
- **Button.astro, Card.astro, Section.astro**: Reusable UI primitives
- **CTA.astro, FAQ.astro, FAQAccordion.tsx**: Homepage sections
- Components use Astro's component syntax (`.astro` files with frontmatter)

### Design System
The site has a comprehensive design system with two layers:

1. **CSS Custom Properties** (`src/styles/design-tokens.css`):
   - Color palette (grays, neutrals, accent)
   - Typography scale and font families
   - Spacing scale (space-1 through space-64)
   - Shadows, border radius, transitions, z-index
   - Utility classes: `.btn`, `.card`, `.container`, `.section-padding`
   - Hover effects: `.hover-lift`, `.hover-scale`, `.hover-glow`, etc.

2. **Tailwind Config** (`tailwind.config.mjs`):
   - Custom animations (fade-in, slide-up, float, wiggle, etc.)
   - Extended color palette matching design tokens
   - Custom spacing values (18, 88, 128)
   - Font families (IBM Plex Sans, IBM Plex Serif)

**Important**: When styling components, prefer Tailwind classes for consistency, but use design-tokens.css utilities for custom effects and transitions.

### Performance Optimizations
- CSS minification enabled
- HTML compression enabled
- Prefetching enabled (viewport strategy)
- Static asset hashing for cache busting
- Inline stylesheets (auto mode)

## Working with Content

### Adding Portfolio Projects
Create `.mdx` files in `src/content/portfolio/` with frontmatter:
```yaml
---
title: "Project Name"
company: "Company Name"
description: "Brief description"
year: "2024"
category: "Category"
services: ["Service 1", "Service 2"]
heroImage: "image-url"
featured: true  # Show on homepage
order: 1  # Display order
---
```

### Adding Blog Posts
Create `.mdx` files in `src/content/blog/` with frontmatter:
```yaml
---
title: "Post Title"
description: "Description"
pubDate: 2024-01-01
category: "Category"
tags: ["tag1", "tag2"]
author: "Author Name"
readTime: "5 min read"
---
```

### Content Collection Schema
Schema is defined in `src/content/config.ts` using Zod validation. When modifying content types, update this file first.

## Deployment

### Netlify Configuration
The site is configured for Netlify deployment via `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18
- Redirects: `/blog/*` → `/insights/*` (301)
- Security headers and caching policies are configured

### Site Configuration
- Production URL: https://lumina7.co.za
- Update `site` in `astro.config.mjs` if deploying to a different domain

## Key Technical Details

### Page Transitions
The site implements custom page transitions via JavaScript in `Layout.astro`:
- Entrance animations (fade in, translate up)
- Exit animations on navigation
- Smooth scrolling for anchor links
- Enhanced hover effects on interactive elements

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px
- Max content width: 1280px (7xl)

### Typography
- Headings use `font-weight: 500` with negative letter-spacing
- `.text-display` class for hero text (clamp: 2.5rem → 6rem)
- `.text-large` class for subheadings (clamp: 1.5rem → 2.5rem)
- Body text uses IBM Plex Sans, headings can use either Sans or Serif

## Common Patterns

### Creating New Pages
1. Add `.astro` file in `src/pages/`
2. Import and use `Layout.astro` with title and description
3. Import `Header.astro` and `Footer.astro`
4. Use Tailwind classes and design token utilities for styling

### Working with Dynamic Routes
- Use `[...slug].astro` for catch-all routes
- Use `getCollection()` from `astro:content` to fetch content
- Use `getStaticPaths()` for SSG with dynamic routes

### Styling Best Practices
- Use Tailwind utility classes for layout and basic styling
- Use design token CSS variables for colors and spacing when needed
- Apply hover effects using design-tokens.css utilities or Tailwind
- Keep animations subtle (follow existing patterns)
- Maintain the minimalist, professional aesthetic
