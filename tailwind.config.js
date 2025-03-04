module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],  // Scan all source files
  theme: {
    extend: {
      fontFamily: {
        'artico': ['Artico', 'sans-serif'], // Add Artico font
      },
    },
  },
  plugins: [
    // Add the scrollbar-hide plugin here
    require('tailwind-scrollbar-hide'),
  ],
};
