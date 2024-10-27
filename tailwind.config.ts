import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: [],
  prefix: '',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        tablet: { min: '0', max: '1024px' },
        mobile1: '400px',
        mobile2: '500px',
        tab1: '724px',
        tab2: '824px',
        tab3: '924px',
        tab4: '1024px',
        tab5: '1124px',
      },
      maxHeight: {
        '50vh': '50vh',
        '75vh': '75vh',
      },
      width: {
        half: '50%',
      },
      minWidth: {
        half: '50%',
        onethird: '33.33%',
        third: '66.66%',
        100: '100px',
        150: '150px',
        200: '200px',
      },
      transitionProperty: {
        grid: 'grid-template-columns , grid-template-rows',
        gridrows: 'grid-template-rows',
      },
      gridTemplateRows: {
        '0fr': '0fr',
        '1fr': '1fr',
      },
      gridTemplateColumns: {
        deflayoutopen: '244px minmax(0,1fr)',
        deflayoutclose: '0 minmax(0,1fr)',
        '0fr': '0fr',
        '1fr': '1fr',
      },
      fontSize: {
        tiny: ['8px', '10px'],
        xs: ['10px', '16px'],
        sm: ['12px', '20px'],
        md: ['13px', '22px'],
        body: ['14px', '24px'],
        base: ['16px', '24px'],
        h4: ['18px', '26px'],
        h3: ['20px', '28px'],
        h2: ['24px', '32px'],
        h1: ['36px', '44px'],
      },
      boxShadow: {
        depth4: '0px 2px 4px rgba(22, 22, 24, 0.12)',
        depth16: '0px 6px 16px rgba(22, 22, 24, 0.12)',
        depth64: '0px 16px 32px rgba(22, 22, 24, 0.12)',
      },
      borderWidth: {
        DEFAULT: '1px',
      },

      backgroundImage: {
        'dot-pattern': "url('/dot.svg')",
      },
      backgroundSize: {
        square10: '5px',
      },
      textColor: {
        primary: `black`,
        secondary: `#333`,
        tertiary: `#666`,
      },
      backgroundColor: {
        primary: 'var(--background)',
        secondary: '#007ced;',
      },
      borderColor: {
        primary: '#007ced',
        secondary: '#007ced;',
      },
      animation: {
        fade: 'fadeIn .5s ease-in-out',
        out: 'exit 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        exit: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
