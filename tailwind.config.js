const vwPlugin = require('./src/utils/tailwind-vw-plugin.js')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
        'poppins': ['Poppins', 'system-ui', 'sans-serif'],
        'poppins-light': ['Poppins', 'system-ui', 'sans-serif'],
        'poppins-regular': ['Poppins', 'system-ui', 'sans-serif'],
        'poppins-medium': ['Poppins', 'system-ui', 'sans-serif'],
        'poppins-semibold': ['Poppins', 'system-ui', 'sans-serif'],
        'poppins-bold': ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      }
    },
  },
  plugins: [
    vwPlugin,
    // 添加自定义字体插件 - 每个类使用独立的字体族
    function({ addUtilities }) {
      const newUtilities = {
        '.font-poppins-light': {
          fontFamily: 'Poppins-Light, system-ui, sans-serif',
        },
        '.font-poppins-regular': {
          fontFamily: 'Poppins-Regular, system-ui, sans-serif',
        },
        '.font-poppins-medium': {
          fontFamily: 'Poppins-Medium, system-ui, sans-serif',
        },
        '.font-poppins-semibold': {
          fontFamily: 'Poppins-SemiBold, system-ui, sans-serif',
        },
        '.font-poppins-bold': {
          fontFamily: 'Poppins-Bold, system-ui, sans-serif',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
