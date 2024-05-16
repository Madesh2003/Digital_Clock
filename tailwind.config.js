/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        custom: ["myfont"],
        custom2: ['time']
      },
    },
  },
  plugins: [],
}

