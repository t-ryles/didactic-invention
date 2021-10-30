/*const Logger = require('./logger');
const logger = new Logger();

logger.on('message', (data) => console.log('Called listener', data));

logger.log('Hello World');

console.log('-------------------------');

console.log('Hello from Node.JS');

//Since it is a file, use {./} then the path to file
const Person = require('./person');
//Setting a varble to require the person object from the file of person.js
//const person = require('./person');

//Logging the person object from the person.js file
//console.log(person);

const person1 = new Person('John Doe', 30);

person1.greeting();*/

console.log('-------------------------');

//Load different webpages and content type without framework
const http = require('http');
const path = require('path');
const fs = require('fs');

//creating new server object, stored in a varable
//Taking in a function(req, res)

/*

const server = http.createServer((req, res) => {
	//console.log(res.url);

	if (req.url === '/') {
		//Using the FS module to read the file
		//Pointing the read file to the index.html file
		fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
			//Checking for error
			if (err) throw err;
			//Adding a content type to page
			res.writeHead(200, { 'Content-Type': 'text/html' });
			//res.end('<h1>HOME Page<h1>');
			//Send content to webpage
			res.end(content);
		});
	}

	//Copied code from above ponting at About.html
	if (req.url === '/about') {
		//Using the FS module to read the file
		//Pointing the read file to the index.html file
		fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
			//Checking for error
			if (err) throw err;
			//Adding a content type to page
			res.writeHead(200, { 'Content-Type': 'text/html' });
			//res.end('<h1>HOME Page<h1>');
			//Send content to webpage
			res.end(content);
		});
	}

	//Rendering JSON data
	if (req.url === '/api/users') {
		//Hard coding users
		const users = [ { name: 'Bob Smith', age: 40 }, { name: 'Jane Smith', age: 37 } ];
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(users));
	}
});
    */

//Build dymaic file path
//! 1:13:21

//?Creating a server that gets a req and a res

const server = http.createServer((req, res) => {
	//Built a ternar operation to either display index.html or requested url.
	let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

	//Get file extention
	let exName = path.extname(filePath);

	//Initial content type
	let contentType = 'text/html';

	//Check ext and set content type
	//switch statment
	switch (exName) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
		case '.json':
			contentType = 'application/json';
			break;
		case '.png':
			contentType = 'image/png';
			break;
		case '.jpg':
			contentType = 'image/jpg';
			break;
	}

	//Read the file
	fs.readFile(filePath, (err, content) => {
		if (err) {
			if (err.code == 'ENOENT') {
				//Page not found
				fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
					res.writeHead(200, { 'Content-Type': 'text/html' });
					res.end(content, 'utf8');
				});
			} else {
				// Some server error
				res.writeHead(500);
				res.end(`Server error: ${err.code}`);
			}
		} else {
			//Success
			res.writeHead(200, { 'Content-Type': contentType });
			res.end(content, 'utf8');
		}
	});

	//console.log(filePath);
	//res.end();
});

//Storing the port as a variable, port is either the default or port 5000
const PORT = process.env.PORT || 5000;

//Server listening for the port then login which port is it running on.
server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
