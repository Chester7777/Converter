// Task 1
// Есть некоторая строка (const str = 'fgfggg';), что будет, если мы возьмем str[0]
// const str = 'fgfggg';
// console.log(str[0])

// Task 2
// Реализуйте необходимый код, что бы выражение (2).plus(3).minus(1) сработало и вернуло 4
// const summ = async (n) => {
// 	await n + ( plus = () => {})
// }
// class summ extends React.Component(n) {
//     plus(b) {
//         let a = n + b
//         return a
//     }
//     minus(v) {
//         return a - v
//     }
// }
// summ(2).plus(3).minus(1)

// Task 3
// Реализуйте функцию, которая принимает следующие аргументы (строки) '*', '1', 'b', '1c', и возвращает строку '1*b*1c'
// const concat = (z, x, c, v) => {
// 	return x + z + c + z + v
// }
// concat('*', '1', 'b', '1c')

// Task 4
// Напишите функцию которая найдет сумму всех вершин в структуре данны типа tree
// Рекурсивно
// В цикле

const tree = {
    valueNode: 3,
    next: [{
        valueNode: 1,
        next: null
    },
        {
            valueNode: 3,
            next: null
        },
        {
            valueNode: 2,
            next: null
        },
        {
            valueNode: 2,
            next: [
                {
                    valueNode: 1,
                    next: null
                },
                {
                    valueNode: 5,
                    next: null
                }
            ]
        }]
};

// Task 5
// исправить код, что бы работал правильно

for (let i = 0; i < 10; i++) {
    setTimeout(function (i) {
        console.log(i);
    }, 100);
}

// Task 6
// Реализуйте функцию Foo, что бы все корректно работало

function Book(name, author) {
    this.name = name;
    this.author = author;
    return this;
}

// function Foo(Book, 'Учебник javascript', 'Петр Сергеев')
//
// var book = Foo(Book, 'js', 'petr');
// console.log(book.name);

// Task 7
// Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5
// function f (z) {
// 	return function (x) {
// 		return z + x
// 	}
// }
// f(2, 3)
// f(2)(3)

// Task 8
// Реализовать функцию f: f(1)(2)(3)() -> 6, f(0)(3)(1)(5)() -> 8
// const f = (z) => (x) => (c) => (v = 0) => (b = 0) =>{
// 	return z + x + c + v + b
// }
// f(1)(2)(3)()
// f(0)(3)(1)(5)()

// Task 9
// Реализовать функции seven, plus, one, five, minus, two так, что бы следующие вызовы работали seven(plus(one())) -> 8. five(minus(two())) -> 3
// const  seven = () => {const plus = () => {const one = () => {}}}
// seven(plus(one()))
// function makeNum(num, func) {
// 	if (func === undefined) {
// 		return num;
// 	} else {
// 		return func(num);
// 	}
// }
//
// function zero(func) {
// 	return makeNum(0,func);
// }
// function one(func) {
// 	return makeNum(1,func);
// }
// function two(func) {
// 	return makeNum(2,func);
// }
// function three(func) {
// 	return makeNum(3,func);
// }
// function four(func) {
// 	return makeNum(4,func);
// }
// function five(func) {
// 	return makeNum(5,func);
// }
// function six(func) {
// 	return makeNum(6,func);
// }
// function seven(func) {
// 	return makeNum(7,func);
// }
// function eight(func) {
// 	return makeNum(8,func);
// }
// function nine(func) {
// 	return makeNum(9,func);
// }
//
// function plus(right) {
// 	return function(left) { return left + right; };
// }
// function minus(right) {
// 	return function(left) {
// 		return left - right;
// 	};
// }
// function times(right) {
// 	return function(left) { return left * right; };
// }
// function dividedBy(right) {
// 	return function(left) { return left / right; };
// }

// Task 10
// Реализовать функцию сортировки массива пузырьком
// let arr = [2, 8, 9, 5, 55, 80, 11, 102]
//
// function bubbleSortConcept1(arr) {
//     for (let j = arr.length - 1; j > 0; j--) {
//         for (let i = 0; i < j; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//             }
//         }
//     }
// }
// bubbleSortConcept1(arr);
// console.log(arr)

// Task 11
// Есть строка, состоящая из разных скобок - str = "())({}}{()][][", написать функцию проверки закрыты ли все.
// let s = "())({}}{()][][";
// function bracket_balance(s) {
//     let st = [];
//     for (let i = 0; i < s.length; i++) {
//         switch (s[i]) {
//             case '(':
//             case '[':
//             case '{':
//                 st.push(st[i])
//                 break
//             case ')':
//                 if (st.length > 0 && st.top() == '(')
//                 st.pop()
//             else
//                 return false
//                 break
//             case ']':
//                 if (st.length > 0 && st.top() == '[')
//                 st.pop()
//             else
//                 return false
//                 break
//             case '}':
//                 if (st.length > 0 && st.top() == '{')
//                 st.pop()
//             else
//                 return false
//                 break
//         }
//     }
//     if (st.length > 0)
//         return false
//     return true
// }

// Task 12
// Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив, состоящий только из уникальных значений первого массива.

// Task 13
// Написать функцию, принимающую аргументом массив чисел и возвращающую новый массив, состоящий из удвоенных значений первого.
// f([1, 2, null, 7, 8, null, 3]); // => [2, 4, 14, 16, 6]

// Task 14
// Необходимо написать функцию, возвращающую значения всех вершин дерева
// getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]

const tree2 = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {value: 4},
                {value: 5},
            ]
        },
        {
            value: 3,
            children: [
                {value: 6},
                {value: 7},
            ]
        }
    ]
};

// Task 15
// Необходимо написать функцию, возвращающую сумму всех вершин дерева из Task 14

// Task 16
// Надо реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время, через которое взорвется и
// некоторый «звук взрыва» (строку, которую вернет через заданное время).

// Task 17
// Необходимо реализовать функцию, принимающую в аргументах строку, состоящую из букв и вернуть новую строку,
// в которой повторяющиеся буквы заменены количеством повторений.
// rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'

// Task 18
// Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.

// Task 19
// Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются)
// от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число,
// либо их может не быть вовсе.
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined

// Task 20
// Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ). Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().
// class LinkedList {...}
// let list = new LinkedList(1, 2, 3)
// list.add(4)                           // undefined
// list.add(5)                           // undefined
// list.has(1)                           // true
// list.has(4)                           // true
// list.has(6)                           // false

// Task 21
// Что выведет консоль?

Promise
    .resolve()
    .then(() => console.log(1))
    .then(() => console.log(2))
    .then(() => console.log(3));

Promise
    .resolve()
    .then(() => console.log(4))
    .then(() => console.log(5))
    .then(() => console.log(6));