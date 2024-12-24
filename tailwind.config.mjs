/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main_color: "#8750f7",
        primary_color: "#FFFFFF",
        secondary_color: "#DDDDDD",
        bg_main : "#0F0715",
        bg_alt : "#140C1C",
      },
    },
  },
  plugins: [],
};
