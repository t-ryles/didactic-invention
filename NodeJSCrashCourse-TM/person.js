//Created an object (person), with 2 values.
const person = {
	name: 'John Doe',
	age: 30
};

//console.log(__filename, __dirname);

//ES6 JS class
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	//Creating a method
	greeting() {
		console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
	}
}

//Exporting the person object
//module.exports = person;

//Exporting the person Class
module.exports = Person;
