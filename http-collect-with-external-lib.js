var http = require('http');

var url = process.argv[2];

http.get(url,function(response){
  var content = '';
  response.setEncoding('utf8');
  response.on("data", function(data) {
    content += data;
  });
  response.on("end", function(data) {
    console.log(content.length);
    console.log(content);
  });
});