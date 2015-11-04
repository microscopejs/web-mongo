var path = require('path');
var swig = require('swig');
var serveStatic = require('serve-static')
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/**
 * common middlewares
 */
export function commons (app) {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(serveStatic(path.join(__dirname,'../public')));
}

/**
 * template engine middleware
 */
export function engine(app){
	app.engine('html', swig.renderFile);
	swig.setDefaults({ cache: false });	
}