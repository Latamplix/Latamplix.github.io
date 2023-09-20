/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'

export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
]
export const theme = {
  extend: {
    backgroundColor: {
      background: 'linear-gradient(180deg, #FFAAF8 0%, #FFF6AE 100%)'
    },
    colors: {
      "primary-color": "var(--primary-color)",
      "secondary-color": "var(--secondary-color)"
    },
  },
}
export const darkMode = 'class'
export const plugins = [nextui()]
