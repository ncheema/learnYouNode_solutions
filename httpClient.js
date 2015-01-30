var http = require('http');
//argv[2] is the  url
http.get(process.argv[2], function(response) {
	response.setEncoding("utf8")	//data event emit strings
	response.on("data", function(data){
		console.log(data);
	});
});