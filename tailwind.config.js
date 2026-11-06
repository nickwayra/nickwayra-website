/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
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
        }
      }
    }
  },
  plugins: [],
}
