/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
      },
    },
    backgroundImage: {
      explosion: 'url("/bg-explosion.png")',
      circles: 'url("/bg-circles.png")',
      circleStar: 'url("/circle-star.svg")',
      site: 'url("/site-bg.svg")',
    },
    keyframes: {
      animate: {
        '0%, 100%': { transform: 'translateY(20px)' },
      },
    },
    animation: {
      'spin-slow': 'spin 6s linear infinite',
      'animateBounce': 'animate 2s infinite ease alternate',
    },
  },
  plugins: [],
}

