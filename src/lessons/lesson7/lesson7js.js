console.log('hello from js');

// function Test() {
// 	this.name = 'test';
// 	return this;
// }
//
// console.dir(Test)
// let t1 = new Test();
// let t2 = new  t1.__proto__.constructor();
// console.log(t2);
//
// prototype = {
//
// }

// function Animal(type, name) {
// 	this.type = type;
// 	this.name = name;
// 	this.speak = function () {
// 		console.log(`${this.name} is speaking`);
// 	}
// }
//
// Animal.prototype.eat = function () {
// 	console.log(`${this.name} is eating`);
// }
// Animal.prototype.sleep = function () {
// 	console.log(`${this.name} is sleeping`);
// }
//
// let monkey = new Animal('monkey', 'Lolo');
// let monkey2 = new Animal('monkey', 'Yoyo');
//
// monkey2.__proto__.getBanana = function() {
// 	return 'banana';
// }
//
// console.log(monkey2.getBanana());
// console.log(monkey.getBanana());
// console.dir(Animal);
// console.log(monkey);

// Animal.prototype = {
// 	...Animal.prototype,
// 	climb() {
// 		console.log(`${this.name} is climbing`);
// 	},
// 	constructor: Animal,
// }

// Animal.prototype = Object.assign(Animal.prototype, {climb : function () {
// 		console.log(`${this.name} is climbing`);
// 	}})
//
// let monkey3 = new Animal('monkey', 'Bobo');
// console.log(monkey3)
//
// monkey3.__proto__ = {
//
// }

// console.log(monkey.speak === monkey2.speak);
// console.log(monkey.eat === monkey2.eat);
//
//
//
// console.log(typeof Animal.prototype);
// console.log(monkey.__proto__ === Animal.prototype);
// console.log(typeof monkey.__proto__);

// class Animal {
//
// 	constructor(type, name) {
// 		this.type = type;
//      	this.name = name;
//      	// this.param = 10;
//      	// this.arrowMethod = () => {
// 		// 	console.log('arrow');
// 		// }
// 	}
//
// 	param = 10;
//
// 	arrowMethod = () => {
// 		console.log('arrow');
// 	}
//
// 	eat() {
// 		console.log(`${this.name} is eating`);
// 	}
//
// 	sleep() {
// 		console.log(`${this.name} is sleeping`);
// 	}
//
// 	static StaticMethod() {
// 		console.log('Hello from static method');
// 	}
//
// }
//
// let monkey = new Animal('monkey', 'Lolo');
//
// console.dir(Animal);
// console.log(monkey);
//
// console.log(monkey.__proto__ === Animal.prototype);
//
// Animal.prototype.getBananas = function () {
//
// };

// console.dir(Animal)

// Array.prototype.printRevers = function () {
// 	const copy = [...this];
// 	copy.reverse().forEach(item => console.log(item));
// }

//console.dir([1, 2, 3])

// let arr = [1, 2, 3];
// arr.printRevers();

