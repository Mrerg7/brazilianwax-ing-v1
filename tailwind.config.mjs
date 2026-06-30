/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#FDF6F0',
          100: '#F9E8DA',
          200: '#F2D0B5',
          300: '#E8B28A',
          400: '#D98D5C',
          500: '#B85C38',
          600: '#A04E30',
          700: '#853F28',
          800: '#6E3422',
          900: '#5C2C1D',
        },
      },
    },
  },
  plugins: [],
};
