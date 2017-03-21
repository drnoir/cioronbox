var path = require('path');
var webpack = require('webpack');
var express = require('express');

var app = express();

//load config
global._config = require('./libs/config')( path.join( __dirname, '/config.json' ) );
//additional configuration via command line - override default information
global._commands = require('./libs/commands')( _config );

if( _config.enableHotLoading ){
	global._isDev = true;
	var config = require('./webpack.config');

	var compiler = webpack(config);

	console.log('webpack middleware added');
	app.use(require('webpack-dev-middleware')(compiler, {
		publicPath: config.output.publicPath,
		stats : {colors:true}
	}));

	app.use(require('webpack-hot-middleware')(compiler));
}

app.set('view engine', 'pug');

app.all( '/', ( req, res ) => res.redirect('/editor') );
app.use( '/editor', require('./app/editor') );

app.use( express.static( path.join( __dirname, 'public' ) ) );

app.listen(_config.port, function(err) {
	if (err) {
		return console.error(err);
	}

	console.log('Listening at http://localhost:'+_config.port+'/');
});
