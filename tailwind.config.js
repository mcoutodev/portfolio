/** @type {import('tailwindcss').Config} */
import { termDark, termLight } from './src/themes';

export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {}
    },
    daisyui: {
        themes: [
            {
                termDark,
                termLight,
            },
        ],
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui')
    ]
};
