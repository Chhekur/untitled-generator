module.exports.run = function(req,res){
  var url = require('url');
  var q = url.parse(req.url, true);
  if(q.pathname == '/favicon.ico') {
    res.end('Favicon Not Found.....');
    console.log('Favicon Not Found.....');
    return false;
  }
  //res.end();
	return true;
}
