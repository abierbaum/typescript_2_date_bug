/**
 * @author: @AngularClass
 * @author: p5
 */

const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = {
  entry: {
    'main': ['./src/main.ts']
  },

  //debug: true,
  //devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.ts'],
    root: helpers.root('src'),
    modulesDirectories: ['node_modules'],
  },

  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  /*
   * Options affecting the normal modules.
   *
   * See: http://webpack.github.io/docs/configuration.html#module
   */
  module: {

    loaders: [

      /*
       * See: https://github.com/s-panferov/awesome-typescript-loader
       */
      {
        test: /\.ts$/,
        //loader: 'awesome-typescript-loader'
        loader: 'ts-loader'
      },

    ]

  },

  /*
   * Add additional plugins to the compiler.
   *
   * See: http://webpack.github.io/docs/configuration.html#plugins
   */
  plugins: [

    /*
     * Plugin: HtmlWebpackPlugin
     * Description: Simplifies creation of HTML files to serve your webpack bundles.
     * This is especially useful for webpack bundles that include a hash in the filename
     * which changes every compilation.
     *
     * See: https://github.com/ampedandwired/html-webpack-plugin
     */
    new HtmlWebpackPlugin({
       title: 'My App',
       filename: 'index.html',
       template: 'src/index.html'
    })

  ]
};
