/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors - Using pure black shades
        light: {
          background: '#FFFFFF',
          surface: '#F8FAFC',
          primary: '#000000', // Pure black
          secondary: '#1A1A1A', // 90% black
          accent: '#333333', // 80% black
          muted: '#666666', // 60% black
          border: '#CCCCCC', // 20% black
          'surface-mixed': '#F5F5F5',
          // Additional shades for gradients
          'accent-light': '#4D4D4D', // 70% black
          'accent-lighter': '#666666', // 60% black
          'accent-dark': '#000000', // Pure black
        },
        // Dark mode colors - Using pure white shades
        dark: {
          background: '#0A0A0A',
          surface: '#111111',
          primary: '#FFFFFF', // Pure white
          secondary: '#E6E6E6', // 90% white
          accent: '#CCCCCC', // 80% white
          muted: '#999999', // 60% white
          border: '#333333', // 20% white
          'surface-mixed': '#1A1A1A',
          // Additional shades for gradients
          'accent-light': '#B3B3B3', // 70% white
          'accent-lighter': '#999999', // 60% white
          'accent-dark': '#FFFFFF', // Pure white
        }
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-subtle': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'inner-light': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        'inner-dark': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.05)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
} 