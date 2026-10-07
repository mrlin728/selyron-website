/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#07090e',
          900: '#0b0f17',
          850: '#111722',
          800: '#172030',
          700: '#233047',
          600: '#384763',
          500: '#55698a',
          400: '#8ba0c2',
          300: '#c5d3ea',
          200: '#e2ebf7',
          100: '#f1f5fb',
        },
        cyber: {
          blue: '#3b82f6',
          cyan: '#06b6d4',
          emerald: '#10b981',
          violet: '#8b5cf6',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Syne"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-line': 'glowLine 3s ease-in-out infinite',
      },
      keyframes: {
        glowLine: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.8 },
        }
      }
    },
  },
  plugins: [],
}
