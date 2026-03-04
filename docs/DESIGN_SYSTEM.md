# Lumina7 Design System

## Overview
This document outlines the design system best practices, components, and utilities for the Lumina7 website.

## Design Principles

1. **Consistency**: Use semantic utility classes instead of arbitrary values
2. **Scalability**: All values should be defined in the design system
3. **Simplicity**: One way to do things, clearly documented
4. **Accessibility**: WCAG AA compliant color contrasts and semantic HTML

## Color System

### Approach
- **Single Gray Scale**: Use `gray-*` consistently (not `neutral-*`)
- **Semantic Classes**: Use utility classes like `.text-primary` instead of direct color references

### Color Palette

```css
/* Light Mode */
--text-primary: #18181b (gray-900)
--text-secondary: #52525b (gray-600)
--text-tertiary: #71717a (gray-500)

--bg-primary: #ffffff (white)
--bg-secondary: #fafafa (gray-50)
--bg-tertiary: #f4f4f5 (gray-100)

/* Dark Mode */
--text-primary: #fafafa (gray-50)
--text-secondary: #a1a1aa (gray-400)
--text-tertiary: #71717a (gray-500)

--bg-primary: #0a0a0a
--bg-secondary: #18181b
--bg-tertiary: #27272a
```

### Semantic Utility Classes

```html
<!-- Text Colors -->
<p class="text-primary">Primary text color (auto light/dark)</p>
<p class="text-secondary">Secondary text color</p>
<p class="text-tertiary">Tertiary text color (labels, captions)</p>

<!-- Background Colors -->
<div class="bg-primary">Primary background (white/dark)</div>
<div class="bg-secondary">Secondary background (gray-50/gray-900)</div>
<div class="bg-tertiary">Tertiary background</div>
```

## Typography

### Type Scale

Use predefined typography classes instead of arbitrary font sizes:

```html
<!-- Display Text (Hero Headlines) -->
<h1 class="text-display">Display heading</h1>

<!-- Heading Hierarchy -->
<h1 class="text-heading-1">Page title</h1>
<h2 class="text-heading-2">Section heading</h2>
<h3 class="text-heading-3">Subsection heading</h3>

<!-- Body Text -->
<p class="text-body-lg">Large body text (intro paragraphs)</p>
<p class="text-body">Regular body text</p>
<p class="text-body-sm">Small body text</p>

<!-- Captions & Labels -->
<span class="text-caption">Caption text (uppercase, tracking-wide)</span>
```

### Typography Specifications

| Class | Size | Line Height | Weight | Use Case |
|-------|------|-------------|--------|----------|
| `.text-display` | 4xl-6xl | tight | medium | Hero headlines |
| `.text-heading-1` | 3xl-5xl | tight | medium | H1 page titles |
| `.text-heading-2` | 2xl-3xl | tight | medium | H2 section headings |
| `.text-heading-3` | xl-2xl | tight | medium | H3 subsections |
| `.text-body-lg` | lg | relaxed | normal | Intro paragraphs |
| `.text-body` | base | relaxed | normal | Body copy |
| `.text-body-sm` | sm | normal | normal | Small text |
| `.text-caption` | xs | normal | medium | Labels, captions |

### Font Weights
- **normal (400)**: Body text
- **medium (500)**: Headings, buttons, emphasis
- **semibold (600)**: Strong emphasis (use sparingly)
- **bold (700)**: Very strong emphasis (use rarely)

## Spacing

### Scale
Use Tailwind's default spacing scale (4px base):

```
space-2 (0.5rem / 8px)
space-4 (1rem / 16px)
space-6 (1.5rem / 24px)
space-8 (2rem / 32px)
space-12 (3rem / 48px)
space-16 (4rem / 64px)
space-20 (5rem / 80px)
```

### Section Padding
Use consistent section padding via the `Section` component:

- `sm`: py-12 (48px)
- `md`: py-16 (64px)
- `lg`: py-20 (80px) **[Recommended default]**
- `xl`: py-32 (128px)

## Border Radius

### Consistent Rounding
All interactive elements use 4px border radius by default:

```html
<!-- Use 'rounded' (4px) by default -->
<button class="rounded">Button</button>
<img class="rounded" />
<div class="rounded">Card</div>

<!-- Available options -->
rounded-sm (2px)  - Very subtle
rounded (4px)     - Default [RECOMMENDED]
rounded-md (6px)  - Slightly more round
rounded-lg (8px)  - Noticeably round
rounded-xl (12px) - Very round
```

## Components

### Button Component

```astro
import Button from '@/components/Button.astro';

<Button variant="primary" size="md">Click me</Button>
```

**Variants:**
- `primary`: Dark background, light text (primary CTA)
- `secondary`: Light background, dark text
- `outline`: Border only, transparent background
- `ghost`: No background, hover effect

