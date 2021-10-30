//console.log('Hello from path_demo');

const path = require('path');
//path is core module with node, no need to install

//? Base File name
console.log(__filename);
//C:\Users\Tajhr\Coding\NodeJSCrashCourse-TM\reference\path_demo.js

console.log(path.basename(__filename));
//path_demo.js

//? Directory name
console.log(__dirname);
//C:\Users\Tajhr\Coding\NodeJSCrashCourse-TM\reference

console.log(path.dirname(__filename));
//C:\Users\Tajhr\Coding\NodeJSCrashCourse-TM\reference

//? File Extension
console.log(path.extname(__filename));
//.js

//Create path object
console.log(path.parse(__filename));
/*
{
  root: 'C:\\',
  dir: 'C:\\Users\\Tajhr\\Coding\\NodeJSCrashCourse-TM\\reference',
  base: 'path_demo.js',
  ext: '.js',
  name: 'path_demo'
}
*/
console.log(path.parse(__filename).base);
//path_demo.js

//?Concatenate paths
//fake file path - ../test/hello.html
//takes in the current file then takes in a folder called test, then a file called hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));
//C:\Users\Tajhr\Coding\NodeJSCrashCourse-TM\reference\test\hello.html
