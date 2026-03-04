# Lumina7 Project Structure

## 📁 Directory Organization

```
lumina7-site/
├── 📄 README.md                    # Main project documentation
├── ⚙️  Configuration Files          # Root config files (see below)
│
├── 📚 docs/                        # All project documentation
│   ├── README.md                   # Documentation index
│   ├── DESIGN_SYSTEM.md            # Complete design system guide ⭐
│   ├── DESIGN_SYSTEM_AUDIT.md      # Design audit findings
│   ├── DESIGN_SYSTEM_IMPROVEMENTS.md # Before/after improvements
│   ├── REFACTORING_COMPLETE.md     # Refactoring summary
│   ├── SEO-QUICK-REFERENCE.md      # Quick SEO guide
│   ├── SEO-IMPROVEMENTS.md         # Complete SEO docs
│   ├── WARP.md                     # Development notes
│   └── content-planning/           # Original content specs
│       ├── lumina7_CONTENT_INDEX.md
│       ├── lumina7_homepage_content.md
│       ├── lumina7_about_page_content.md
│       ├── lumina7_services_page_content.md
│       ├── lumina7_work_portfolio_page_content.md
│       └── lumina7_contact_page_content.md
│
├── 🎨 src/                         # Source code
│   ├── components/                 # Reusable components
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Section.astro
│   │   ├── CTA.astro
│   │   ├── FAQ.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   └── ...
│   ├── layouts/                    # Page layouts
│   │   └── Layout.astro
│   ├── pages/                      # Page routes (file-based routing)
│   │   ├── index.astro             # Homepage
│   │   ├── about.astro             # About page
│   │   ├── services.astro          # Services page
│   │   ├── contact.astro           # Contact page
│   │   ├── work.astro              # Work listing
│   │   ├── work/[...slug].astro    # Work detail pages
│   │   ├── insights.astro          # Blog listing
│   │   └── insights/[...slug].astro # Blog detail pages
│   ├── content/                    # Content collections
│   │   ├── config.ts               # Content collection config
│   │   ├── blog/                   # Blog posts (MDX)
│   │   └── portfolio/              # Portfolio projects (MDX)
│   ├── styles/                     # Global styles
│   │   └── design-tokens.css       # Design system tokens
│   └── assets/                     # Source assets
│       └── videos/
│
├── 🌍 public/                      # Static assets (copied to dist)
│   ├── assets/
│   │   ├── images/                 # Images
│   │   ├── logos/                  # Logos
│   │   ├── videos/                 # Videos
│   │   ├── work/                   # Portfolio images
│   │   └── favicon/                # Favicons
│   ├── fonts/                      # Font files
│   ├── robots.txt                  # Search engine instructions
│   ├── favicon.svg                 # Site favicon
│   └── google*.html                # Google verification
│
├── 📦 dist/                        # Production build output (generated)
├── 🔧 node_modules/                # Dependencies (generated)
└── ⚙️  Configuration Files          # See section below
```

## ⚙️ Configuration Files

Located in root directory:

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Astro framework configuration |
| `tailwind.config.mjs` | Tailwind CSS + design system config |
| `tsconfig.json` | TypeScript configuration |
| `netlify.toml` | Netlify deployment config |
| `package.json` | Node dependencies and scripts |
| `package-lock.json` | Dependency lock file |

## 📚 Documentation Organization

All documentation has been moved to the `docs/` directory for better organization:

### Design System
- Complete guide with examples
- Audit findings and recommendations
- Before/after improvements
- Refactoring summary

### SEO
- Quick reference guide
- Complete implementation details
- Structured data examples

### Content Planning
- Original content specifications
- Page-by-page content documentation
- Content index

### Development
- Project context and decisions
- Development notes

**Quick Start:** See [`docs/README.md`](../docs/README.md) for full documentation index.

## 🎯 Key Directories Explained

### `src/components/`
Reusable Astro components with variants:
- **Button** - 4 variants (primary, secondary, outline, ghost)
- **Card** - 4 variants (default, hover, bordered, flat)
- **Section** - 4 variants (default, gray, dark, gradient)
- **CTA** - Call-to-action component
- **FAQ** - Accordion FAQ component
- **Header/Footer** - Site navigation components
- **ThemeToggle** - Light/dark mode switcher

