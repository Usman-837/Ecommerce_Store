// tailwind.config.js
export default {
	darkMode: 'class',
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
	  extend: {
		colors: {
		  primary: '#000000', 
		  'primary-foreground': '#ffffff',
		  destructive: '#ef4444',
		  'destructive-foreground': '#ffffff',
		  secondary: '#f3f4f6',
		  'secondary-foreground': '#111827',
		  accent: '#e0f2fe',
		  'accent-foreground': '#0369a1',
		  background: '#ffffff',
		  ring: '#3b82f6',
		  input: '#d1d5db',
		}
	  },
	},
	plugins: [],
  }
  