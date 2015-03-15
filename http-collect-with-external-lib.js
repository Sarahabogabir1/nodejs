var http = require('http');
var bl   = require('bl');

var url = process.argv[2];

http.get(url,function(response){
  response.pipe(bl(function(error,data) {
    if(error) { 
      throw error; 
    } else {
      console.log(data.toString().length);
      console.log(data.toString());
    }
  }));
});