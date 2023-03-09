/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          primary: '#FFFFFF', 
          accent: '#F5F5F5', 
          textSecondary: '#6192CB', 
          textHover: '#3B4CE4', 
          textPrimary: '#000'
        }
    },
    fontSize: {
      lg: '30px', 
      md: '18px', 
      sm: '14px',
      xs: '12px'
    }
  },
  plugins: [],
}