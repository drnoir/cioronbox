var express = require('express'),
	path = require('path');
	_ = require('underscore');

var app = module.exports = express();

app.set('views', path.join( __dirname, 'views' ) );

app.get('/', ( req, res, next ) => {
	res.render('index');
});

app.use( express.static( path.join( __dirname, 'public' ) ) );