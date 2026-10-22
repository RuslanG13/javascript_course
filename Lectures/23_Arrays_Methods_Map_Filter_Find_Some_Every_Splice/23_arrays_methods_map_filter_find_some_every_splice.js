// https://learn.javascript.ru/array-methods

/*
Arrays - Methods (Методы)
forEach, index0f, lastIndexOf, find, findIndex,
some, every, slice, splice, toSpliced,
filter, map, reduce
*/

const log = console.log;

const skills = ["html", "css", "scss", "js", "git", "ts", "react", "css"];

// ----------------Перебор массива-----------------------------------


// -----------forEach (перебирает массив как for, for of) ---------

// skills.forEach(el => log(el));
// html
// css
// scss
// js
// git
// ts
// react
// css
// ------------

// skills.forEach((el, index) => log(el, index));
// html 0
// css 1
// scss 2
// js 3
// git 4
// ts 5
// react 6
// css 7
// ------------


// skills.forEach((el, index, thisArray) => log(el, index, thisArray));
// html 0 [
//   'html',  'css',
//   'scss',  'js',
//   'git',   'ts',
//   'react', 'css'
// ]
// css 1 [
//   'html',  'css',
//   'scss',  'js',
//   'git',   'ts',
//   'react', 'css'
// ]
// scss 2 [
//   'html',  'css',
//   'scss',  'js',
//   'git',   'ts',
//   'react', 'css'
// ]
// js 3 [
//   'html',  'css',
//   'scss',  'js',
//   'git',   'ts',
//   'react', 'css'
// ]
// git 4 [
//   'html',  'css',
//   'scss',  'js',
//   'git',   'ts',
//   'react', 'css'
// ]
// ts 5 [
//   'html',  'css',
//   'scss',  'js',
//   'git',   'ts',
//   'react', 'css'
// ]
// react 6 [
//   'html',  'css',
//   'scss',  'js',
//   'git',   'ts',
//   'react', 'css'
// ]
// css 7 [
//   'html',  'css',
//   'scss',  'js',
//   'git',   'ts',
//   'react', 'css'
// ]
// ------------

const logValues = (value) => log(value);

// function logValuesFn (value) {
//     log(value);
// } 

// skills.forEach(logValues);
// html
// css
// scss
// js
// git
// ts
// react
// css
// ------------

// ---------------------------Поиск в массиве--------------------------


// ---------------------- IndexOf, lastIndexOf (возвращает индекс запрашиваемого элемента)

// log(skills.indexOf("js"));  // 3
// log(skills.indexOf("js", 2));  // 3 (второй аргумент не обязателен. Показывает с какого индекса начинаем искать)
// log(skills.indexOf("js", 4));  // -1 (получили минус 1 как элемент не был найден)

// log(skills.indexOf("css"));  // 1 (если два одинаковых элемента, то метод вернет индекс ПЕРВОГО найденого значения)
// log(skills.lastIndexOf("css"));  // 7 (если два одинаковых элемента, то метод вернет индекс ПОСЛЕДНЕГО найденого значения)

// log(skills.indexOf("git"));  // 4
// log(skills.lastIndexOf("git"));  // 4
// Тут методы IndexOf и lastIndexOf вернули одно и тоже значение как элемент только один в массиве


// --------------some, every (возвращают true/false если по условию элемент/элементы найдены/не найдены)---------------------

// const isJs = skills.some(skill => skill === 'js');  // Если хотя бы 1 элемент совпадал с условием, тогда будет true иначе false;
// log(isJs);  // true

// const isJs2 = skills.every(skill => skill === 'js');  // Нужно чтобы все элементы совпадали с условием, тогда будет true иначе false;
// log(isJs2);  // false

const phones = [
    { id: 1, title: "samsung A50" },
    { id: 2, title: "iphone10" },
    { id: 3, title: "nokia 3310" },
    { id: 4, title: "xiaomi" },
];

// const everyHasTitles = phones.every(phone => phone.title);
// log(everyHasTitles);  // true

// const everyHasTitles = phones.every(phone => 'title' in phone);
// const someHasTitles = phones.some(phone => 'title' in phone);

