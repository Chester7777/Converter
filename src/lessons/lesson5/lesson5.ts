console.log("Lesson 5");

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o

// https://www.youtube.com/watch?v=xY-mwUzDjsk

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290

// function fd() {
//     console.log('call fd ', this);
// }

// let af = () => {
//     console.log('call af ', this);
// }

//fd(); // window.fd()
//af();

// let obj = {name: 'Eugene'};
// obj.fd = fd;
// obj.af = af;
//obj.fd();
//obj.af();

// let obj = {
//     name: 'Eugene',
//     af: () => {
//         console.log('arrow function in obj ', this);
//     },
//     fd() {
//         console.log('call function declaration in obj ', this);
//     },
// };
//obj.af();
//obj.fd();

// let obj = {
//     name: 'Eugene',
//     fd() {
//         console.log('call function declaration in obj ', this);
//         const ex = () => {
//            console.log('arrow function in obj ', this);
//         }
//         return ex;
//     },
// };

// let obj2 = {name: 'Vlad'};
// obj2.af = obj.fd();
//obj2.af();
//let af = obj.fd();
//af();
// obj2.fd = obj.fd;
// obj.af = obj2.fd();
// obj.af();


// let obj = {
//     name : 'Eugene',
//     af : () => {
//         console.log('call arrow function in obj ', this);
//         function ex () {
//            console.log('function declaration in obj ', this);
//         }
//         return ex;
//         //ex();
//     },
// };

//let obj2 = {name: 'Vlad'};
// obj.af()();
// obj.af();
//obj2.fd = obj.af();
//obj2.fd();
//fd = obj.af();
//fd();


// let obj = {
//     name : 'Eugene',
//     fd() {
//         setTimeout(function() {console.log('fd in setTimeout ', this)}, 0);
//         setTimeout(() => {console.log('fd in setTimeout ', this)}, 0);
//     }
// };

// obj.fd();

// let obj = {
//     name : 'Eugene',
//     af : () => {
//         setTimeout(function() {console.log('fd in setTimeout ', this)}, 0);
//         setTimeout(() => {console.log('fd in setTimeout ', this)}, 0);
//     }
// };

// obj.af();


///// Bind

// let obj = {
//     name : 'Eugene',
//     fd() {
//         function test() {
//             console.log('fd in setTimeout ', this);
//         }
//         setTimeout(test.bind(this), 0);
//     }
// };

// obj.fd()

// let obj = {
//     name : 'Eugene',
//     fd() {
//         function test(a, b) {
//             console.log('fd in setTimeout ', this, a , b);
//         }
//         return test;
//     }
// };

// fd = obj.fd().bind(obj, 10);
// fd(50);

// Call, Apply

// window.name = 'Test';

// let obj = {
//     name : 'Eugene',
// };


// function fd(a, b) {
//         console.log('fd in setTimeout ', this.name, a , b);
// }

// //fd()
// fd.call(obj, 10, 50);
// fd.apply(obj, [10, 50]);

// type TestType = {
//     name: string;
//     age: number;
//     greeting : Function;
// }
//
// function MyFirstConstructorFunc (this: TestType, name: string, age: number) {
//     this.name = name;
//     this.age = age;
//     this.greeting = function greeting(this: someObjType): string {
//         return `My name is ${this.name}. I am ${this.age}`
//     }
// }
//
// let t1 = new (MyFirstConstructorFunc as any)('Evgen', 32);


// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

type someObjType = {
    name: string;
    age: number;
    greeting?: Function,
}

let someObj: someObjType = {
    name: "Eugene",
    age: 32
}

function greeting(this: someObjType) {
    return `My name is ${this.name}. I am ${this.age}`
}
someObj.greeting = greeting;
console.log(someObj.greeting());


// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект

// type ConterType = {
//     count: number,
//     getCurrentCount: () => number;
//     increment: () => void;
//     decrement: () => void;
//     setCurrentCount: (n:number) => void;
//     restCurrentCount: () => void;
// }

// let counterObj: ConterType = {
//     count: 0,
//     getCurrentCount() {
//         return this.count;
//     },
//     increment() {
//         this.count += 1;
//     },
//     decrement() {
//         this.count -= 1;
//     },
//     setCurrentCount(n) {
//         this.count = n;
//     },
//     restCurrentCount() {
//         this.count = 0;
//     }
// };

