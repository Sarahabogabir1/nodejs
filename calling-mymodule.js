var mymodule = require('./mymodule.js');

var path = process.argv[2];
var ext  = process.argv[3];

mymodule(path,ext, function(error,data) {
  
  if(error){ 
    throw (error);
  } else {
    data.forEach(function(file) {
      console.log(file);
    });
  } 

});