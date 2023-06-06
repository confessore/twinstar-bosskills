/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        'blue-500': '#2276FC',
        'yellow-100': '#fef7da',
        transparent: 'transparent',
        current: 'currentColor',
        'DEATHKNIGHT': '#c41e3a',
        'DRUID': '#ff7d0a',
        'HUNTER': '#abd473',
        'MAGE': '#69ccf0',
        'PALADIN': '#f58cba',
        'PRIEST': '#ffffff',
        'ROGUE': '#fff569',
        'SHAMAN': '#0070de',
        'WARLOCK': '#9482c9',
        'WARRIOR': '#c79c6e',
      },
      gridTemplateColumns: {
        // Complex site-secific column configuration
        sm: '1fr',
        md: 'repeat(2, 50%)',
        lg: 'repeat(3, minmax(33%, auto))',
        xl: 'repeat(4, minmax(25%, auto))',
        '2xl': 'repeat(5, minmax(20%, auto))',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
    plugins: [],
  },
}
