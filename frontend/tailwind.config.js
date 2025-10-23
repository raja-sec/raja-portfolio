/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1C1C1B',
        accent: '#CE4A7E',
      },
    },
  },
  plugins: [],
}


// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: "class", // ✅ Important for theme switching
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         dark: '#1C1C1B',
//         accent: '#CE4A7E',
//       },
//     },
//   },
//   plugins: [],
// }
