/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'corvus-bg': '#101014',
        'corvus-card': '#181820',
        'corvus-text': '#f8f8f8',
        'corvus-gray': '#b7b7b7',
        'corvus-silver': '#c3c6d1',
        'corvus-red': '#ff3030',
        'corvus-accent': '#d9d9d9'
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}