/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./App.tsx",
        "./*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                background: '#050505',
                surface: '#0F0F10',
                surfaceHighlight: '#1A1A1C',
                border: 'rgba(255, 255, 255, 0.08)',
                primary: '#EEEEEE',
                secondary: '#888888',
                accent: '#3B82F6', // Subtle blue accent
            },
            animation: {
                'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shimmer': 'shimmer 8s infinite linear',
                'border-beam': 'border-beam 4s linear infinite',
                'float': 'float 10s ease-in-out infinite',
                'glitch': 'glitch 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite',
            },
            keyframes: {
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                },
                'border-beam': {
                    '0%': { 'offset-distance': '0%' },
                    '100%': { 'offset-distance': '100%' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glitch: {
                    '0%': { transform: 'translate(0)' },
                    '20%': { transform: 'translate(-2px, 2px)' },
                    '40%': { transform: 'translate(-2px, -2px)' },
                    '60%': { transform: 'translate(2px, 2px)' },
                    '80%': { transform: 'translate(2px, -2px)' },
                    '100%': { transform: 'translate(0)' }
                }
            }
        },
    },
    plugins: [],
}
