const fs = require('fs');
const path = require('path');

//?Create folder
//Async version that takes a callback funcation
//creating a test file in the current directory using the path.join
fs.mkdir(path.join(__dirname, 'test'), (err) => {
	if (err) throw err;
	console.log('Folder created.');
});

//sync version doesn't take a callback
fs.mkdirSync();

//? Create and write to file
//Hello world is the content for the file
//writeFile will over write whatever you have in the file
fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello World, ', (err) => {
	if (err) throw err;
	console.log('File written to.');

	// Appending to Hello World
	fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), 'I love Node.JS', (err) => {
		if (err) throw err;
		console.log('File appened.');
	});
});

//? Read info in file
fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
	if (err) throw err;
	console.log(data);
});

//? File rename
//Second paramater is the path and new name for file
fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'helloWorld.txt'), (err) => {
	if (err) throw err;
	console.log('File renamed.');
});
