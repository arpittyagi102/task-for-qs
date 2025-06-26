// tailwind.config.mjs
import flowbite from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.js',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite],
};
