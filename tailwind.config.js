/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**{.html, .js}"],
  theme: {
    extend: {
      backgroundColor: {
        'cherry-red': '#990011',
        'off-white': '#FCF6F5',
      },
      colors: {
        'color-A':'#F5F3EE',//background
        'color-B':'E1895D',//buttons
        'color-C':'#1B383A',//text
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