var fs = require('fs');
fs.writeFile(__dirname + "/index.html", "<h3>Hola Node.js</h3>", function(error){
	if (error){
		console.log(error);
	}else{
		console.log("sussefull");
	}
})
