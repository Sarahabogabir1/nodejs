var net = require('net');

var server = net.createServer(function(socket) {
  socket.end(getFormatedDate());
});

server.listen(process.argv[2]);

var getFormatedDate = function () {

  // 2013-07-06 17:42

  var now    = new Date();

  var year   = now.getFullYear();
  var month  = addLeftCero(now.getMonth() + 1); 
  var day    = addLeftCero(now.getDate());
  var hour   = addLeftCero(now.getHours());
  var minute = addLeftCero(now.getMinutes());

  return ""+ year + "-" + month + "-" + day + " " + hour + ":" + minute;

}

var addLeftCero = function (number) {

  var intNumber = parseInt(number);

  if(intNumber <10)
    return "0" + intNumber;
  else
    return number;
}

