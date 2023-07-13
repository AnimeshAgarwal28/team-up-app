const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
    
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file name
  },
  module: {
    rules: [
      // Rules for handling different file types (e.g., JavaScript, CSS, etc.)
    ],
  },
  plugins: [
    // Plugins configuration (e.g., HtmlWebpackPlugin, MiniCssExtractPlugin, etc.)
        new NodePolyfillPlugin()

      
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // File extensions to resolve
  },
};
