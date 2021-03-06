module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
        60: 60,
      },
      transformOrigin: {
        0: '0%',
      },
      fontFamily: {
        spartan: ['Spartan'],
        brush: ['"Alex Brush"'],
      },
      colors: {
        navy: {
          50: '#F5F9FF',
          100: '#7C8897',
          500: '#1A365D',
        },
        whiteAlpha: {
          500: '#ffffff50',
        },
        whiteAlpha: {
          500: '#ffffff50',
        },
        gray: {
          50: '#FBFBFB',
          500: '#7E7E7E',
        },
      },
      spacing: {
        '7xl': '80rem',
        13: '3.25rem',
        15: '3.75rem',
        114: '28.5rem',
        120: '30rem',
        128: '32rem',
        144: '36rem',
        'max-content': 'max-content',
      },
      minWidth: {
        px: '1px',
        0: '0',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
        114: '28.5rem',
        120: '30rem',
        128: '32rem',
        144: '36rem',
        '7xl': '80rem',
        13: '3.25rem',
        15: '3.75rem',
        114: '28.5rem',
        120: '30rem',
        128: '32rem',
        144: '36rem',
        'max-content': 'max-content',
      },
      minHeight: {
        px: '1px',
        0: '0',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
        114: '28.5rem',
        120: '30rem',
        128: '32rem',
        144: '36rem',
        '7xl': '80rem',
        13: '3.25rem',
        15: '3.75rem',
        114: '28.5rem',
        120: '30rem',
        128: '32rem',
        144: '36rem',
        'max-content': 'max-content',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
