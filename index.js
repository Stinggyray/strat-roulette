#!/usr/bin/nodejs

console.log('Loading libraries...');
let express = require('express');
let path = require('path');
let app = express();
let hbs = require('hbs');
let helmet = require('helmet');
let routes = require('./routes');
// -------------- initialize middleware -------------- //

console.log('Registering Handlebars helpers...');
let helpers = require('./handlebars.js');
helpers.registerHelpers(hbs);

console.log('Registering middleware...');
app.use(function caching(req, res, next) {
	res.set('Cache-Control', 'public, no-cache');
	next();
})

app.use(express.static('static'));

// Enable all sorts of security protocols / headers and scrub other things
app.use(
	helmet({
		contentSecurityPolicy: false,
	})
);

console.log('Configuring Express...');
app.set('port', process.env.PORT || 2343);
app.set('view engine', 'hbs');
app.set('views', './views');
app.set('trust proxy', true);

console.log('Registering partials and routes...');
hbs.registerPartials(__dirname + '/views/partials', function(err) {
});
routes.set(app);

// Register 404
app.get('*', function(req, res) {
	res.status(404);

	if (req.accepts('html')) {
		res.render('notfound', { title: '404' });
		return;
	}
	if (req.accepts('json')) {
		res.send({ error: 'Not found' });
		return;
	}
	res.type('txt').send('Not found');
});

let listener = app.listen(app.get('port'), function() {
	console.log('Express server started.');
	console.log('--------------------------');
});
