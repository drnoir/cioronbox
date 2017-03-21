var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');

var isDev = global._isDev;

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    'editor/index' : entryFile('./app/editor/build/index.js'),
    vendor : ["react","react-dom"]
  },
  resolve: {
    root : [
      path.join(__dirname, 'libs'),
      path.join(__dirname, 'settings' )
    ]
  },
  output: {
    path: path.join(__dirname, 'public/bundles'),
    filename: '[name].bundle.js',
    publicPath: '/bundles/'
  },
  plugins: mergeMiddleware(
    isDev ? [new webpack.HotModuleReplacementPlugin()] : [],
		[
      new webpack.optimize.CommonsChunkPlugin({name:'vendor',filename:"vendor.bundle.js"})
    ]
  ),
  module: {
    loaders: [
      {
        include: [
          path.resolve(__dirname, './app'),
          path.join(__dirname, 'libs')
        ],
        loaders: [
          'style-loader',
          'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ],
        test: /\.css$/
      },
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: [
          path.join(__dirname, 'app'),
          path.join(__dirname, 'libs')
        ]
      }
    ]
  }
};

console.log(module.exports);

//HELPER FUNCTIONS
function entryFile( src ){
  return mergeMiddleware(
    global._isDev ? ['webpack-hot-middleware/client'] : [], 
    arguments
  )
}

function mergeMiddleware(){
  return _.union.apply( _, arguments );
}

//console.log( mergeMiddleware(["bob"],["rita","and","sue"],["too"]) );