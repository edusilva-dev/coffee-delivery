/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#8047F8',
          dark: '#4B2995',
          light: '#EBE5F9',
        },
        secondary: {
          main: '#DBAC2C',
          dark: '#C47F17',
          light: '#F1E9C9',
        },
        typography: {
          title: '#272221',
          subtitle: '#403937',
          text: '#574F4D',
          label: '#8D8686',
          hover: '#D7D5D5'
        },
        base: {
          button: '#E6E5E5',
          input: '#EDEDED',
          card: '#F3F2F2',
          background: '#FAFAFA',
          white: '#FFFFFF'
        }
      }
    },
  },
  plugins: [],
}

