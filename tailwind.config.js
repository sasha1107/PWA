/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        skeleton: 'active 1s ease-in-out infinite'
      },
      keyframes: {
        active: {
          '0%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0 50%' }
        }
      }
    }
  },
  plugins: []
};
