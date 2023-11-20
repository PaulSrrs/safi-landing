/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        // Using modern `rgb`
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        cream: 'rgb(var(--color-bg) / <alpha-value>)',
        'purple-contrast': 'rgb(var(--color-purple-contrast) / <alpha-value>)',
        'purple-from': 'rgb(var(--color-purple-from) / <alpha-value>)',
        'purple-to': 'rgb(var(--color-purple-to) / <alpha-value>)',
      }
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1024px',
        '2xl': '1024px',
      },
    },
  },
  plugins: [],
}