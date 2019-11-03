const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'public/**/*',
        to: 'build'
      }
    ])
  ]
};
