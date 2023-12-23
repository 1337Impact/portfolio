import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['pacifico', 'cursive'],
        manrope: ['Manrope', 'sans-serif'],
      },
      keyframes: {
        load: {
          'from': { transform: 'translateY(2rem)', opacity: "0" },
          'to': { transform: 'translateX(0)', opacity: "1" },
        }
      },
      animation: {
        loadProject: 'load 1s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}
export default config
