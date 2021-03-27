// import {log} from "util";
//
// console.log("lesson 4");
//
// // http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// // https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
//
//
// // Task 01
// // Создайте промис, который постоянно находиться в состоянии pending.
// // В конструкторе промиса выведите в консоль сообщение "Promise is creat
export let promise1 = new Promise(function (resolve, reject) {
    resolve("Promise is creat")
    // resolve("done");
    // reject(new Error("…")); // игнорируется
    // setTimeout(() => resolve("…")); // игнорируется
});
export let promiseCallback = () => promise1.then(result => console.log(result))

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
export const promise2 = new Promise((resolve) => {
    resolve("Promise Data")
})
promise2.then(
    result => console.log(result)
)
//
// // Task 03
// // Создайте промис, который после создания сразу же переходит в состояние rejected
// // и возвращает строку 'Promise Error'
// // Получите данные промиса и выведите их в консоль
export const promise3 = new Promise((resolve, reject) => {
    reject(new Error("Promise Error"))
})
promise3.catch(
    err => console.log(err)
)
//
// // Task 04
// // Создайте промис, который переходит в состояние resolved через 3с.
// // (Используйте setTimeout)
// // и возвращает строку 'Promise Data'
// // Получите данные промиса и выведите их в консоль
export const promise4 = new Promise((resolve => {
    setTimeout(() => {
        resolve("Promise Data")
    }, 3000)
}))
promise4.then(
    result => console.log(result)
)
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
type HandlePromiseType = {
    promise: string | null
    resolve: string | null
    reject: string | null
    onSuccess: (paramName: any) => void
    onError: (paramName: any) => void
}
let handlePromise: HandlePromiseType = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: (paramName: any) => console.log(`Promise is resolved with data: ${paramName}`),
    onError: (paramName: any) => console.log(`Promise is rejected with error: ${paramName}`),
}
console.log(handlePromise)
export let createPromise = () => {
    let promise = new Promise((resolve, reject) => {
        resolve("Promise is resolved")
    })
        //@ts-ignore
        handlePromise.promise = promise,
        //@ts-ignore
        handlePromise.resolve = promise.then(result => console.log(result)),
        //@ts-ignore
        handlePromise.reject = promise.catch(err => console.log(new Error(err)))
}
export let resolvePromise = () => {
    console.log(handlePromise.resolve)
}
export let rejectPromise = () => {
    console.log(handlePromise.reject)
}
//
//
// // Task 06
// // Создайте промис, который через 1 с возвращает строку "My name is".
// // Создайте функцию onSuccess, которая получает один параметр,
// // прибавляет к нему Ваше имя и возвращает новую строку из функции
// // Создайте функцию print, которая выводит в консоль значение своего параметра
// // Добавьте два метода then и передайте созданные функции.
export const promise = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("My name is")}, 1000)
})
export const onSuccess = (parm: any) => {
    return parm + "Evgeny"
}
export const print = (parm2: any) => {
    console.log(parm2)
}

promise
    .then((result) => onSuccess(result))
    .then((result) => print(result))


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}
export let promise5 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve({ name: "Anna" })}, 2000)
})
promise5.then((result) =>result)

export const promise6 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve({age: 16})}, 3000)
})
promise6.then((result) => result)

export const promise7 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve({city: ''})}, 4000)
})
promise7.then((result) => result)

const rootPromise = {promise5, promise6, promise7}
console.log(rootPromise)
let obg = Object(rootPromise)
console.log(obg)
// let newObject = obg.name + obg.age + obg.city
// console.log(newObject)

// just a plug
export default () => {
};