# Lumina7 Website

A modern, responsive website built with Astro, featuring a clean design system, dynamic portfolio pages, and optimized performance.

## Features

- 🎨 **Modern Design System** - Consistent spacing, typography, and colors with reusable components
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Fast Performance** - Static site generation with Astro for optimal loading speeds
- 🎯 **SEO Optimized** - Meta tags, Open Graph, and structured data
- 📝 **Dynamic Content** - Portfolio projects and insights with MDX support
- 🔄 **Smooth Animations** - Subtle micro-interactions and transitions
- 🚀 **Netlify Ready** - Pre-configured for seamless deployment

## Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/)
- **Deployment**: [Netlify](https://netlify.com/)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lumina7-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.astro
│   ├── Card.astro
│   ├── Header.astro
│   └── ...
├── content/            # Content collections
│   ├── blog/          # Insights/blog posts (MDX)
│   └── portfolio/     # Portfolio projects (MDX)
├── layouts/           # Page layouts
├── pages/             # Route pages
├── styles/            # Global styles and design tokens
└── ...
```

### Adding Content

#### Portfolio Projects

Create new `.mdx` files in `src/content/portfolio/`:

```yaml
---
title: "Project Title"
company: "Company Name"
description: "Project description"
year: "2024"
category: "Category"
services: ["Service 1", "Service 2"]
heroImage: "image-url"
featured: true
order: 1
---

# Project content in MDX format
```

#### Insights/Blog Posts

Create new `.mdx` files in `src/content/blog/`:

```yaml
---
title: "Post Title"
description: "Post description"
pubDate: 2024-01-01
category: "Category"
tags: ["tag1", "tag2"]
author: "Author Name"
---

# Post content in MDX format
```

## Deployment

### Netlify (Recommended)

1. Connect your repository to Netlify
2. Build settings are automatically configured via `netlify.toml`
3. Deploy!

The site includes:
- Automatic redirects from `/blog/*` to `/insights/*`
- Optimized headers for performance and security
- 404 error handling

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist/` folder to your hosting provider.

## Configuration

### Site URL

The live site is hosted at [https://lumina7.co.za](https://lumina7.co.za). Update the site URL in `astro.config.mjs` if deploying elsewhere:

```js
export default defineConfig({
  site: 'https://lumina7.co.za',
  // ...
});
```

### Design System

The design system is built with CSS custom properties and Tailwind CSS. Key files:

- `src/styles/design-tokens.css` - Design tokens and utility classes
- `tailwind.config.mjs` - Tailwind configuration
- `src/components/` - Reusable components

### Content Collections

Content is managed through Astro's content collections. Configuration in `src/content/config.ts`.

## Performance

The site is optimized for performance with:

- Static site generation
- Optimized images and assets
- Minimal JavaScript
- CSS inlining for critical styles
- Prefetching for faster navigation

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

© 2016 – 2025 Lumina7. All rights reserved.