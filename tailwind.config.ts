import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          10: '#8F1118',
          600: '#F6A01E',
        },

      },
      boxShadow: {
        'outline-primary': '0px 0px 0px 3px #E1F5D2',
        'outline-secondary': '0px 0px 0px 3px #F9EBCC',
      },
      padding: {
        'small': '0.25rem 0.75rem',
        'medium': '0.5rem 1rem',
        'large': '0.625rem 1.25rem',
        'xlarge': '0.75rem 1.5rem',
      },


    },
  },
  plugins: [],
}
export default config
