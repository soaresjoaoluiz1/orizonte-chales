/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0A0A0A',
        ash: '#121212',
        charcoal: '#1A1A1A',
        line: '#262626',
        itauba: '#C08457',
        gold: '#E4A458',
        'gold-soft': '#F0C58A',
        ember: '#FF6B35',
        cream: '#F5F0E6',
        'cream-soft': '#FAF6EC',
        mist: '#7A7368',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3.75rem, 11vw, 10rem)', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(2.75rem, 7.5vw, 6.5rem)', { lineHeight: '0.98', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(2rem, 4.8vw, 4rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
      },
      boxShadow: {
        premium: '0 40px 120px -20px rgba(0,0,0,0.65)',
        glow: '0 0 80px -10px rgba(228,164,88,0.35)',
      },
    },
  },
  plugins: [],
}
