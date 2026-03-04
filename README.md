# Lumina7 Website

Innovation-powered design studio website built with Astro, featuring a scalable design system, dark mode, and comprehensive SEO optimization.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
lumina7-site/
├── src/
│   ├── components/       # Reusable Astro components
│   ├── layouts/          # Page layouts
│   ├── pages/            # Page routes
│   ├── content/          # Content collections (blog, portfolio)
│   └── styles/           # Global styles and design tokens
├── public/               # Static assets (images, fonts, etc.)
├── docs/                 # Documentation (see docs/README.md)
├── dist/                 # Production build output
└── config files          # Astro, Tailwind, TypeScript configs
```

## 📚 Documentation

All project documentation is organized in the [`docs/`](./docs/) directory:

### Essential Docs
- **[Design System Guide](./docs/DESIGN_SYSTEM.md)** - Complete design system reference
- **[SEO Quick Reference](./docs/SEO-QUICK-REFERENCE.md)** - SEO checklist and guidelines
- **[Refactoring Summary](./docs/REFACTORING_COMPLETE.md)** - Codebase refactoring report

### Full Documentation Index
See [`docs/README.md`](./docs/README.md) for the complete documentation index.

## 🎨 Design System

This project uses a semantic, scalable design system with:

- ✅ Semantic utility classes (`.text-primary`, `.bg-secondary`)
- ✅ Typography hierarchy (`.text-display`, `.text-heading-1/2/3`)
- ✅ Automatic light/dark mode
- ✅ Consistent 4px border radius
- ✅ WCAG AA compliant colors

**Quick Example:**
```html
<h1 class="text-heading-1 text-primary">Page Title</h1>
<p class="text-body text-secondary">Body text adapts to light/dark mode automatically.</p>
```

👉 **[Full Design System Documentation](./docs/DESIGN_SYSTEM.md)**

## 🌗 Dark Mode

- Class-based dark mode (`darkMode: 'class'` in Tailwind)
- User preference stored in localStorage
- System preference respected by default
- Theme toggle in header

## 🏗️ Tech Stack

- **Framework:** [Astro](https://astro.build) v5.16.5
- **Styling:** [Tailwind CSS](https://tailwindcss.com) v3.4.17
- **Typography:** Zalando Sans (custom font)
- **Content:** Astro Content Collections
- **Deployment:** Netlify
- **SEO:** Sitemap, robots.txt, structured data

## 📦 Key Scripts

```bash
npm run dev          # Start dev server (localhost:4321)
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

## 🎯 Key Features

- ✅ **Scalable Design System** - Semantic utility classes throughout
- ✅ **Dark Mode** - User preference with system detection
- ✅ **SEO Optimized** - Structured data, sitemaps, meta tags
- ✅ **Fast Performance** - Astro static site generation
- ✅ **Responsive** - Mobile-first responsive design
- ✅ **Accessible** - WCAG AA compliant
- ✅ **Type Safe** - TypeScript throughout

## 🔧 Configuration Files

- `astro.config.mjs` - Astro configuration
- `tailwind.config.mjs` - Tailwind + design system config
- `tsconfig.json` - TypeScript configuration
- `netlify.toml` - Netlify deployment config

## 📝 Content Management

Content is managed through Astro Content Collections:

- **Blog posts:** `src/content/blog/`
- **Portfolio projects:** `src/content/portfolio/`
- **Configuration:** `src/content/config.ts`

## 🎨 Components

Reusable components with variants:

- `Button.astro` - 4 variants, 3 sizes
- `Card.astro` - 4 variants, 4 padding options
- `Section.astro` - 4 background variants
- `CTA.astro` - Call-to-action component
- `FAQ.astro` - Accordion FAQ component
- `Header.astro` - Site header with navigation
- `Footer.astro` - Site footer
- `ThemeToggle.astro` - Light/dark mode toggle

## 🌍 SEO

Comprehensive SEO implementation:

- ✅ Structured data (Organization, LocalBusiness, etc.)
- ✅ Dynamic sitemaps with `@astrojs/sitemap`
- ✅ Optimized meta tags per page
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Open Graph and Twitter cards

👉 **[SEO Quick Reference](./docs/SEO-QUICK-REFERENCE.md)**

## 📖 Development Guide

### Adding a New Page

1. Create file in `src/pages/`
2. Use semantic classes from design system
3. Follow existing page patterns
4. Add SEO meta tags
5. Test light/dark modes

### Using Design System

```html
<!-- Typography -->
<h1 class="text-heading-1 text-primary">Main Heading</h1>
<h2 class="text-heading-2 text-primary">Section Heading</h2>
<p class="text-body text-secondary">Body text</p>

<!-- Backgrounds -->
<section class="bg-primary">White/dark background</section>
<section class="bg-secondary">Light gray/dark gray background</section>

<!-- Components -->
<Button variant="primary" size="md">Click me</Button>
<Section variant="gray" padding="lg">Content here</Section>
```

### Styling Guidelines

**DO ✅**
- Use semantic utility classes (`.text-primary`, `.bg-secondary`)
- Use component variants for consistent behavior
- Follow typography hierarchy classes
- Use `.rounded` for 4px border radius

**DON'T ❌**
- Don't use arbitrary values (`text-[2.5rem]`)
- Don't add manual transitions (auto-applied)
- Don't mix color scales
- Don't hardcode dark mode colors

## 🔍 Troubleshooting

**Dark mode not working?**
- Check that `darkMode: 'class'` is in `tailwind.config.mjs`
- Verify ThemeToggle component is in Header
- Clear localStorage and test again

**Styles not applying?**
- Rebuild: `npm run build`
- Check Tailwind config includes all file paths
- Verify semantic classes are defined in `design-tokens.css`

**Build errors?**
- Clear cache: `rm -rf dist node_modules/.astro`
- Reinstall: `npm install`
- Check Node version (v18+ required)

## 📞 Support

For questions about the design system, SEO, or codebase structure:
1. Check [`docs/README.md`](./docs/README.md) for relevant documentation
2. Review [DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md) for design questions
3. See [REFACTORING_COMPLETE.md](./docs/REFACTORING_COMPLETE.md) for codebase overview

## 📄 License

© 2025 Lumina7. All rights reserved.

---

**Project Status:** ✅ Production Ready  
**Design System:** ✅ Complete  
**Documentation:** ✅ Comprehensive  
**Build Status:** ✅ Passing  

**Last Updated:** December 10, 2025
