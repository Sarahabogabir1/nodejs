var net = require('net');

var server = net.createServer(function(socket) {
  console.log("Petición");
});

server.listen(8000);

var getFormatedDate = function () {

  // 2013-07-06 17:42

  var now = new Date();

  var year  = now.getFullYear();
  var month = ((now.getMonth() + 1) < 10)?"0"+now.getMonth():""+now.getMonth(); 

  return ""+ year + "-" +

}