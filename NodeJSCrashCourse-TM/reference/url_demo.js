const url = require('url');

//Instantiate a new URl object
const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//? Serilized URL
console.log(myUrl.href);
//http://mywebsite.com/hello.html?id=100&status=active
console.log(myUrl.toString);
//[Function: toString]

//? Host (root domain)
console.log(myUrl.host);
//mywebsite.com

//? Host name
// Host name doesn't inculde the port
console.log(myUrl.hostname);
//mywebsite.com

//? Pathname
console.log(myUrl.pathname);
///hello.html

//?Serialized query
console.log(myUrl.search);
/*?id=100&status=active*/

//? Params object
console.log(myUrl.searchParams);
//URLSearchParams { 'id' => '100', 'status' => 'active' }

//? Add params
//append('key', 'value')
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
//URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }

//? loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
// id: 100
// status: active
// abc: 123
