/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,css,html}",
  ],
  darkMode: "class",
  theme: {
    boxShadow: {
      "xxs": "0 1px 5px 1px #ddd",
      "xs": "0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08)",
      "sm": "0 .25rem .375rem -.0625rem hsla(0,0%,8%,.12),0 .125rem .25rem -.0625rem hsla(0,0%,8%,.07)",
      "md": "0 4px 6px rgba(50,50,93,.1),0 1px 3px rgba(0,0,0,.08)",
      "lg": "0 2px 12px 0 rgba(0,0,0,.16)",
      "xl": "0 0 2rem 0 rgba(136,152,170,.15)",
      "2xl": "0 .3125rem .625rem 0 rgba(0,0,0,.12)",
      "3xl": "0 8px 26px -4px hsla(0,0%,8%,.15),0 8px 9px -5px hsla(0,0%,8%,.06)",
    },
    extend: {},
  },
  plugins: [],
}
