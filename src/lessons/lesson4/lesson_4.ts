// import {log} from "util";
//
// console.log("lesson 4");
//
// // http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// // https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
//https://thebestcode.ru/


// async function f() {
// let a = 10;
// //throw 0;
// return 5;
// }
//
// console.log(f());

// async function some() {
//     // some code
//     try {
//         let result = await API.someRequest();
//         setState(result);
//     } caches(e) {
//         console.log(e);
//     }
// }

// async function test() {
//     let result = await new Promise(resolve => {
//         setTimeout(resolve, 2000, 'work');
//     });
//     console.log(result);
//     //return result
// }
//
// test();
 //console.log(test())

// async function test() {
//     let result = await new Promise(resolve => {
//         setTimeout(resolve, 2000, 'work');
//     });
//     console.log(result);
// }
// let a = 10;
// test();
// console.log(a);


// async function test() {
//     try {
//         let result = await new Promise((resolve, reject) => {
//             setTimeout(reject, 2000, 'Yo');
//         });
//         console.log(result);
//     } catch (e) {
//         try {
//             console.log('catch', e);
//         } catch (e) {
//
//         }
//     }
// }
// test();

// async function test() {
//     let result = await new Promise((resolve, reject) => {
//         setTimeout(reject, 2000, 'work');
//     });
// }
//
// test().catch(e => console.log(e));


//Task 1

// setTimeout(()=> console.log(1), 0);
// console.log(2);
// (() => console.log(3))();
// Promise.resolve(console.log(4));
//2,3,4,1


//Task 2

// new Promise((res, rej) => {
//     console.log(1);
// })
// new Promise((res, rej) => {
//     setTimeout(()=> console.log(2), 0);
// })
// Promise.resolve(setTimeout(()=> console.log(3), 0));
// console.log(4);
// Promise.reject(console.log(5));
//1,4,5,2,3


//Task 3

// (function(){
//     setTimeout(()=> console.log(1), 100);
// })();
// console.log(2);
// new Promise((res, rej) => {
//     setTimeout(()=> console.log(3), 50);
// })
// function f() {
//     console.log(4);
// }
// Promise.resolve(console.log(5));
//2,5,3,1

// Task 4

// function f(num:number) {
//     console.log(num);
// }
// Promise.resolve(1)
//     .then(f);
// (function(){
//     console.log(2);
// })();
// console.log(3);
// new Promise((res, rej) => {
//     console.log(4);
// });
// setTimeout(f, 0, 5);

// [1, 2, 3].forEach(item => console.log(item));
// [1, 2, 3].forEach(f);

// 2 3 4 1 5

// Task 5
//
// console.log(1);
// function f() {
//     console.log(2);
// }
// setTimeout(()=>{
//     console.log(3);
//     let p = new Promise((res, rej) => {
//         console.log(4);
//         res();
//     });
//     p.then(() => f())
// },0);
// let l = new Promise((res, rej) => {
//     console.log(5);
//     rej();
// });
// l.then(res => console.log(res)).catch(() => console.log(6));
// console.log(7);
//1,5,7,6,3,4,2

// Task 6

// setTimeout(() => console.log(1), 0);
// console.log(2);
// new Promise((resolve, reject) => {
//     setTimeout(() => reject(console.log(3)), 1000);
// }).catch(() => console.log(4));
// console.log(5);
//2,5,1,3,4

//Task 7

// before
// async function sleep(ms: number) {
//     setTimeout(() => {
//         console.log(ms);
//     }, ms*100);
// }


// after
// async function sleep(ms: number) {
//     return  new Promise(resolve => setTimeout(() => {
//         console.log(ms);
//         resolve()
//     }, ms*100))
// }
//
// async function show() {
//     await sleep(3)
//     await sleep(2)
//     await sleep(1)
// }
//
// show();


//Task 8
// let pr1 = new Promise((res) => {
//     res(10);
// });
// let pr2 = new Promise((res) => {
//     res(0)
// });
// pr1
//     .then((res: any) => {
//         console.log(res);
//         return res + 2;
//     })
//     .then((res: any) => {
//         console.log(res);
//         return res + 2;
//     })
//     .then(console.log);
// pr2
//     .then((res: any) => {
//         console.log(res);
//         return res + 1;
//     })
//     .then((res: any) => {
//         console.log(res);
//         return res + 1;
//     })
//     .then(console.log);
//pr1-10, pr2-0, pr1-12, pr2-1, pr1-14, pr2-2





// // Task 01
// // Создайте промис, который постоянно находиться в состоянии pending.
// // В конструкторе промиса выведите в консоль сообщение "Promise is creat
// export let promise1 = new Promise(function (resolve, reject) {
//     resolve("Promise is creat")
//     // resolve("done");
//     // reject(new Error("…")); // игнорируется
//     // setTimeout(() => resolve("…")); // игнорируется
// });
// export let promiseCallback = () => promise1.then(result => console.log(result))