// counterObj.increment();
// counterObj.increment();
// counterObj.increment();
// console.log(counterObj.getCurrentCount());
// counterObj.decrement();
// console.log(counterObj.getCurrentCount());
// counterObj.setCurrentCount(1000);
// console.log(counterObj.getCurrentCount());


// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12

type ConterType = {
    count: number,
    getCurrentCount: () => number;
    increment: () => ConterType;
    decrement: () => ConterType;
    setCurrentCount: (n: number) => ConterType;
    restCurrentCount: () => ConterType;
}

let counterObj: ConterType = {
    count: 0,
    getCurrentCount() {
        return this.count;
    },
    increment() {
        this.count += 1;
        return this;
    },
    decrement() {
        this.count -= 1;
        return this;
    },
    setCurrentCount(n) {
        this.count = n;
        return this;
    },
    restCurrentCount() {
        this.count = 0;
        return this;
    }
};

//console.log(counterObj.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount())


// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01
// type TaskType = {
//     name: string
//     age: number
//     greeting: Function
// }
// // let Task  = new (MyFirstConstructorFunc as any)("Anna", 30)
//
//
// function MyFirstConstructorFunc(name: string, age: number) {
//     //@ts-ignore
//      this.name = name;
//     //@ts-ignore
//      this.age = age;
//     //@ts-ignore
//     this.greeting = function greeting(this: someObjType) {
//         return `My name is ${this.name}. I am ${this.age}`
//     }
// }
// //@ts-ignore
// let newObj = new MyFirstConstructorFunc("Anna", 30)
//
// console.log(newObj)


// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One
type OneType = {
    name: string
}
let One: OneType = {name: "One"};
let Two = {
    name: "Two", sayHello: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
};
// Two.sayHello.bind(One);


// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore

type HelperObjType = {
    name: string
    age: number
    changeName: Function
    setAge: Function
    greeting: Function
}
const helperObj: HelperObjType = {
    //@ts-ignore
    name: "",
    age: 0,
    changeName(name: string) {
        this.name = name
    },
    setAge(age: number) {
        this.age = age
    },
    // greeting: Two.sayHello;
    greeting: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
}
console.log(helperObj)
console.log(helperObj.greeting.bind(helperObj))
console.log(helperObj.changeName("Oly"))

// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя
function sumTwoNumbers(a: number, b: number): number {
    return a + b
};
function bindNum (fn: Function, n: number){
    return fn.bind(null, n)
}
let bindTen = bindNum(sumTwoNumbers, 10)
console.log(bindTen(5))

// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One
function bindFunction (obj: OneType, fn: HelperObjType) {
    return function (str: string) {
        helperObj.changeName.bind(obj)(str)
    }
}
let changeName = bindFunction(One, helperObj)
changeName("Oly");
console.log(One)

// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
helperObj.setAge.bind(Two)(30)

// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two
//@ts-ignore
One.hi = helperObj.greeting.bind(Two)
//@ts-ignore
// console.log((One.hi()))
// Реализовать задачи 2-4 из Bind с помощью Call


//@ts-ignore
function foo(callback) {
    setTimeout(function () {
        callback("A");
    }, Math.random() * 100);
}

//@ts-ignore
function bar(callback) {
    setTimeout(function () {
        callback("B");
    }, Math.random() * 100);
}

//@ts-ignore
function baz(callback) {
    setTimeout(function () {
        callback("C");
    }, Math.random() * 100);
}

function callback(fn: any) {
    return (arg: any) => fn(arg);
}

Promise.all([foo, bar, baz].map(item => new Promise(res => {
    item(callback(res))
}))).then(res => {
    res.forEach(item => console.log(item));
});


// Promise.all([foo, bar, baz].map(item => new Promise((res, rej) => {
//     item(res);
// }))).then(result => result.forEach(el => console.log(el)))
//
// Promise.all([foo, bar, baz].map(item => new Promise(res => item(res) ))).then(result => result.forEach(el => console.log(el)));


// just a plug
export default () => {
};