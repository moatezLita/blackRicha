/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      'playfair': ['Playfair', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      //  a made change
      brightness: ['hover','group-hover'],
    },
  },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
// After making changes to the tailwind.config.js file, 
// you may need to rebuild your CSS styles using the Tailwind CLI. 
// You can do this by running the following 
// command:npx tailwindcss build -o output.css
