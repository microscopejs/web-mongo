// sample controller filter
export function logIp(req, res, next) {
	console.log(req.ip);
	next();
};

// sample action filter
export function logUrl(req, res, next) {
	console.log(req.url);
	next();
};