**Sizes:**
- `sm`: Compact button
- `md`: Default size **[RECOMMENDED]**
- `lg`: Larger button for emphasis

### Card Component

```astro
import Card from '@/components/Card.astro';

<Card variant="hover" padding="md">
  <h3>Card title</h3>
  <p>Card content</p>
</Card>
```

**Variants:**
- `default`: Basic card with subtle shadow
- `hover`: Lifts on hover (use for clickable cards)
- `bordered`: Border instead of shadow
- `flat`: No shadow or border

### Section Component

```astro
import Section from '@/components/Section.astro';

<Section variant="default" padding="lg">
  <h2>Section content</h2>
</Section>
```

**Variants:**
- `default`: White background (light mode), dark background (dark mode)
- `gray`: Light gray background (light mode), darker gray (dark mode)
- `dark`: Always dark background with white text
- `gradient`: Subtle gradient background

## Best Practices

### DO ✅

```html
<!-- Use semantic utility classes -->
<h2 class="text-heading-2 text-primary">Title</h2>
<p class="text-body text-secondary">Description</p>

<!-- Use component variants -->
<Button variant="primary" size="md">Submit</Button>

<!-- Use design system spacing -->
<div class="space-y-6">...</div>

<!-- Use consistent border radius -->
<img class="rounded" />
```

### DON'T ❌

```html
<!-- Don't use arbitrary values -->
<h2 class="text-[2.5rem] leading-[1.1]">Bad</h2>

<!-- Don't mix color scales -->
<p class="text-gray-900 dark:text-neutral-100">Inconsistent</p>

<!-- Don't hardcode colors -->
<div class="bg-neutral-900 dark:bg-gray-950">Confusing</div>

<!-- Don't add transitions manually -->
<a class="transition-colors duration-300">Redundant</a>
```

### Component Usage

```astro
<!-- Good: Using Section component -->
<Section variant="gray" padding="lg">
  <h2 class="text-heading-2 text-primary">My Section</h2>
</Section>

<!-- Bad: Manual implementation -->
<section class="py-20 px-6 lg:px-8 bg-gray-50 dark:bg-[#18181b] transition-colors duration-300">
  <h2 class="text-2xl md:text-3xl font-medium text-gray-900 dark:text-gray-100">My Section</h2>
</section>
```

## Transitions & Animations

### Default Transitions
All interactive elements (`<a>`, `<button>`) automatically have `transition-colors duration-300` applied via base styles.

**DO NOT manually add these classes** unless you need a different timing:

```html
<!-- ✅ Correct - automatic transition -->
<a href="/about" class="text-primary">Link</a>

<!-- ❌ Wrong - redundant -->
<a href="/about" class="text-primary transition-colors duration-300">Link</a>
```

### Available Transitions

Only use these when you need non-default behavior:

- `.transition-transform` - For hover effects (scale, translate)
- `.transition-opacity` - For fade effects
- `.transition-smooth` - For all-property transitions

## Dark Mode

### Strategy
- Class-based dark mode (`darkMode: 'class'` in Tailwind)
- User preference stored in localStorage
- System preference respected by default

### Usage
All semantic utility classes handle dark mode automatically:

```html
<!-- Automatically adapts to dark mode -->
<div class="bg-primary text-primary">
  <h2 class="text-heading-2">Adapts automatically</h2>
</div>
```

Only add `dark:` variants when creating new components or custom styles.

## Accessibility

### Color Contrast
- All text colors meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- Focus states use visible outlines
- Interactive elements have minimum 44x44px touch target

### Semantic HTML
- Use proper heading hierarchy (h1 → h2 → h3)
- Use `<button>` for actions, `<a>` for navigation
- Add `aria-label` for icon-only buttons

## File Structure

```
src/
├── components/
│   ├── Button.astro      # Reusable button component
│   ├── Card.astro        # Reusable card component
│   ├── Section.astro     # Page section wrapper
│   ├── CTA.astro         # Call-to-action component
│   ├── Header.astro      # Site header
│   └── Footer.astro      # Site footer
├── layouts/
│   └── Layout.astro      # Base page layout
├── styles/
│   └── design-tokens.css # Design system tokens & utilities
└── pages/
    └── *.astro           # Page components
```

## Migration Guide

If you find code that doesn't follow these guidelines:

1. **Replace arbitrary values** with design system values
2. **Consolidate color scales** - use `gray-*` only
3. **Use semantic classes** - `.text-primary` instead of `.text-gray-900`
4. **Remove manual transitions** - let base styles handle it
5. **Extract to components** - reusable patterns should be components

## Questions?

Refer to:
- `DESIGN_SYSTEM_AUDIT.md` for the full audit report
- `tailwind.config.mjs` for configuration
- `src/styles/design-tokens.css` for CSS tokens and utilities

