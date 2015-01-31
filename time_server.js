var net = require('net')
var server = net.createServer(function (socket){
    date= new Date();
     string = date.getFullYear() + "-"
       			+ fixFormat(date.getMonth() + 1) + "-"
       			+ fixFormat(date.getDate()) + " "
       			+ fixFormat(date.getHours()) + ":"
      	 		+ fixFormat(date.getMinutes());
     socket.end(string+"\n");
})
function fixFormat(s) {
	return s < 10 ? '0'+s : s;
}
server.listen(process.argv[2])