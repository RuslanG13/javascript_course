// JSON, local & session storage


const log = console.log;


/*
У нас есть объект, и мы хотели бы преобразовать его в строку,
чтобы отправить по сети или просто вывести для логирования.

JSON (JavaScript Object Notation) - это общий формат данных для представления
значений и объектов, который имеет собственный независимый стандарт.

JЅОN легко использовать для ОБМЕНА ДАННЫМИ по сети, когда клиент
использует JavaScript, a сервер может быть написан на любом языке
программирования.
*/

// 2 основных метода для работы с JSON

// JSON.stringify для преобразования объектов в JSON.
// JSON.parse для преобразования JSON обратно в объект.
// */

const car = {
    year: new Date(2026, 6, 25),
    brand: "audi",
    color: "black",
    power: 3.2,
    isFast: true,
    getInfo: () => log("car info"),
    isExpensive: undefined
}

// log(car);
// {
//   year: 2026-07-24T21:00:00.000Z,
//   brand: 'audi',
//   color: 'black',
//   power: 3.2
// }

const carJSON = JSON.stringify(car);
// log(carJSON);  // {"year":"2026-07-24T21:00:00.000Z","brand":"audi","color":"black","power":3.2}

// const carObject = JSON.parse(carJSON);
// log(carObject);
// {
//   year: '2026-07-24T21:00:00.000Z',  // тут тип данных строка
//   brand: 'audi',
//   color: 'black',
//   power: 3.2
// }
// log(carObject.year.getFullYear());  // Это уже не обьект - поэтому ошибка. TypeError: carObject.year.getFullYear is not a function
// log(car.year.getFullYear());  // 2026

const carObject = JSON.parse(carJSON, (key, value) => {
    if (key === 'year') {
        return new Date(value);
    }

    return value;
});

// log(carObject);
// {
//   year: 2026-07-24T21:00:00.000Z,  // тут уже не строка
//   brand: 'audi',
//   color: 'black',
//   power: 3.2
// }
// log(carObject.year.getFullYear());  // 2026


// ----------Локальные хранилища в браузере--------

/*.
Объекты веб-хранилища localStorage и sessionStorage
позволяют хранить пары ключ/значение в браузере

Что в них важно - данные, которые в них записаны, сохраняются
после обновления страницы (в случае sessionStorage) и даже после перезапуска браузера (при
использовании localStorage)
*/


// localStorage.setItem("test", 123);  // Установка значение в localStorage
// console.log(localStorage.getItem("test"));  // Получение значения в консоль из localStorage

// localStorage.removeItem("test");  // Удаление значение из localStorage
// localStorage.clear();  // Чистка всего хранилища localStorage
// log(localStorage.length);  // 1 показывает количество пар в ключ и значение в localStorage
// log(localStorage.key(0));  // Получение значения по индексу из localStorage

const clients = [
    { id: 1, level: 3, name: "Lucy", status: "online" },
    { id: 2, level: 1, name: "Rick", status: "offline" },
    { id: 3, level: 3, name: "Jack", status: "online" },
    { id: 4, level: 2, name: "Helen", status: "online" },
    { id: 5, level: 1, name: "Alice", status: "offline" },
    { id: 6, level: 1, name: "Derek", status: "offline" },
    { id: 7, level: 3, name: "Megan", status: "online" },
];

// localStorage.setItem("clients", clients); 
localStorage.setItem("clients", JSON.stringify(clients));  // Засетапить обьект в localStorage в браузере

// const clientsFromStorage = localStorage.getItem("clients");  // Получить значение из localStorage по ключу
// log(clientsFromStorage);  // JSON format 

// const clientsFromStorage = JSON.parse(localStorage.getItem("clients"));  // Получить значение из localStorage по ключу

// const clientsFromStorage = JSON.parse(localStorage.getItem("clients1"));  // null
// const clientsFromStorage = JSON.parse(localStorage.getItem("clients1") ?? "{}");  // если слева null, то берется значение, что справа и будет пустой обьект {}

// log(clientsFromStorage);  // Object format 


// ------ Session Storage-------------------------------------


sessionStorage.setItem("test", 123);  // "test" : "123"
log(sessionStorage.getItem("test"));  // "123"
log(sessionStorage.length);  // 3
log(sessionStorage.key(1));  // test