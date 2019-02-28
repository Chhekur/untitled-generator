var path = require('path');
module.exports = {

	HOST:"127.0.0.1",
	PORT:"3000",
	DEBUG:true,

	SESSION:true,

	DATABASE : {
		default:{
			host: "localhost",
		    user: "root",
		    password: "",
		    database:"test"
		}
	},


	HOME_PAGE: 'template/index.jade',


	MIDDLEWARES : [
		'middlewares/favicon',
		'middlewares/check_user',
		'middlewares/access_denied'
	],

	MODEL_DIR  : path.join(__dirname, '..' , 'models'),
	STATIC_DIR : path.join(__dirname, '..' , 'static'),
	BASE_DIR : path.join(__dirname, '..' ),

	ERROR_PAGE : 'template/error_log.jade',
	// MIDDLEWARES
	// Ex: MIDDLEWARE_DIR : {
	// 	"MyMiddleware":__dirname + '/myMiddlewareDir/middleware.js'
	// },

	TEMPLATES_DIR : path.join(__dirname, '..' ,'template'),

	URL_REWRITE_FILE : path.join(__dirname,'..')

}