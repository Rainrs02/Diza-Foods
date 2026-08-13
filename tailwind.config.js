/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f2f9f5',
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
        sage: {
          300: '#74c69d',
          400: '#52b788',
          500: '#40916c',
          600: '#2d6a4f',
        },
        charcoal: {
          50: '#f8f9fa',
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
        'forest-glow': '0 20px 40px -15px rgba(27, 67, 50, 0.35)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
