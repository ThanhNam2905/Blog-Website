/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    mode: 'jit',
    theme: {
        extend: {
            lineClamp: {
                7: '7',
                8: '8',
                9: '9',
                10: '10',
            }
        },
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            }
        }
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
}
