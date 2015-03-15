var fs = require('fs');

module.exports = function (path,extension,callback) {

  var filteredFiles = [];

  fs.readdir(path,function(error,files) {
    
    if(error) { 
      callback(error,null); 
    } else {
      
      files.forEach(function(file) {
        if (file.split('.')[1] === extension)
          filteredFiles.push(file);
      });

      callback(null,filteredFiles);
    }
  })

}