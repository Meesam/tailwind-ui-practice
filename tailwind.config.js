/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'white-color': 'var(--white-color)',
        'Stone-100': 'var(--Stone-100)',
        'Stone-150': 'var(--Stone-150)',
        'Stone-600': 'var(--Stone-600)',
        'Stone-900': 'var(--Stone-900)',
        'Brown-800': 'var(--Brown-800)',
        'Rose-eight': 'var(--Rose-800)',
        'rose-light-pink': 'var(--rose-light-pink)'
      }
    },
    screens: {
      'mobile': '375px',
      'desktop': '1440px'
    },
    fontFamily: {
      poppins: ['Young Serif', 'Outfit']
    }

  },
  plugins: []
}
