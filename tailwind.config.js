/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0b4d25',
        secondary: '#19872c',
        dark: '#00402c',
        light: '#d9d9d9'
      },
      fontFamily: {
        codec: ['Codec Pro', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      boxShadow: {
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
    }
  },
  plugins: []
};