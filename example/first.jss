var untitled = require('untitled-js');
var model    = require('untitled-model');
var settings = require('./__settings/settings');

model.connection(settings.DATABASE.default);
var page = untitled.page();
module.exports = page;

var error = false;

page.run = function(req,res){
	error = true;
}

page.get = function(req, res){
	if(!error){
		res.send('OK');
	}
	else{
		res.redirect('https://www.google.com');
	}
}


// page.post = function(req,res){
// 	res.send('hello WOrld');
// }
