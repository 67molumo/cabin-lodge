// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Logo-inspired color palette
        primary: '#1B365D',      // Navy blue from logo (mountains & text)
        secondary: '#2E4A6B',    // Slightly lighter navy for variations
        accent: '#FFA500',       // Orange/golden from logo (sun/arc)
        'accent-light': '#FFB84D', // Lighter orange for hover states
        'accent-dark': '#E6940A',  // Darker orange for active states
        light: '#F8F9FA',        // Clean white/light gray
        dark: '#1E1E1E',         // Keep existing dark
        // Additional logo-inspired colors
        'navy': {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#243B53',
          900: '#1B365D',  // Your primary navy
        },
        'orange': {
          50: '#FFF8E7',
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#FFA500',  // Your accent orange
          600: '#FF8F00',
          700: '#FF6F00',
          800: '#E65100',
          900: '#BF360C',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      // Adding some lodge-themed extras
      boxShadow: {
        'cabin': '0 10px 40px rgba(27, 54, 93, 0.1)',
        'warm': '0 4px 20px rgba(255, 165, 0, 0.2)',
      },
      backgroundImage: {
        'gradient-lodge': 'linear-gradient(135deg, #1B365D 0%, #2E4A6B 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #FFA500 0%, #FFB84D 100%)',
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
   
}
