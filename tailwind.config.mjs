/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Instrument Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Archivo', 'Instrument Sans', 'sans-serif'],
        mono: ['ui-monospace', 'SF Mono', 'Cascadia Mono', 'Menlo', 'Consolas', 'monospace'],
      },
      colors: {
        // Neutral graphite ramp used by legacy Tailwind utilities.
        gray: {
          50: 'oklch(0.97 0.002 260)',
          100: 'oklch(0.94 0.003 260)',
          200: 'oklch(0.88 0.004 260)',
          300: 'oklch(0.78 0.005 260)',
          400: 'oklch(0.64 0.006 260)',
          500: 'oklch(0.52 0.006 260)',
          600: 'oklch(0.42 0.006 260)',
          700: 'oklch(0.32 0.006 260)',
          800: 'oklch(0.24 0.005 260)',
          900: 'oklch(0.18 0.004 260)',
          950: 'oklch(0.12 0.003 260)',
        },
        // Matching neutral ramp for existing neutral-* utilities.
        neutral: {
          50: 'oklch(0.97 0.002 260)',
          100: 'oklch(0.94 0.003 260)',
          200: 'oklch(0.88 0.004 260)',
          300: 'oklch(0.78 0.005 260)',
          400: 'oklch(0.64 0.006 260)',
          500: 'oklch(0.52 0.006 260)',
          600: 'oklch(0.42 0.006 260)',
          700: 'oklch(0.32 0.006 260)',
          800: 'oklch(0.24 0.005 260)',
          900: 'oklch(0.18 0.004 260)',
          950: 'oklch(0.12 0.003 260)',
        },
        // Spot colour - used like a spot ink: CTAs, highlights, outcome chips.
        // Routed through CSS vars so the accent picker can re-ink the site live.
        // Note: var-based colours don't support Tailwind opacity modifiers (spot/25);
        // ink stays literal so text-spot-ink/60 keeps working.
        spot: {
          DEFAULT: 'var(--color-spot)',
          hover: 'var(--color-spot-hover)',
          ink: 'oklch(0.18 0.004 260)',
        },
        paper: 'oklch(0.985 0.002 260)',
        card: 'oklch(0.995 0.001 260)',
        brand: {
          dark: 'oklch(0.18 0.004 260)',
          light: 'oklch(0.985 0.002 260)',
        },
      },
      // Custom font sizes for design system
      fontSize: {
        'display-lg': ['4.95rem', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-md': ['3.3rem', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-sm': ['2.75rem', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        '2.5xl': ['1.75rem', { lineHeight: '1.2' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'slide-in-up': 'slideInUp 0.6s ease-out',
        'slide-in-down': 'slideInDown 0.6s ease-out',
        'zoom-in': 'zoomIn 0.3s ease-out',
        'rotate-slow': 'rotateSlow 10s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Consistent border radius
      borderRadius: {
        'DEFAULT': '0.25rem', // 4px
        'sm': '0.125rem',    // 2px
        'md': '0.375rem',    // 6px
        'lg': '0.5rem',      // 8px
        'xl': '0.75rem',     // 12px
        '2xl': '1rem',       // 16px
        'full': '9999px',
      },
      // Consistent transitions
      transitionDuration: {
        'DEFAULT': '300ms',
      },
    },
  },
  plugins: [],
}
