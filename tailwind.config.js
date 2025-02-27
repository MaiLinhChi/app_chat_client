/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        mainBlue: '#E1F1FF',
        lightTheme: '#DEE4E7',
        darkTheme: '#37474F',
      },
      margin: {
        '7px': '7px',
      },
      width: {
        '22rem': '22rem',
      },
      textShadow: {
        md: '0 0 8px rgba(0, 0, 0, 0.5)',
        none: 'none',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-in-out forwards',
        slideOut: 'slideOut 0.5s ease-in-out forwards',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('preline/plugin')],
}