// log(everyHasTitles);  // true
// log(someHasTitles);  // true

// --------------find (находит и возвращает первій найденній єлемент по условию),
// findindex ----------------

// const nokia = phones.find((phone) => phone.title === "nokia 3310");

// log(nokia);  // { id: 3, title: 'nokia 3310' }

// const nokiaIndex = phones.findIndex((phone) => phone.title === "nokia 3310");  // возвращает индекс найденного элемента

// log(nokiaIndex);  // 2


// --------------filter---------похож на find, только возвращает все элементы
// подходящие условию (фильтрует исходящий массив и возвращает новый)

// const filteredSkills = skills.filter((skill) => skill.includes("c"));  // filter ориентируется в условии на true или false

// log(filteredSkills);  // [ 'css', 'scss', 'react', 'css' ]

// const evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]const evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((num) => num % 2 === 0);

// log(evenNumbers);  // [ 2, 4, 6, 8, 10 ]

const clients = [
    { id: 1, level: 3, name: "Lucy", status: "online" },
    { id: 2, level: 1, name: "Rick", status: "offline" },
    { id: 3, level: 3, name: "Jack", status: "online" },
    { id: 4, level: 2, name: "Helen", status: "online" },
    { id: 5, level: 1, name: "Alice", status: "offline" },
    { id: 6, level: 1, name: "Derek", status: "offline" },
    { id: 7, level: 3, name: "Megan", status: "online" },
];

// const clientsWithHighLevel = clients.filter((client) => client.level === 3);

// log(clientsWithHighLevel);
// [
//   { id: 1, level: 3, name: 'Lucy', status: 'online' },
//   { id: 3, level: 3, name: 'Jack', status: 'online' },
//   { id: 7, level: 3, name: 'Megan', status: 'online' }
// ]


// ----------slice -- возвращает новый массив, в который копирует
// все элементы с индекса start до end

// const newPhones = phones.slice(0, 2);  // c включительно (индекс 0) и до НЕ включительно (индекс 2)

// log(newPhones);  // [ { id: 1, title: 'samsung A50' }, { id: 2, title: 'iphone10' } ]

// ----------------------------------------------------------------
// delete phones[nokiaIndex];  // удаляет элемент с массива по указанному индесу

// log(phones);
// [
//   { id: 1, title: 'samsung A50' },
//   { id: 2, title: 'iphone10' },
//   <1 empty item>,
//   { id: 4, title: 'xiaomi' }
// ]

// ----------------------------------------------------------------


// ------------splice - ИЗМЕНЯЕТ исходный массив, умеет добавлять,
// удалять и заменять элементы----------------

// log(phones.splice(nokiaIndex, 1));  // [ { id: 3, title: 'nokia 3310' } ]
// Удаляет и возвращает удаленный элемент.
// При этом не оставляет в массиве пустых элементов и устанавливает правильную длину

// log(phones);
// [
//   { id: 1, title: 'samsung A50' },
//   { id: 2, title: 'iphone10' },
//   { id: 4, title: 'xiaomi' }
// ]

// log(phones.splice(1, 0,  { id: 5, title: 'iphone 16' } ));  // Вставка нового элемента в массив. При вставке возвращает []
// log(phones);  // После добавления нового элемента в массив
// [
//   { id: 1, title: 'samsung A50' },
//   { id: 5, title: 'iphone 16' },
//   { id: 2, title: 'iphone10' },
//   { id: 3, title: 'nokia 3310' },
//   { id: 4, title: 'xiaomi' }
// ]


// -----toSpliced, тот же splice, но только делает копию массива,---------- 
//----а не изменяет исходный массив---------------

// const newPhones = phones.toSpliced();
// log(newPhones); 
// [
//   { id: 1, title: 'samsung A50' },
//   { id: 2, title: 'iphone10' },
//   { id: 3, title: 'nokia 3310' },
//   { id: 4, title: 'xiaomi' }
// ]

