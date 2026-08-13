/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Forest green — dark, used for headers, dark backgrounds (hybrid dark hero)
        forest: {
          50:  '#f2f9f5',
          100: '#e1f3e8',
          200: '#c3e6d2',
          300: '#96d2b3',
          400: '#62b88f',
          500: '#40916c',
          600: '#2d6a4f',
          700: '#1b4332',
          800: '#143528',
          900: '#0d241b',
          950: '#06130e',
        },
        // Compro primary — exact colors extracted from PDF
        compro: {
          dark:     '#2d5a27',  // dark forest green (card visi, decorative blobs)
          mid:      '#3d6b21',  // mid forest green
          lime:     '#7ab317',  // lime/yellow-green (card misi, name accents)
          lime2:    '#8dc63f',  // lighter lime
          offwhite: '#f5f7f0',  // page background (off-white natural)
          cream:    '#f0f4e8',  // slightly greener off-white
        },
        // Sage — softer greens
        sage: {
          300: '#74c69d',
          400: '#52b788',
          500: '#40916c',
          600: '#2d6a4f',
        },
        // Lime — compro accent scale
        lime: {
          50:  '#f7fbee',
          100: '#edf6d6',
          200: '#d8edaa',
          300: '#bde077',
          400: '#a2d04d',
          500: '#8dc63f',
          600: '#7ab317',
          700: '#5d8c12',
          800: '#4a700e',
          900: '#3d5c0e',
        },
        charcoal: {
          50:  '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#161a1d',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'emerald-glow': '0 10px 30px -10px rgba(64, 145, 108, 0.25)',
        'forest-glow':  '0 20px 40px -15px rgba(27, 67, 50, 0.35)',
        'lime-glow':    '0 10px 30px -10px rgba(122, 179, 23, 0.35)',
        'compro-card':  '0 4px 24px 0 rgba(45, 90, 39, 0.12)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

