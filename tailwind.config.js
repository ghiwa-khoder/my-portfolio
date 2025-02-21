module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: '#6B9080',
        mediumGreen: '#A4C3B2',
        lightGreen: '#CCE3DE',
        veryLightGreen: '#EAF4F4',
        offWhite: '#F6FFF8',
      },
      perspective: {
        '1000': '1000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        hidden: 'hidden',
      },
    },
  },
  plugins: [],
};