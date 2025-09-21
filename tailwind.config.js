/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#7c3aed', // example purple accent color
        darkbg: '#0f172a',
        darkbg2: '#1e293b',
        lightbg: "#f8fafc",
      },
      transitionProperty: {
        'height': 'height',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        shine: 'shine 1.5s linear infinite',
        wiggle: 'wiggle 0.4s ease-in-out',
        gradient: 'gradient 12s ease infinite',
        slideDown: 'slideDown 0.3s ease-out forwards',
      },
      backgroundSize: {
        '300': '300% 300%',
      },
      backgroundImage: {
        'gradient-animate': 'linear-gradient(-45deg, #4f46e5, #9333ea, #ec4899, #f59e0b)',
      },
    },
  },
  plugins: [],
}
