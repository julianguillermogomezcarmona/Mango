/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'login6': "url(./src/assets/login/bg_login6.jpg)",
        'modal': "url(/src/assets/admin/fondo.png",
        'test': "url(/src/assets/bg_login2.jpg)"
      },
      colors: {
        'first': '#02161D',
        'second': '#ff6868',
        

      },
    },
  },
  plugins: [],
}

