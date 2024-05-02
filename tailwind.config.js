/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      backgroundColor: {
        'cherry-red': '#990011',
        'off-white': '#FCF6F5',
      },
      colors: {
        'cherry-red': '#990011',
        'red': '#FF0000',
        'off-white': '#FCF6F5',
      },
      fontFamily: {
        dis: 'Courier',
        display: 'Ubuntu, sans-serif', 
        disp:'inter',
      }
    },
  },
}