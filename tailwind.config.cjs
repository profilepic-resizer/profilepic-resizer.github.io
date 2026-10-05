/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'deep-teal': '#287A74',
        'muted-teal': '#55A9A0',
        'mint-green': '#AEEED3',
        'pale-yellow': '#FFF8B0',
        brand: {
          deep: '#287A74',
          muted: '#55A9A0',
          mint: '#AEEED3',
          yellow: '#FFF8B0',
          darkBg: '#0f1817',
          darkCard: '#162322',
          darkBorder: '#233735'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(40, 122, 116, 0.08), 0 2px 6px -2px rgba(40, 122, 116, 0.04)',
        highlight: '0 0 0 2px #AEEED3, 0 8px 24px -4px rgba(40, 122, 116, 0.15)',
        glow: '0 0 25px -5px rgba(174, 238, 211, 0.45)'
      }
    },
  },
  plugins: [],
};
