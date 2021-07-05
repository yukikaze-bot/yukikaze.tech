module.exports = {
    purge: ['./pages/**/*.tsx'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: '-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
};