// const newPhones = phones.toSpliced(2, 1,  { id: 5, title: 'iphone 16' });
// log(newPhones, phones); 
// [
//   { id: 1, title: 'samsung A50' },
//   { id: 2, title: 'iphone10' },
//   { id: 5, title: 'iphone 16' },
//   { id: 4, title: 'xiaomi' }
// ]  (Array newPhones)
// [
//   { id: 1, title: 'samsung A50' },
//   { id: 2, title: 'iphone10' },
//   { id: 3, title: 'nokia 3310' },
//   { id: 4, title: 'xiaomi' }
// ] (Array phones)


// ----------------Преобразование элементов----------------------------------------

// const str = "hello";
// log(str.split("").reverse().join(""));  // olleh



// -----------------------Метод массиво map---------------------------------

// один из наиболее полезных и часто используемых.

// map вызывает функцию для каждого элемента массива и возвращает массив
// результатов выполнения этой функции

// const clientsNames = clients.map((client) => client.name);  // Создает новый массив за переданными параметрами. Длина массива остается такой же
// log(clientsNames);
// [
//   'Lucy',  'Rick',
//   'Jack',  'Helen',
//   'Alice', 'Derek',
//   'Megan'
// ]

// const clientsNamesAndStatuses = clients.map((client) => {
//     return {
//         name: client.name,
//         status: client.status
//     }
// });
// log(clientsNamesAndStatuses);
// // [
// //   { name: 'Lucy', status: 'online' },
// //   { name: 'Rick', status: 'offline' },
// //   { name: 'Jack', status: 'online' },
// //   { name: 'Helen', status: 'online' },
// //   { name: 'Alice', status: 'offline' },
// //   { name: 'Derek', status: 'offline' },
// //   { name: 'Megan', status: 'online' }
// // ]


const clientsNamesAndStatuses = clients.map((client) => {
    return {
        name: client.name,
        status: client.status
    }
}).map((client) => {
    if (client.status === "online") {
        client.status = "online GREEN";
    } else {
        client.status = "offline RED";
    }

    return client;
}).filter(client => client.status.startsWith("on"));


// log(clientsNamesAndStatuses);
// [
//   { name: 'Lucy', status: 'online GREEN' },
//   { name: 'Jack', status: 'online GREEN' },
//   { name: 'Helen', status: 'online GREEN' },
//   { name: 'Megan', status: 'online GREEN' }
// ]



// -----------------------reduce-----------------------------
// используется для вычисления единого значения на основе всего массива

// arr.reduce((accumulator, item, index, array) => {
// --//----
// }, [initial]); (initial - это исходное значение для аргумента accumulator)

// Аргументы:

// accumulator - результат предыдущего вызова этой функции, равен initial при первом вызове

// первом вызове (если передан initial),
// item - очередной элемент массива,
// index - его позиция,
// array - сам массив.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumAllNumbers = numbers.reduce((accumulator, item) => {
//     return accumulator += item;
// }, 0);

// log(sumAllNumbers);  // 55

// const sumAllNumbers = numbers.reduce((s, v) => s + v, 0);

// log(sumAllNumbers);  // 55


const books = [
    { id: 1, title: "арри Пoτтер", price: 59, category: "fantacy" },
    { id: 2, title: "чистый код", price: 109, category: "science" },
    { id: 3, title: "Темная башня", price: 149, category: "fantacy" },
    { id: 4, title: "грокаем алгоритмы", price: 173, category: "science" },
    { id: 5, title: "Mногопоточный JavaScript", price: 79, category: "science" },
];

const totalPrice = books.reduce((sum, book) => sum + book.price, 0);

// log(totalPrice);  // 569

// --------------------------------------

// {
//     fantacy: 2,
//     science: 3
// }

let categoriesCount = 0;

const categoryMap = books.reduce((res, book) => {
    if (book.category in res) {
        res[book.category]++;
    } else {
        res[book.category] = 1;
        categoriesCount++;
    }
    return res;
}, {});

log(categoryMap);  // { fantacy: 2, science: 3 }
log(categoriesCount);  // 2
log(Object.keys(categoryMap));  // [ 'fantacy', 'science' ] (Массив ключей)