var http = require('http');

var responses = [];
var responsesCount = 0;

var createGet = function(id,url) {

  http.get(url,function(response) {
    
    var content = '';

    response.on('data', function(data) {
        content += data.toString();
    });

    response.on('end',function(data){

      responses[id] = content;
      responsesCount++;

      if(responsesCount === 3) {
        responses.forEach(function(element) {
          console.log(element);
        });
      }

    });
  });

};

var firstParameter = 2;

for (var i = 0 ; i < 3; i++)
  createGet(i,process.argv[firstParameter + i]);