// export let promise = async function PromiseCreat () {
//      console.log("Promise is creat")
//      .pending(console.log("Promise is created"))
// }
//
// let promise1 = new Promise(resolve => resolve + 1);
// //@ts-ignore
// let promise2 = new Promise(resolve => 2)
// let Promise: any = new Promise.all([promise1, promise2])
//
//
// // Task 02
// // Создайте промис, который после создания сразу же переходит в состояние resolve
// // и возвращает строку 'Promise Data'
// // Получите данные промиса и выведите их в консоль
// export const promise2 = new Promise((resolve) => {
//     resolve("Promise Data")
// })
// promise2.then(
//     result => console.log(result)
// )
//
// // Task 03
// // Создайте промис, который после создания сразу же переходит в состояние rejected
// // и возвращает строку 'Promise Error'
// // Получите данные промиса и выведите их в консоль
// export const promise3 = new Promise((resolve, reject) => {
//     reject(new Error("Promise Error"))
// })
// promise3.catch(
//     err => console.log(err)
// )
//
// // Task 04
// // Создайте промис, который переходит в состояние resolved через 3с.
// // (Используйте setTimeout)
// // и возвращает строку 'Promise Data'
// // Получите данные промиса и выведите их в консоль
// export const promise4 = new Promise((resolve => {
//     setTimeout(() => {
//         resolve("Promise Data")
//     }, 3000)
// }))
// promise4.then(
//     result => console.log(result)
// )
//
// // Task 05
// // Создайте литерал объекта handlePromise со следующими свойствами:
// // promise, resolve, reject, onSuccess, onError
// // Проинициализируйте первые три свойства null,
// // а последние два функциями, которые принимают один параметр и выводят
// // в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// // вторая - `Promise is rejected with error: ${paramName}`
// // Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// // Первый обработчик, создает промис, заполняет первые три свойства,
// // описаного выше объекта: свойство promise получает новый созданный промис,
// // свойства resolve и reject получают ссылки на соответствующие функции
// // resolve и reject. Следующие два обработчика запускают методы resolve и reject.
//
type testObjectType = {
    promise: null | Promise<any>;
    resolve: null | Function;
    reject: null | Function;
    onSuccess: (paramName: string) => void;
    onError: (paramName: string) => void;
}

const handlePromise:testObjectType = {
    promise: null,
    reject: null,
    resolve: null,
    onSuccess: (paramName: string) => console.log(`Promise is resolved with data: ${paramName}`),
    onError: (paramName: string) => console.log(`Promise is rejected with error: ${paramName}`),
}

export const createPromise = () => {
    const somePromise: Promise<string> = new Promise((res, rej) => {
        handlePromise.resolve = res;
        handlePromise.reject = rej;
    });
    handlePromise.promise = somePromise;
    handlePromise.promise.then(res => handlePromise.onSuccess(res)) //then(handlePromise.onSuccess)
        .catch(err => handlePromise.onError(err));
}

export const resolvePromise = () => {
    handlePromise.resolve && handlePromise.resolve('10');
}

export const rejectPromise = () => {
    handlePromise.reject && handlePromise.reject('0');
}

//@ts-ignore
window.handlePromise = handlePromise;

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

// function onSuccess(v: string): string {
//     return `${v} Eugene`;
// }
//
// function print(v: string): void {
//     console.log(v);
// }
//
// const myName: Promise<string> = new Promise((res, rej) => setTimeout(res, 2000, 'MyName'));
//
// myName.then(onSuccess).then(print);

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}
//
// let prom1: Promise<Object> = new Promise(res => setTimeout(() => {
//     res({name: 'Anna'})
// }, 2000));
//
// let prom2: Promise<Object> = new Promise(res => setTimeout(() => {
//     res({age: 16})
// }, 3000));
//
// let prom3: Promise<Object> = new Promise(res => setTimeout(() => {
//     res({city: ''})
// }, 4000));
//вариант 1
// Promise
//     .all( [ prom1, prom2, prom3 ] )
//     .then( result => Object.assign( {}, ...result ) )
//     .then( result => console.log( result ) );

//вариант 2
// let result: Promise<Array<Object>> = Promise.all([prom1, prom2, prom3])
// result.then(([a,b,c]: Array<Object>) => ({...a,...b,...c})).then(console.log);

//вариант 3
// Promise.all([prom1, prom2, prom3])
//     .then(value =>  {
//         let result = {};
//         //@ts-ignore
//         // value.map(v => {
//         //     //@ts-ignore
//         //     //for (let attrname in v) { result[attrname] = v[attrname]; }
//         //     //Object.assign(result, v);
//         // })
//         // return result
//         return Object.assign(result, ...value);
//     })
//     .then(v => {
//         for (let attrname in v) {
//             //@ts-ignore
//             console.log(v[attrname])
//         }
//     })
//



// just a plug
export default () => {
};