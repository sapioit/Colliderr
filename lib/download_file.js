var https   = require('https');
var fs      = require('fs');
function download_file(site,path,save){ // download_file('wordpress.com','/latest.zip','/downloaded/wp_latest.zip');
  var options = {
    hostname  : site,
    port      : 443,
    path      : path,
    method    : 'GET'
  };
  
  
  var file = fs.createWriteStream(save);
  
  var req = https.request(options, function(res) {
    console.log("statusCode: ", res.statusCode);
    console.log("headers: ", res.headers);
    res.on('data', function(d) {
  	  file.write(d);
    });
  });
  req.end();
  
  req.on('error', function(e) {
    console.error(e);
  });
}
