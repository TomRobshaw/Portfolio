/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreige: '#AB9884',
        customWhite: '#FDF7F0',
        customBlack: '#000005',
      },
      rotate: {
        '22.5': '22.5deg',
        '30': '30deg',
      },
      translate: {
        '18': '4.5rem',
      },
      filter: {
        'invert-white': 'invert(1)',
        'invert-black': 'invert(0)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'large': '40px',
      }
    },
  },
  plugins: [],
};
