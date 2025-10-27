/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      quicksand: ['Quicksand', 'sans-serif'],
      playfair: ['Playfair Display', 'serif'],
      pacifico: ['Pacifico', 'cursive'],
      cinzel: ['Cinzel', 'serif'],
       cormorant: ['"Cormorant Garamond"', 'serif'],
       royal: ['Royal', 'serif'],
       royal: ['Qwenzy', 'serif'],
    },
    },
  },
  plugins: [],
}
