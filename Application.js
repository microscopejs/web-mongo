// Imports
import {HttpApplication} from 'microscope-web';
import HomeController from './controllers/HomeController';
import ArticleController from './controllers/ArticleController';
import {commons, engine} from './middlewares/commons';

class Application extends HttpApplication {
	
	get configurations(){
		return {
			'view engine': 'html',
			'view cache': false,
			'views':  __dirname + '/views'
		};
	}
	
	get middlewares(){
		return [commons, engine];
	}

	get controllers(){
		return [HomeController, ArticleController];
	}
}

export default Application;