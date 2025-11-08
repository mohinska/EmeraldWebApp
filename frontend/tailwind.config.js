/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'emerald-dark': '#272B2C',
        'emerald-gray': '#272B2C',
        'emerald-green': '#15AB33',
      },
      boxShadow: {
        'emerald': '0 2px 8px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)',
        'emerald-lg': '0 4px 12px rgba(0, 0, 0, 0.4), 0 2px 6px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        'pixel': ['JetBrains Mono', 'monospace'],
        'heading': ['Press Start 2P', 'cursive'],
      },
    },
  },
  plugins: [],
}

