// Import
import {Controller} from 'microscope-web';
import Article from '../models/Article';

class ArticleController extends Controller {

	get baseUrl() {
		return '/api/articles';
	}

	get routes() {
		return {
			'get /': 'index',
			'get /:id': 'show',
			'post /': 'create',
			'put /:id': 'update',
			'delete /:id': 'remove'
		}
	}

	// articles list
	// GET /api/articles
	index(request, response) {
		var offset = request.query.offset || null;
		var limit = request.query.limit || null;
		Article.find().skip(offset).limit(limit).exec((err, articles) => {
			if (err) {
				response.send(err);
			}
            response.json(articles);
		});
	}
	
	// articles details
	// GET /api/articles/:id
	show(request, response) {
		Article.findById(request.params.id, function (err, article) {
            if (err) {
                response.send(err.message);
			}
            response.json(article);
        });
	}

	// articles creation
	// POST /api/articles
	create(request, response) {
		var article = new Article();
		article.title = request.body.title;
		article.description = request.body.description;

		article.save((err) => {
            if (err) {
				response.send(err);
			};
            response.json({ message: 'Article created!' });
        });
	}

	// article update
	// PUT /api/articles
	update(request, response) {
		Article.findOneAndUpdate({ _id: request.params.id }, request.body, (err, article) => {
            if (err) {
				response.send(err);
			};
            response.json({ message: 'Article updated !' });
		});
	}

	// article delete
	// DELETE /api/articles/:id
	remove(request, response) {
		Article.remove({ _id: request.params.id  }, function (err) {
            if (err) {
				response.send(err);
			};
			response.json({ message: 'Article removed!' });
		});
	}
}

export default ArticleController;