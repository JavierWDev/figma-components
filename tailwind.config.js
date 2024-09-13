/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
        'brand-300': '#001A72',
        'brand-200': '#AEB7D2',
        'brand-100': '#F2F4FC',
        'highlight-300': '#9B51E0',
        'highlight-200': '#DFC8F5',
        'highlight-100': '#FAF6FD',
        'nature-400': '#212529',
        'natural-300': '#6C6E7A',
        'natural-200': '#DBDDE6',
        'natural-100': '#F6F6F9',
        'natural-000': '#F8F5FF',
        'success-000': '#F5F9F7',
        'success-100': '#C4DDD1',
        'success-200': '#43936C',
        'success-300': '#193628',
        'warning-000': '#FCF8F4',
        'warning-100': '#EFD5BD',
        'warning-200': '#CD7B2E',
        'warning-300': '#563413',
        'error-000': '#FCF5F4',
        'error-100': '#EFC1BE',
        'error-200': '#CB3A31',
        'error-300': '#601B17',
  		},
      fontFamily: {
        sans: ['Averta', 'Arial', 'sans-serif'],
        serif: ['Averta', 'Georgia', 'serif'],
        mono: ['Averta', 'Courier New', 'monospace'],
      },
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

