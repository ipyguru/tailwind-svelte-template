/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        main: ["Montserrat"],
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      colors: {
        light: "#f8fafc",
        white: "#e2e8f0",
        primary: "#334155",
        secondary: "#64748b",
      },
    },
  },
  corePlugins: {
    aspectRatio: false
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ],
};
