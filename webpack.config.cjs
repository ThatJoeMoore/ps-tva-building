const path = require('node:path')

module.exports = {
  mode: 'production',
  entry: {
    'headless-styles-webpack': './src/entry-headless-styles.js',
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    conditionNames: ['development', 'import']
  },
  optimization: {
    minimize: process.env.MINIFY === 'true',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ]
  }

}
