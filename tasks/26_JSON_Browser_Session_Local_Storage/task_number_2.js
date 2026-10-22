// **2 задача:**

// Создайте 3 функции. 
// - Первая функция добавляет переданный элемент в `localStorage` по ключу и имеет 2 параметра - 1й параметр ключ, 2й - значение.
// - Вторая функция удаляет элемент из `localStorage` по переданному ключу.
// - Третья получает элемент из `localStorage` по переданному ключу.

// и потренеруйтесь с массивом `clients` использовать данные функции

// ```JavaScript
//   const setItemToLocalStorage = ...
//   const removeItemFromLocalStorage = ...
//   const getItemFromLocalStorage = ...

//   const clients = [
//     {id: 1, level: 3, name: "Lucy", status: "online"},
//     {id: 2, level: 1, name: "Rick", status: "offline"},
//     {id: 3, level: 3, name: "Jack", status: "online"},
//     {id: 4, level: 2, name: "Helen", status: "online"},
//     {id: 5, level: 1, name: "Alice", status: "offline"},
//     {id: 6, level: 1, name: "Derek", status: "offline"},
//     {id: 7, level: 3, name: "Megan", status: "online"},
//   ];
// ```


// Solution
const clients = [
    { id: 1, level: 3, name: "Lucy", status: "online" },
    { id: 2, level: 1, name: "Rick", status: "offline" },
    { id: 3, level: 3, name: "Jack", status: "online" },
    { id: 4, level: 2, name: "Helen", status: "online" },
    { id: 5, level: 1, name: "Alice", status: "offline" },
    { id: 6, level: 1, name: "Derek", status: "offline" },
    { id: 7, level: 3, name: "Megan", status: "online" },
];

// const setItemToLocalStorage = (key, value) => {
//     localStorage.setItem(key, JSON.stringify(value));
// }


// const removeItemFromLocalStorage = (key) => {
//     localStorage.clear(key);
// }


const getItemFromLocalStorage = (key) => {
    localStorage.getItem(key);
}

console.log(getItemFromLocalStorage("clients"));  // JSON format
// [{ "id": 1, "level": 3, "name": "Lucy", "status": "online" },
// { "id": 2, "level": 1, "name": "Rick", "status": "offline" },
// { "id": 3, "level": 3, "name": "Jack", "status": "online" },
// { "id": 4, "level": 2, "name": "Helen", "status": "online" },
// { "id": 5, "level": 1, "name": "Alice", "status": "offline" },
// { "id": 6, "level": 1, "name": "Derek", "status": "offline" },
// { "id": 7, "level": 3, "name": "Megan", "status": "online" }
// ]
console.log(JSON.parse(getItemFromLocalStorage("clients")));  // Object format 
// 0: {id: 1, level: 3, name: 'Lucy', status: 'online'}
// 1: {id: 2, level: 1, name: 'Rick', status: 'offline'}
// 2: {id: 3, level: 3, name: 'Jack', status: 'online'}
// 3: {id: 4, level: 2, name: 'Helen', status: 'online'}
// 4: {id: 5, level: 1, name: 'Alice', status: 'offline'}
// 5: {id: 6, level: 1, name: 'Derek', status: 'offline'}
// 6: {id: 7, level: 3, name: 'Megan', status: 'online'}
// length: 7[[Prototype]]: Array(0)