// Объекты, методы, деструктуризация, for in, строгий режим (strict mode)

"use strict";

const log = console.log;

// -------------------------------------------------

// for in (цикл по обьекту)

const user = {
    id: 4,
    name: "Alena",
    age: 25,
    position: "Project Manager",
    address: {
        country: "Australia",
        city: "Sidney"
    }
}

// for (const key in user) {
//     log(`New user --> ${key}: ${user[key]}`);
// }
// New user --> id: 4
// New user --> name: Alena
// New user --> age: 25
// New user --> position: Project Manager

// log(Object.keys(user));  // делает массив с обьекта с ключей обьекта 
// [ 'id', 'name', 'age', 'position' ]

// for(const key of Object.keys(user)) {
//     log(`New user --> ${key}: ${user[key]}`);
// }
// New user --> id: 4
// New user --> name: Alena
// New user --> age: 25
// New user --> position: Project Manager

//------------------------ Деструктуризация, деструктурирущее присваивание ------------

// const [] = []  // деструктурирущее присваивание для массива

const { name, age, ...restProps } = user;  // деструктурирущее присваивание обьекта
// log(name, age, restProps);  // Alena 25 { id: 4, position: 'Project Manager' }

const newUser = {
    ...user  // деструктурирущее присваивание обьекта. Поверхностное копирование, копирует только примитивы, а не обьекты
}
// log(newUser);
// { id: 4, name: 'Alena', age: 25, position: 'Project Manager' }

// log(newUser === user);  // false

// newUser.name = "Alex";

// log(newUser, user); 
// { id: 4, name: 'Alex', age: 25, position: 'Project Manager' }
// { id: 4, name: 'Alena', age: 25, position: 'Project Manager' }

// log(newUser, user);
// {
//   id: 4,
//   name: 'Alex',
//   age: 25,
//   position: 'Project Manager',
//   address: { country: 'Australia', city: 'Sidney' }
// }
///////////////////////
// {
//   id: 4,
//   name: 'Alena',
//   age: 25,
//   position: 'Project Manager',
//   address: { country: 'Australia', city: 'Sidney' }
// }

newUser.address.city = "Berlin";
// log(newUser, user);
// {
//   id: 4,
//   name: 'Alena',
//   age: 25,
//   position: 'Project Manager',
//   address: { country: 'Australia', city: 'Berlin' }
// }
///////////////////////
// {
//   id: 4,
//   name: 'Alena',
//   age: 25,
//   position: 'Project Manager',
//   address: { country: 'Australia', city: 'Berlin' }
// }

// delete newUser.address.city;
// delete newUser.address.country;

// log(newUser, user);
// {
//   id: 4,
//   name: 'Alena',
//   age: 25,
//   position: 'Project Manager',
//   address: {}
// } 
///////////////////////
// {
//   id: 4,
//   name: 'Alena',
//   age: 25,
//   position: 'Project Manager',
//   address: {}
// }

// Создание обьектов из свойств других обьектов. Вариант 1
const obj1 = { a: 10, b: 20 };
const obj2 = { c: 30, d: 40 };

const obj3 = {
    ...obj1,
    ...obj2,
    a: 100,  // если какое то свойство уже присутствует в обьекте, 
    // то мы его просто перезапишем новым значением. (Нижнее значение перетирает верхнее)
    e: 50,
}

// log(obj3);  // { a: 100, b: 20, c: 30, d: 40, e: 50 }


// Создание обьектов из свойств других обьектов. Вариант 2
const obj4 = Object.assign({}, obj1, obj2);

// log(obj4);
// { a: 10, b: 20, c: 30, d: 40 }


//------------------------ Методы Обьектов--------------------------

let x = Object.keys(user);  // Получаем массив ключей из обьекта
// [ 'id', 'name', 'age', 'position', 'address' ]
// -----------------------------------------

x = Object.values(user); // Получаем массив значений из обьекта
// [
//   4,
//   'Alena',
//   25,
//   'Project Manager',
//   { country: 'Australia', city: 'Berlin' }
// ]
// -----------------------------------------

x = Object.values(user.address); // Получаем массив значений вложенного обьекта из главного обьекта
// [ 'Australia', 'Berlin' ]
// -----------------------------------------

x = Object.entries(user);  // Получаем массив ключей и значений из обьекта. Элементы представлены ввиде вложеных массивов
// [
//   [ 'id', 4 ],
//   [ 'name', 'Alena' ],
//   [ 'age', 25 ],
//   [ 'position', 'Project Manager' ],
//   [ 'address', { country: 'Australia', city: 'Berlin' } ]
// ]
// --------------------------------------------

x = Object.hasOwn(user, "address");  // true Возвращает true или false есть ли свойство (ключ) в обьекте 
x = Object.hasOwn(user, "skills");  // false

x = "address" in user;  // true

// log(x);

Object.freeze(user);  // Заморозка обьекта. Делает обьект только read only. В strict режиме нельзя изменять или удалять свойство в обьекте

// user.name = "Olga";

// log(user);
// user.name = "Olga";
//           ^

// TypeError: Cannot assign to read only property 'name' of object '#<Object>'

delete user.name;
// log(user);
// delete user.name;
// ^

// TypeError: Cannot delete property 'name' of #<Object>

function example(a, a) {
    return a;
}
// Пример для 'use strict'
// function example (a , a) {
//                       ^

// SyntaxError: Duplicate parameter name not allowed in this context