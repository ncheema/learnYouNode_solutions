var fs = require('fs')
var path = require('path')
module.exports = function(dirName, ext, callback) {
	fs.readdir(dirName,function(err,list) {
		if (err) callback(err);
		else {
			arr = []
			for (var i = 0; i < list.length; i++)
				if (path.extname(list[i]) == "."+ext)
					arr.push(list[i]);
			callback(null, arr);
		}
		
	});
}