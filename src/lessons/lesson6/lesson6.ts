console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// interface IPerson {
//     name: string,
//     age: number,
//     say: Function,
// }
//
// interface IPerson2 {
//     name: string,
//     hi: Function,
// }
//
// // class Test2 {
// //     #car2 = 'BMW';
// // }
//
//
// class Test implements IPerson, IPerson2 {
//     name: string;
//     age: number;
//     static yo = 'yo';
//     private car = 'Audi';
//
//
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//         // this.hi = function () {
//         //     console.log('hi');
//         // }
//     }
//
//     say() {
//         console.log('Person is saying');
//         console.log(this.car);
//     }
//
//     hi() {
//         console.log('hi');
//     }
//     bye() {
//         console.log('Bye')
//     }
//
//     static YOYOYO () {
//     }
//
// }

// console.dir(Test);
// console.dir(Promise);

//
// let test = new Test('Evgen',  32)
// console.log(test)
//
// test.say();

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat() {
        console.log(' Animal is eating');
    }
}
class Monkey extends Animal {
    age: number

    constructor(name: string, age: number) {
        super(name);
        this.age = age;
    }

    sleep() {
        console.log('is sleeping');
    }

    eat() {
        console.log(this.name + ' is eating');
        super.eat();
    }
}


let m = new Monkey('Yo', 10);
console.log(m);
m.eat();

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

class Test {
    param1: string;
    param2: string;

    constructor(param1: string = 'Hello', param2: string = 'Bye') {
        this.param1 = param1;
        this.param2 = param2;
    }
}

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

interface ICustomer {
    name: string;
    surname: string;
    address: string;
    account: number;
}

class Customer implements ICustomer{
    private _name: string;
    private _surname: string;
    private _address: string;
    private _account: number;

    constructor(name: string, surname: string, address: string, account: number) {
        this._name = name;
        this._surname = surname;
        this._address = address;
        this._account = account;
    }


    get name() {
        return this._name;
    }

    set name(n) {
        this._name = n;
    }

    get surname() {
        return this._surname;
    }

    set surname(s) {
        this._surname = s;
    }

    get address() {
        return this._address;
    }

    set address(a) {
        this._address = a;
    }

    get account() {
        return this._account;
    }

    set account(acc) {
        this._account = acc;
    }

    print() {
        console.log(`${this.name} ${this.surname}, Address - ${this.address}, Account - ${this.account}`);
    }

    static sort(c1: ICustomer, c2: ICustomer) {
        if (c1.name > c2.name) {
            return 1;
        } else if (c1.name < c2.name) {
            return -1;
        } else {
            return 0;
        }
    }
}

let custs = [];

custs.push(new Customer('Ivan', 'Ivanovich', 'Minsk, Nemiga str, 10- 58', 613654630));
custs.push(new Customer('Peter', 'Ivanovich', 'Minsk, Nemiga str, 10- 58', 613654630));
custs.push(new Customer('Andry', 'Ivanovich', 'Minsk, Nemiga str, 10- 58', 613654630));

console.log(custs);
custs[0].print();
custs[0].name
custs.sort(Customer.sort);
console.log(custs);

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};