/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mmt: {
          blue: '#0084ff',
          darkBlue: '#0054a6',
          deepBlue: '#0f172a',
          red: '#e41d2d',
          orange: '#ff6d38',
          yellow: '#ffb300',
          gray: '#f2f2f2',
          lightBg: '#f4f6f8'
        }
      }
    },
  },
  plugins: [],
}
