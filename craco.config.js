const path = require('path');

module.exports = {
  webpack: {
    alias: {
        '@': path.resolve(__dirname, 'src'),
        '@pages': path.resolve(__dirname, 'src', 'pages'),
        '@styles': path.resolve(__dirname, 'src', 'styles'),
        '@home': path.resolve(__dirname, 'src', 'pages', 'Home'),
        '@home-leftpanel': path.resolve(__dirname, 'src', 'pages', 'Home', 'modules', 'LeftPanel'),
    },
  },
};