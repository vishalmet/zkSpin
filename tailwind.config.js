/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customStart: "#3CAEE0",
        customEnd: "#C23DF5"
      },
    },
  },
  plugins: [],
}
