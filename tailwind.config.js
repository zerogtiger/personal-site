/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                scp: ['Sauce Code Pro', 'monospace'],
                iosevka: ['Iosevka', ...defaultTheme.fontFamily.mono],
                'sans': ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                bg: "rgb(var(--color-bg-rgb) / <alpha-value>)",
                bg1: "rgb(var(--color-bg1-rgb) / <alpha-value>)",
                bg2: "rgb(var(--color-bg2-rgb) / <alpha-value>)",
                bg3: "rgb(var(--color-bg3-rgb) / <alpha-value>)",
                bg4: "rgb(var(--color-bg4-rgb) / <alpha-value>)",
                fg: "rgb(var(--color-fg-rgb) / <alpha-value>)",
                gray: "rgb(var(--color-gray-rgb) / <alpha-value>)",
                red: "rgb(var(--color-red-rgb) / <alpha-value>)",
                green: "rgb(var(--color-green-rgb) / <alpha-value>)",
                yellow: "rgb(var(--color-yellow-rgb) / <alpha-value>)",
                blue: "rgb(var(--color-blue-rgb) / <alpha-value>)",
                purple: "rgb(var(--color-purple-rgb) / <alpha-value>)",
                aqua: "rgb(var(--color-aqua-rgb) / <alpha-value>)",
                orange: "rgb(var(--color-orange-rgb) / <alpha-value>)",
                // lbg: '#fbf1c7',
                // lbg1: '#ebdbb2',
                // lbg2: '#d5c4a1',
                // lbg3: '#bdae93',
                // lbg4: '#a89984',
                // lfg: '#3c3836',
                // lgray: '#928374',
                // lred: '#9d0006',
                // lgreen: '#79740e',
                // lyellow: '#b57614',
                // lblue: '#076678',
                // lpurple: '#8f3f71',
                // laqua: '#427b58',
                // lorange: '#af3a03',
            },
        },
    },
    plugins: [],
}
