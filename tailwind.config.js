/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",  // For React projects
    "./public/index.html",         // If you use Tailwind classes in the public HTML files
    "./components/**/*.{js,ts,jsx,tsx}", // For Next.js or other component-based projects
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}