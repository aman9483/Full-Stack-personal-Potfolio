

module.exports = {

  rules: [
    {
      test: /\.s[ac]ss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
  ],

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
};