### `src/pages/`
File-based routing:
- `index.astro` → `/`
- `about.astro` → `/about`
- `services.astro` → `/services`
- `work/[...slug].astro` → `/work/*` (dynamic routes)

### `src/content/`
Content collections for blog and portfolio:
- `blog/*.mdx` - Blog posts with frontmatter
- `portfolio/*.mdx` - Portfolio projects with frontmatter
- `config.ts` - Collection schemas and validation

### `src/styles/`
Global styles and design system:
- `design-tokens.css` - CSS variables, utility classes, base styles

### `public/`
Static assets copied directly to output:
- Served at root: `/assets/images/hero.png`
- Not processed by Vite
- Perfect for images, fonts, static files

### `docs/`
All project documentation:
- Design system guides
- SEO documentation
- Content planning
- Development notes

## 🔄 Build Output

The `dist/` directory contains the production build:
```
dist/
├── index.html              # Homepage
├── about/
│   └── index.html          # About page
├── services/
│   └── index.html          # Services page
├── work/
│   ├── index.html          # Work listing
│   └── [project]/          # Individual projects
├── assets/                 # Optimized assets
│   ├── *.js                # JavaScript bundles
│   ├── *.css               # Compiled styles
│   └── ...                 # Images, fonts, etc.
├── sitemap-index.xml       # Sitemap
└── robots.txt              # Crawl instructions
```

## 📝 File Naming Conventions

- **Components:** PascalCase - `Button.astro`, `ThemeToggle.astro`
- **Pages:** kebab-case - `about.astro`, `services.astro`
- **Styles:** kebab-case - `design-tokens.css`
- **Content:** kebab-case - `ai-future-design.mdx`
- **Config:** kebab-case.ext - `astro.config.mjs`

## 🎨 Design System Files

Design system is defined across:

1. **`tailwind.config.mjs`** - Tailwind configuration
   - Color scales
   - Custom font sizes
   - Border radius defaults
   - Spacing scale

2. **`src/styles/design-tokens.css`** - CSS tokens and utilities
   - CSS variables
   - Semantic utility classes
   - Base styles
   - Component utilities

3. **`docs/DESIGN_SYSTEM.md`** - Documentation
   - Usage guidelines
   - Component examples
   - Best practices
   - Migration guide

## 🔍 Finding Files

| To Find... | Look In... |
|------------|------------|
| Page content | `src/pages/` |
| Reusable components | `src/components/` |
| Blog posts | `src/content/blog/` |
| Portfolio projects | `src/content/portfolio/` |
| Images/assets | `public/assets/` |
| Global styles | `src/styles/` |
| Documentation | `docs/` |
| Design system guide | `docs/DESIGN_SYSTEM.md` |
| SEO guide | `docs/SEO-QUICK-REFERENCE.md` |
| Build output | `dist/` |

## 🚀 Workflow

### Development
1. Edit files in `src/`
2. Hot reload updates in browser
3. Check design system guide in `docs/`

### Adding Content
1. Blog: Add to `src/content/blog/`
2. Portfolio: Add to `src/content/portfolio/`
3. Pages: Add to `src/pages/`

### Documentation
1. All docs in `docs/` directory
2. Update `docs/README.md` index when adding new docs
3. Keep main `README.md` in sync

### Building
1. Run `npm run build`
2. Output goes to `dist/`
3. Static assets copied from `public/`
4. Deploy `dist/` to Netlify

## 📖 Quick Links

- **Main README:** [`README.md`](../README.md)
- **Documentation Index:** [`docs/README.md`](../docs/README.md)
- **Design System:** [`docs/DESIGN_SYSTEM.md`](../docs/DESIGN_SYSTEM.md)
- **SEO Guide:** [`docs/SEO-QUICK-REFERENCE.md`](../docs/SEO-QUICK-REFERENCE.md)

---

**Last Updated:** December 10, 2025  
**Status:** ✅ Organized and documented

