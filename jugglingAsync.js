var http = require('http');
var concat = require('concat-stream')
var myArgs = process.argv.slice(2);
var total = 0;
var result = []
myArgs.forEach(function(url, index) {
	http.get(url,function(response){
		response.setEncoding("utf8")
		response.pipe(concat(function (data){
			result[index] = data;
			total++	
			if (total == myArgs.length) {
				result.forEach(function(string){
					console.log(string)
				});
			}
		}))
	})
	
})