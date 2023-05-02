/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 4px rgb(0 0 0 / 0.1)',
      },
      maxWidth: {
        lg: '33rem',
        '2xl': '40rem',
        '3xl': '50rem',
        '5xl': '66rem',
      },
      opacity: {
        1: '0.01',
        2.5: '0.025',
        7.5: '0.075',
        15: '0.15',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        click: {
          '0%, 100%': { transform: 'scale(0.95)' },
          '80%': { transform: 'scale(0.95)' },
        },
        card: {
          '0%, 100%': { transform: 'scale(1.01)' },
          '80%': { transform: 'scale(1.01)' },
        },
      },
      animation: {
        wiggle: 'wiggle 200ms ease-in-out',
        click: 'click 10000ms ease-in-out',
        card: 'card 10000ms ease-in-out',
      },
      maxWidth: {
        1340: '1340px',
      },
      colors: {
        'dark-main': '#0D1117', // Dark background color for the main areas
        'dark-bg': '#161B22', // Slightly lighter background color for cards and sections
        'dark-second': '#21262D', // Alternate dark background color for variety
        'dark-third': '#30363D', // Another alternate dark background color
        dark: '#3A4250', // Color for headings and separators
        'dark-border': '#5B6473', // Color for borders and dividers
        'dark-txt': '#C9D1D9', // Text color for regular text
        'dark-txt-secondary': '#AAB2BB', // Text color for secondary text
        'dark-primary': '#1F6FEB', // Primary color for buttons and highlights
        'dark-accent': '#58A6FF', // Accent color for links and other elements
        white: '#FFFFFF',
        black: '#000000',
        transparent: 'rgba(0, 0, 0, 0)',
        'dark-gray': '#242526',
        'light-gray': '#f9f9f9',
        'light-blue': '#2181e2',
        'royal-brown': {
          50: '#F1ECE4',
          100: '#E5DBCD',
          200: '#CAB69B',
          300: '#B09268',
          400: '#866B46',
          500: '#52422B',
          600: '#433623',
          700: '#32281A',
          800: '#211B12',
          900: '#110D09',
        },

        blue: {
          50: '#E5E5FF',
          100: '#CCCCFF',
          200: '#9999FF',
          300: '#6666FF',
          400: '#3333FF',
          500: '#0000FF',
          600: '#0000CC',
          700: '#000099',
          800: '#000066',
          900: '#000033',
        },

        iris: {
          50: '#EFEAFB',
          100: '#DFD5F6',
          200: '#C0ABED',
          300: '#A081E4',
          400: '#845BDC',
          500: '#6430D3',
          600: '#5025AC',
          700: '#3A1B7E',
          800: '#271254',
          900: '#13092A',
        },

        purple: {
          50: '#F2ECFD',
          100: '#E5D9FC',
          200: '#CBB3F9',
          300: '#B08EF6',
          400: '#9668F3',
          500: '#7D45F0',
          600: '#5812E3',
          700: '#420EAA',
          800: '#2C0971',
          900: '#160539',
        },

        lavender: {
          50: '#FCFBFE',
          100: '#F8F7FD',
          200: '#F5F2FC',
          300: '#EEEAFA',
          400: '#E7E2F9',
          500: '#E1DBF7',
          600: '#A18EE6',
          700: '#6343D5',
          800: '#3C229A',
          900: '#1D114B',
        },

        gray: {
          50: '#f2f2f2',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },

        cultured: {
          50: '#FFFFFF',
          100: '#FDFCFC',
          200: '#FDFCFC',
          300: '#FBF9F9',
          400: '#FBF9F9',
          500: '#F9F7F7',
          600: '#CFBFBF',
          700: '#A38585',
          800: '#725555',
          900: '#372A2A',
        },

        menthol: {
          50: '#FBFEF6',
          100: '#F6FCED',
          200: '#EEF9DC',
          300: '#E5F7CA',
          400: '#DCF4B9',
          500: '#D3F1A7',
          600: '#B1E661',
          700: '#8CD322',
          800: '#5D8D16',
          900: '#2F460B',
        },

        'palm-leaf': {
          50: '#F0F7E8',
          100: '#E1EFD1',
          200: '#C6E1A8',
          300: '#A9D17A',
          400: '#8EC350',
          500: '#6FA037',
          600: '#5A812C',
          700: '#425F21',
          800: '#2D4116',
          900: '#151E0A',
        },

        'moss-green': {
          50: '#ECF7E3',
          100: '#D6EEC3',
          200: '#B0DF8B',
          300: '#86CE50',
          400: '#63A72F',
          500: '#3F6B1E',
          600: '#345819',
          700: '#264012',
          800: '#1A2C0C',
          900: '#0C1406',
        },

        'rocket-metallic': {
          50: '#F3F2F2',
          100: '#E7E6E4',
          200: '#CFCCC9',
          300: '#B7B3AE',
          400: '#9F9A93',
          500: '#857F77',
          600: '#6C6760',
          700: '#514D48',
          800: '#363330',
          900: '#1B1A18',
        },

        almond: {
          50: '#FEFDFB',
          100: '#FCF8F3',
          200: '#FAF4EA',
          300: '#F7EDDE',
          400: '#F5E8D6',
          500: '#F2E1C9',
          600: '#E1BA84',
          700: '#D0913A',
          800: '#906223',
          900: '#463011',
        },

        pink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },

        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },

        'vampire-black': {
          50: '#D5F6DE',
          100: '#B0EDC1',
          200: '#60DC83',
          300: '#28B34F',
          400: '#15602A',
          500: '#041208',
          600: '#030D06',
          700: '#030D06',
          800: '#020804',
          900: '#010402',
        },

        'blue-violet': {
          50: '#EEDCFA',
          100: '#DEBCF5',
          200: '#BE7AEB',
          300: '#9B33E1',
          400: '#721AAD',
          500: '#47106B',
          600: '#380D54',
          700: '#29093E',
          800: '#1D072C',
          900: '#0F0316',
        },

        'dark-blue-violet': {
          50: '#EEDCFA',
          100: '#DEBCF5',
          200: '#BE7AEB',
          300: '#9B33E1',
          400: '#721AAD',
          500: '#47106B',
          600: '#380D54',
          700: '#29093E',
          800: '#1D072C',
          900: '#0F0316',
        },

        'blue-violet': {
          50: '#EFE2F8',
          100: '#E0C6F1',
          200: '#C08DE3',
          300: '#A153D4',
          400: '#7E2DB4',
          500: '#571F7D',
          600: '#451862',
          700: '#33124A',
          800: '#220C31',
          900: '#110619',
        },

        'forest-green': {
          50: '#D7F9E0',
          100: '#B4F4C5',
          200: '#68E88A',
          300: '#21D952',
          400: '#158E36',
          500: '#0A4219',
          600: '#083514',
          700: '#06280F',
          800: '#041B0A',
          900: '#020D05',
        },

        'mughal-green': {
          50: '#E4F6E9',
          100: '#C5ECD0',
          200: '#8BDAA0',
          300: '#51C771',
          400: '#319B4D',
          500: '#1F6131',
          600: '#194D27',
          700: '#133A1D',
          800: '#0C2713',
          900: '#06130A',
        },
      },
    },
    fontSize: {
      '2xs': ['0.75rem', { lineHeight: '1.25rem' }],
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    boxShadow: {
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      '2sm': '0 25px 50px 3px rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 0px 40px 0px rgba(0, 0, 0, 0.1)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      button: '0 0px 10px 1px rgba(0, 0, 0, 0.2), 0 0px 2px 0px rgba(0, 0, 0, 0.05)',
      fb: '0 2px 2px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      ethmenu: '0 0px 5px 1px rgba(0, 0, 0, 0.1), 0 0px 2px 0px rgba(0, 0, 0, 0.05)',
      search: '0 0px 1px 1px rgba(0, 0, 0, 0.2), 0 0px 1px 0px rgba(0, 0, 0, 0.05)',
      card: '0 0px 10px 1px rgba(0, 0, 0, 0.06), 0 0px 2px 0px rgba(0, 0, 0, 0.05)',
      'box-shadow': 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
      featured: '0 0px 50px 1px rgba(0, 0, 0, 0.1), 0 0px 2px 0px rgba(0, 0, 0, 0.05)',
      navbar: '0px 5px 8.5px -4px rgba(120, 120, 120, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      'neubrutalism-xs': '1px 1px 0px 0 rgba(0, 0, 0, 1)',
      'neubrutalism-sm': '2px 2px 0px 0 rgba(0, 0, 0, 1)',
      'neubrutalism-md': '4px 4px 0px 0 rgba(0, 0, 0, 1)',
      'neubrutalism-lg': '5px 5px 0px 0 rgba(0, 0, 0, 1)',
      'neubrutalism-xl': '6px 6px 0px 0 rgba(0, 0, 0, 1)',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ['dark'],
      display: ['group-hover'],
      transform: ['group-hover'],
      scale: ['group-hover'],
      textOpacity: ['dark'],
      outline: ['responsive', 'focus', 'hover', 'active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
