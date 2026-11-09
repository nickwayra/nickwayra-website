/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./research/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          mint: '#00D99A',
          emerald: '#007A59',
          teal: '#009F9A',
          lime: '#C7F36B',
          limeDark: '#79AA27',
          pale: '#B8F5DD',
          charcoal: '#111214',
          labBg: '#080E0D',
          labSurface: '#101A17',
          labSurface2: '#14231E',
          labLine: '#23362E',
          labGreen: '#66E3AE',
        }
      }
    }
  },
  plugins: [],
}
