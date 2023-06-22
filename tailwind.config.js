/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['light', 'dark', 'cyberpunk', {
      dark: {
        ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
        "neutral-content": "#ffffff",
        "base-content": "#ffffff"
      }
    }]
  },
  plugins: [require('daisyui')],
}

