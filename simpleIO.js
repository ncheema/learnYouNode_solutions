var fileName = process.argv[2] //file name
var fs = require('fs')	//load fs module
var array = fs.readFileSync(fileName).toString().split('\n') //read file->conver to string ->split 															 //it
console.log(array.length-1)

