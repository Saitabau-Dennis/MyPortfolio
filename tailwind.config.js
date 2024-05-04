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
        'crimson-red':'#990000',
        'black':'#111',
        'cherry-red': '#990011',
        'red': '#FF0000',
        'off-white': '#FCF6F5',
      },
      fontFamily: {
        dis: 'Roboto',
        display: 'Ubuntu, sans-serif', 
        disp:'inter',
      }
    },
  },
}