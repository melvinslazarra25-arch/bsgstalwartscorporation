/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: '#0f2746',
        navy2: '#163b68',
        steel: '#64748b',
        lightsteel: '#e2e8f0',
        accent: '#f97316',
        skyaccent: '#0284c7',
        charcoal: '#111827'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        card: '0 18px 45px rgba(15, 39, 70, 0.10)'
      }
    },
  },
  plugins: [],
}
