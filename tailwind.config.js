/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-mode="lab"]'],
  content: [
    "./index.html",
    "./x/**/*.html",
    "./research/**/*.html",
    "./yap-session/**/*.html",
    "./yap/**/*.html",
    "./english-conversation/**/*.html",
    "./english/**/*.html"
  ],
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        phoenix: {
          ash: '#191B1E',
          graphite: '#252A2E',
          ivory: '#F4F5EF',
          mintWhite: '#E5FFF1',
          midnightForest: '#102820',
          deepEmerald: '#163D30',
          forestGreen: '#167451',
          jadeEmerald: '#239B72',
          electricMint: '#66E3AE',
          gold: '#E8B45B',
          burgundy: '#773B42',
          sageGray: '#697B70',
          silverSage: '#ABB8B2',
        },
        brand: {
          mint: '#66E3AE',
          emerald: '#167451',
          teal: '#239B72',
          lime: '#E8B45B',
          limeDark: '#163D30',
          pale: '#E5FFF1',
          charcoal: '#191B1E',
          labBg: '#191B1E',
          labSurface: '#252A2E',
          labSurface2: '#102820',
          labLine: '#353C42',
          labGreen: '#66E3AE',
        }
      }
    }
  },
  plugins: [],
}
