// Import
import {Controller} from 'microscope-web';
import {logIp, logUrl} from '../filters/commonFilters';

class HomeController extends Controller {

	get filters(){
		return [logIp];
	}
	
	get routes(){
		return {
			'get /': [logUrl, 'index'],
			'get /home/about': 'about'
		}
	}

	// index action
	// GET /
	index(request, response){
		response.render('home/index');
	}

	// about action
	// GET /home/about
	about(request, response){
		response.render('home/about');
	}
}

export default HomeController;