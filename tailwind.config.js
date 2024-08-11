/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
    extend: {
        fontFamily: {
            Roboto: ['Roboto', 'sans-serif'],
            Playfair: ['Playfair Display', 'serif'],
          },
        colors: {
            mi_verde: "#23DE81",
            mi_gris: "#EAEAEA",
        }
    },
  },
  plugins: [],
}

