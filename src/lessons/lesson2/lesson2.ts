console.log("lesson 2");

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

// let a = 50;
// let b = 100;
//
// // let globalScope = {
// //     outerScope: null,
// //     a: 10,
// //     b: 100,
// //     f: 'Function',
// // }
// a = 500;
// function f( arg:number ) {
//     let param = 5;
//     let secondParam = 10;
//     console.log(param + secondParam);
//     const result = param + secondParam + arg;
//     arg += result; // arg = arg + result
//     console.log(a + b);
//     return () => {
//         a = 10;
//         console.log(arg + a);
//     }
// }
// f(100)();
// console.log(a);
// let a = 1000;
// console.log(a);

// Scope F
// let scopeF = {
//     outerScope: globalScope,
//     arg: 215,
//     param: 5,
//     secondParam: 10,
//     result: 115,
// };

// let arrowScope = {
//     outerScope: scopeF,
// }


// Recursion
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// function sumTo(n: number) {
//     let result = 0;
//     for (let i = n; i > 0; i--) {
//         result += i;
//     }
//     return result;
// }

// function sumTo(n: number): number {
//     if (n === 1) return n;
//     return n + sumTo( n - 1);
// }

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

// function factorial(n: number): number {
//     if (n === 1) return n;
//     return n * factorial( n - 1);
// }
//
// console.log(factorial(5));

// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
function sum(n: number) {
    return function (x: number) {
        return n + x
    }
}

console.log(sum(3)(6))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3
function makeCounter() {
    let count = 0
    return function () {
        count++
    }
}

const counter = makeCounter();
console.log(counter())
console.log(counter())
const counter2 = makeCounter();
console.log(counter2())
console.log(counter())


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function makeCounter1() {
    return function (count: number) {
        return (
            {increase: count++, decrease: count--, reset: count = 0, set: count}
        )
    }
}

const counter1 = makeCounter1();
console.log(counter1(5))

let Counter = (function () {
    let set = 0;

    function changeValPlass() {
        return set++;
    }

    function changeValMinus() {
        return set--;
    }

    return {
        increment: function () {
            changeValPlass();
        },
        decrement: function () {
            changeValMinus();
        },
        reset: function () {
            return set = 0;
        }
    }
})();
console.log(Counter.decrement())
console.log(Counter.increment())
console.log(Counter.reset())
console.log(Counter)


// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

function superSum(n: number) {
    if (n <= 0) return 0
    if (n === 1) return (n: number) => n
    let _arguments: number[] = [];

    function helper(...args: number[]) {
        _arguments = [..._arguments, ...args];
        if (_arguments.length >= n) {
            _arguments.length = n;
            return _arguments.reduce((acc, num) => acc + num);
        } else {
            return helper;
        }
    }
    return helper;
}

// console.log(superSum(3)(2)(5)(3))

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.length = 5;
// console.log(arr)
// arr.length = 10;
// arr[11] = 15;
// console.log(arr)
// for (let i =0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
// arr.forEach((item, i, acc) => console.log(item))

// function add(n:number){
//     let currentSum = n;
//     function f(b: number) {
//         currentSum += b;
//         return f;
//     }
//     f.toString = function() {
//         return currentSum;
//     };
//     return f;
// }
//
//
// console.log(add(3)(2)(5)(3));


// P.S. типизируйте только аргументы, а при вызове функции используйте //@ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

//Task 1
function sumTo(n: number): number {
    if (n === 1) return n
    return n + sumTo(n - 1)
}

function sumTo2(n: number): number {
    let sum = 0;
    for (let i = 1; n >= i; i++) {
        sum += i;
    }
    return sum
}

function sumTo3(n: number): number {
    return n * (n + 1) / 2
}

console.log(sumTo(5))
console.log(sumTo2(5))
console.log(sumTo3(5))

//Task 2 factorial
function factorial1(n: number): any {
    return function () {
        if (n > 1) {
            // n! = n * factorial(n - 1)
            return n * factorial(n - 1)
        }

    }
}

function factorial(n: number): any {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

//Task 3  числа Фибоначчи
function fib(n: number) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

//Task 4  Вывод односвязного списка
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list: any) {
    let tmp = list;

    while (tmp) {
        console.log(tmp.value)
        tmp = tmp.next;
    }
}

printList(list);

//Task 5 Вывод односвязного списка в обратном порядке
let list1 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printReverseList(list1: any) {

    if (list1.next) {
        printReverseList(list1.next);
    }
    console.log(list1.value)
}

printReverseList(list1);

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.
function flatten(array: Array<number>) {
    let flattend: Array<number> = [];
    (function flat(array) {
        array.forEach(function (el) {
            if (Array.isArray(el)) flat(el);
            else flattend.push(el);
        });
    })(array);
    return flattend;
}


// just a plug
export default () => {
};