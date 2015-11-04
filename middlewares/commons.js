import path from 'path';
import swig from 'swig';
import serveStatic from 'serve-static';
import favicon from'serve-favicon';
import cookieParser from'cookie-parser';
import bodyParser from'body-parser';

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