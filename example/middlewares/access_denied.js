let error_log = require('untitled-js').error_log;
module.exports.run = function(req,res){
  var url = require('url');
  var q = url.parse(req.url, true);
  var check = q.pathname.indexOf('/__');
  if(check > -1) {
    error_log('0008','403 Forbidden',req,res);
    //console.log('Directory Access.... Failed');
    return false;
  }
  // console.log(q.pathname);
  //console.log('Directory Access.... Okay');
  return true;
}
