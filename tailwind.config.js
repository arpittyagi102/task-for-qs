/** @type {import('tailwindcss').Config} */
const config = async () => ({
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/flowbite-react/**/*.js',
        './node_modules/flowbite/**/*.js',
    ],
    theme: {
        theme: {
            extend: {}, 
        },
    },
    plugins: [
        (await import('flowbite/plugin')).default,
    ],
});

export default config;
