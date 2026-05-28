/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"  
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#050816',
          card: '#0F172A',
          accent: '#0A84FF',
          muted: '#94A3B8',
          border: '#1E293B',
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
