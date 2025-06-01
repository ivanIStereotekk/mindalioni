/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./public/**/*.svg"],
  animation: {
    'fade-in': 'fade-in 3s ease-in-out forwards',
    title: 'title 3s ease-out forwards',
    'fade-left': 'fade-left 3s ease-in-out forwards',
    'fade-right': 'fade-right 3s ease-in-out forwards',
    'spin-slow': 'spin-slow 38s linear infinite',
  'spin-md': 'spin-md 30s linear infinite',
    'spin-faster': 'spin-faster 22s linear infinite',
  
  },
  keyframes: {
    'spin-slow': {
      from: {
        transform: 'rotate(0deg)'
      },
      to: {
        transform: 'rotate(360deg)'
      }
    },
  'spin-md': {
      from: {
        transform: 'rotate(0deg)'
      },
      to: {
        transform: 'rotate(360deg)'
      }
    },
    'spin-faster': {
      from: {
        transform: 'rotate(0deg)'
      },
      to: {
        transform: 'rotate(360deg)'
      }
    },
    'fade-in': {
      '0%': {
        opacity: '0%'
      },
      '75%': {
        opacity: '0%'
      },
      '100%': {
        opacity: '100%'
      }
    },
    'fade-left': {
      '0%': {
        transform: 'translateX(100%)',
        opacity: '0%'
      },
      '30%': {
        transform: 'translateX(0%)',
        opacity: '100%'
      },
      '100%': {
        opacity: '0%'
      }
    },
    'fade-right': {
      '0%': {
        transform: 'translateX(-100%)',
        opacity: '0%'
      },
      '30%': {
        transform: 'translateX(0%)',
        opacity: '100%'
      },
      '100%': {
        opacity: '0%'
      }
    },
    title: {
      '0%': {
        'line-height': '0%',
        'letter-spacing': '0.25em',
        opacity: '0'
      },
      '25%': {
        'line-height': '0%',
        opacity: '0%'
      },
      '80%': {
        opacity: '100%'
      },
      '100%': {
        'line-height': '100%',
        opacity: '100%'
      }
    }
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};


