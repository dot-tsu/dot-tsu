/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      primary: "#c3b93d",
      secondary: "#e6df89",
      accent: "#e8dc4c",
      content: "#13120a",
      background: "#fafaf4",
    },
    fontFamily: {
      sans: ["Miriam Libre", "sans-serif"],
      print: ["Arial", "sans-serif"],
    },
  },
  plugins: [],
};
