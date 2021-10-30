//Simple web sever

const http = require('http');

//? Create server object
http
	.createServer((req, res) => {
		// Write response
		//res.write writes to the broswer
		res.write('Hello World');
		res.end();
	})
	.listen(5000, () => console.log('server running'));
