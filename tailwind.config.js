/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx,css}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        primary: '#007984',
        secondary: '#25363E',
        'light-gray': '#82989A'
      },
      fontFamily: {
        'dm-sans': '"DM Sans", sans-serif, serf',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      height: {
        '25': '100px',
      },
    },
  },
  plugins: [],
};
