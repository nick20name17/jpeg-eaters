/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                primary: 'BoldPixel'
            },
            textColor: {
                light: '#eeeed1',
                accent: '#79cd52'
            },
            borderColor: {
                light: '#eeeed1',
                accent: '#79cd52'
            },
            backgroundColor: {
                light: '#eeeed1',
                accent: '#79cd52'
            }
        }
    },
    plugins: []
}
