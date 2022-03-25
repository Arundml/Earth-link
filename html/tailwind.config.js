module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
 
    extend: {
      
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'siteblue': '#007dba',
        'sitedarkblue': '#0056a0',
        'siteyellow': '#f68d1f',
        'sitedarkyellow': '#e98012',
        'siteblack': '#444444',
      },
      backgroundImage: {
        'banner': "url('./images/home-bg-illo.webp')",
        'footer-bg': "url('/images/elnk-footer-mark-1.webg')",
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'] 
      },
      fontSize: {
        '13px': '13px',
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '21px' : '21px',
        '24px': '24px',
        '28px': '28px',
        '32px': '32px',
        '40px': '40px',
        '72px': '72px',
        
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '3': '3px',
    },
    boxShadow: {
      'plan': '0 1px 4px 2px rgb(0 0 0 / 10%)',
      'h-plan': '0 2px 4px 2px rgb(0 0 0 / 15%)',
    },
    screens: {
      'xxl': '1920px',
      // => @media (min-width: 1920px) { ... }
      'xl': '1500px',
      // => @media (min-width: 1500px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'md': '991px',
      // => @media (min-width: 991px) { ... }
      'smd': '960px',
      // => @media (min-width: 767px) { ... }
      'sm': '767px',
      // => @media (min-width: 767px) { ... }
      'xs': '576px',
      // => @media (min-width: 576px) { ... }
      
 
    },
    screens: {
      '-xxl': { max: '1920px' },
      '-xl': { max: '1500px' },
      '-lg': { max: '1024px' },
      '-md': { max: '991px' },
      '-smd': { max: '960px' },
      '-sm': { max: '767px' },
      '-xs': { max: '576px' },
      '@md': { min: '640px', max: '767px' },
      '@lg': { min: '1024px', max: '1023px' },
      '@xl': { min: '1500px', max: '1279px' },
      '@2xl': { min: '1280px', max: '1535px' },
    },
    maxWidth: {
      'sitecontainer': '1170px',
    }
 
    },
 
  },
  plugins: [],
}