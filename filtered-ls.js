var fs = require('fs');

var directory = process.argv[2];
var extname   = process.argv[3];

fs.readdir(directory, function(error,data) {
  for (var i = 0; i < data.length ; ++i) {
    if(data[i].split('.')[1] === extname)
      console.log(data[i]);
  }
});