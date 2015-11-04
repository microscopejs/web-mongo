// Import
import {Controller} from 'microscope-web';
import Article from '../models/Article';

class ArticleController extends Controller {
	
	get baseUrl(){
		return '/articles';
	}

	// configure controller routing with callback array
	get routes(){
		return {
			'get /': 'index',
			'get /:id': 'show',
			'post /': 'create'
		}
	}

	// articles list
	// GET /articles
	index(request, response){
		Article.find((err, articles) => {
			if (err){
				response.send(err); 
			}
            response.json(articles);
		});
	}
	
	// articles details
	// GET /articles/:id
	show(request, response){
		Article.findById(request.params.id, function(err, article) {
            if (err){
                response.send(err.message);
			}
            response.json(article);
        });
	}

	// articles creation
	// POST /articles
	create(request, response) {
		var article = new Article();
		article.title = "other";
		article.description = "again";
		
		article.save((err) => {
            if (err) {
				response.send(err);
			};
            response.json({ message: 'Article created!' });
        });
	}
}

export default ArticleController;