function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    } else {
      return `rgb(var(${variableName}))`;
    }
  };
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        google: '#c1351d', // Dark red color for Google login button
        googleHover: '#9e2a2f',
        body: '#5A5A5A',
        heading: '#212121',
        input: '#1D1E1F',
        black: '#000',
        white: '#fff',
        linen: '#FBF1E9',
        linenSecondary: '#ECE7E3',
        olive: '#3D9970',
        maroon: '#B03060',
        brown: '#C7844B',
        placeholder: '#707070',
        borderBottom: '#f7f7f7',
        facebook: '#4267B2',
        facebookHover: '#395fad',
        google: '#4285F4',
        googleHover: '#307bf9',
        success: '#23B848',
        'border-200': withOpacity('--color-border-200'),
        gray: {
          50: '#FBFBFB',
          100: '#F1F1F1',
          150: '#F4F4F4',
          200: '#F9F9F9',
          300: '#E6E6E6',
          350: '#E9ECEF',
          400: '#999999',
          500: '#D8D8D8',
          600: '#3A3A3A',
          700: '#292929',
          800: '#707070',
        },
        status: {
          pending: withOpacity('--color-pending'),
          processing: withOpacity('--color-processing'),
          complete: withOpacity('--color-complete'),
          canceled: withOpacity('--color-canceled'),
          failed: withOpacity('--color-failed'),
          'out-for-delivery': withOpacity('--color-out-for-delivery'),
        },
      },
      fontSize: {
        xxs: '0.725rem',
        '10px': '.625rem',
        '13px': '13px',
        '15px': '15px',
        h1: 'var(--h1)',
        h2: 'var(--h2)',
        h3: 'var(--h3)',
        h4: 'var(--h4)',
        h5: 'var(--h5)',
        h6: 'var(--h6)',
      },
      screens: {
        sm: '480px',
        lg: '1025px',
        '2xl': '1500px',
        '3xl': '1780px',
      },
      spacing: {
        '430px': '430px',
        '450px': '450px',
        '500px': '500px',
        '64vh': '64vh',
      },
      minHeight: {
        '50px': '50px',
      },
      scale: {
        80: '0.8',
        85: '0.85',
        300: '3',
        400: '4',
      },
      animation: {
        shine: 'shine 1s',
      },
      keyframes: {
        shine: {
          '100%': { left: '125%' },
        },
        
      },
    },
    boxShadow: {
      cart: '0 3px 6px rgba(0,0,0,0.12)',
      product: '0 6px 12px rgba(0,0,0,.08)',
      listProduct: '0 2px 4px rgba(0,0,0,.08)',
      navigation: '0 3px 6px rgba(0, 0, 0, 0.16)',
      navigationReverse: '0 -3px 6px rgba(0, 0, 0, 0.16)',
      header: '0 2px 3px rgba(0, 0, 0, 0.08)',
      vendorCard: '1px 1px 4px rgba(0, 0, 0, 0.12)',
      vendorCardHover: '0 6px 18px rgba(0, 0, 0, 0.12)',
      subMenu: '1px 2px 3px rgba(0, 0, 0, 0.08)',
      bottomNavigation: '0 -2px 3px rgba(0, 0, 0, 0.06)',
      cookies: '0 -2px 3px rgba(0, 0, 0, 0.04)',
      avatar: '0px 15px 30px rgba(0, 0, 0, 0.16)',
      dropDown: '0px 10px 40px rgba(41,50,68,0.15)',
      checkoutCard: '0px 2px 2px rgba(0, 0, 0, 0.12)',
      paymentCard: '0px 2px 6px rgba(59, 74, 92, 0.1)',
      cardAction:
        '0 0 0 1px #8898aa1a, 0 15px 35px #31315d1a, 0 5px 15px #00000014',
      variationButton: '0px 1px 2px 0px rgba(0, 0, 0, 0.12)',
      700: 'rgba(0, 0, 0, 0.08) 0px 2px 16px',
      newsTicker: 'rgba(67, 99, 136, 0.04) 0px 6px 15px 0px',
    },
    fontFamily: {
      body: ["'Open Sans', sans-serif"],
      satisfy: ["'Satisfy', cursive"],
      segoe: ["'Segoe UI', sans-serif"],
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};
