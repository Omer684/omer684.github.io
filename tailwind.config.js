/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Monochrome + single blue accent (editorial-brutalist)
        ink: {
          DEFAULT: '#09090B', // foreground
          soft: '#18181B', // primary
          muted: '#3F3F46', // secondary
        },
        paper: {
          DEFAULT: '#FAFAFA', // background
          card: '#FFFFFF',
          muted: '#F1F3F5',
        },
        line: '#E4E4E7',
        subtle: '#71717A',
        accent: {
          DEFAULT: '#2563EB',
          ink: '#1D4ED8',
          soft: '#DBEAFE',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      maxWidth: {
        wide: '1320px',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
}
