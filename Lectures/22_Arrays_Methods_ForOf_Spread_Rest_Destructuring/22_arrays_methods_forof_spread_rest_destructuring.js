// Arrays (Mассивы) - for of, методы, деструктуризация, spread, rest

// const { useState } = require("react");

// const styles = `background: lightsalmon`;
const log = console.log;


const cars = ["audi", "ford", "mercedes", "mazda", "tesla"];

const users = [
    { id: 1, name: "Alex", age: 35, position: "manager" },
    { id: 2, name: "Kate", age: 22, position: "qa" },
    { id: 3, name: "Nikita", age: 29, position: "developer" },
];

// ------------------------------------------------

// For of (Цикл по массиву) 

// В этом цикле тяжело получить индекс. Для индексов лучше 
// использовать класический for
for (const car of cars) {
    // log(`Car -> ${car}`);
}
// Car -> audi
// Car -> ford
// Car -> mercedes
// Car -> mazda
// Car -> tesla


for (const user of users) {
    // log(`User -> ${user.name} ${user.age} ${user.position}`);
}
// User -> Alex 35 manager
// User -> Kate 22 qa
// User -> Nikita 29 developer

// ------------------Методы массивов------------------------------

const numbers1 = [4, 33, 2, 1];

// log(numbers1.sort());  //  [ 1, 2, 33, 4 ] Такая сортировка для цифр не работает, 
// как такая запись сортирует по алфавиту (по таблице с символами)

// log(numbers1.sort((a, b) => a - b));  // [ 1, 2, 4, 33 ] (МУТИРУЕТ исходный массив)

// log(numbers1.reverse());  // [ 33, 4, 2, 1 ] разворот в обратную сторону (МУТИРУЕТ исходный массив)


const numbers2 = [4, 33, 2, 1];
// log(numbers2.toSorted((a, b) => a - b));  // [ 1, 2, 4, 33 ] (НЕ МУТИРУЕТ исходный массив)

const newNumbers2 = numbers2.toSorted((a, b) => a - b);
// log(newNumbers2);  // [ 1, 2, 4, 33 ]

// log(numbers2.toSorted((a, b) => a - b).toReversed())  // toReversed - не мутирует исходный массив [ 33, 4, 2, 1 ]

// ----------------------------------------------------------

const newCars = ["Nissan", "Volvo"];

const allCars = cars.concat(newCars);
// log(allCars);  // ['audi',     'ford','mercedes', 'mazda','tesla',    'Nissan','Volvo']
// Метод concat исполузется для обьединения массив

// log(allCars.toString());  // audi,ford,mercedes,mazda,tesla,Nissan,Volvo
// log(allCars.join());  // audi,ford,mercedes,mazda,tesla,Nissan,Volvo
// log(allCars.join('--'));  // audi--ford--mercedes--mazda--tesla--Nissan--Volvo

// ----------------------------------------------------------

const nestedArrays = [1, 2, [3, 4], [5, 6], [7, [8, 9]], 10];

// log(nestedArrays);  // [ 1, 2, [ 3, 4 ], [ 5, 6 ], [ 7, [ 8, 9 ] ], 10 ]
// log(nestedArrays[4][1][1]);  // 9

// log(nestedArrays.flat());  // [ 1, 2, 3, 4, 5, 6, 7, [ 8, 9 ], 10 ]
// Разворачивает массив (делает массив плоским). Убирает скобки с других массивов)
// log(nestedArrays.flat(2));  // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// log(nestedArrays.flat(Infinity));  // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] (если неизвестна вложеность в массиве)

// ----------------------------------------------------------

// log(cars.includes('alfa-romeo'));  // false
// log(cars.includes('audi'));  // true

// log('Hello World'.includes('W'));  // true

// log(cars.at(1));  // ford
// log(cars.at(-1));  // tesla

// ------------------static methods Arrays----------------

const num = 123;

// log(Array.isArray(num));  // false (Проверяет является ли сущность массивом)
// log(Array.isArray(cars));  // true

const arrayOf = Array.of(1, 2, 'hello');  // Делает массив из переданых значений 
// log(arrayOf);  // [ 1, 2, 'hello' ]

const arrayFrom = Array.from("12345");  // Создает массив из переданого значения (значения должны быть итерируемые)
log(arrayFrom);  // [ '1', '2', '3', '4', '5' ]

// ------------------Деструктуризация---------------

// НЕ МУТИРУЕТ исходный массив, а только выполняет присваивание в переменные

const names = ["Alex", "Mike", "Angelina"];
const names2 = ["Kate", "Alice"];

// const nameAlex = names[0];
// const nameMike = names[1];
// log(nameAlex, nameMike);  // Alex Mike

const [nameAlex, nameMike] = names;
const [nameKate, nameOlga = 'Olga'] = names2;  // Если елементов в массиве не достаточно, 
// то можно присвоить значение по умолчанию 

// log(nameAlex, nameMike);  // Alex Mike
// log(nameKate, nameOlga);  // Kate Olga

// const [counter, setCounter] = useState(0);  // From React

// ---------------spread (оператор расширения. Раскладывает массив)-------------------------------

const allNames = [...names, "Nick", ...names2];
// log(allNames);  // [ 'Alex', 'Mike', 'Angelina', 'Nick', 'Kate', 'Alice' ]

const strHello = "Hello";
// log([...strHello]);  // [ 'H', 'e', 'l', 'l', 'o' ]

const allNumbers = [1, 55, 9, 33, 124, 765, 0, 3, 4];

// log(Math.max(...allNumbers));  // 765

// -------------rest (остаточные параметры. Складывает массив. Раскрытие массива на параметры)-----------------------------
// Остаточные параметры должны всегда находится вконце всех параметров

const sum = (...numbers) => {
    let sum = 0;

    for (const value of numbers) {
        sum += value;
    }

    return sum;
}

// log(sum(1, 2, 3, 4, 5));  // 15;

// ----------------------------------------------------

const [firstName, ...restNames] = names;

// log(firstName, restNames);  // Alex [ 'Mike', 'Angelina' ]

// const fn = (arg1, ...restNames, arg2) => {
//     // error
// }

const getTitleAndDescription = (title, ...description) => {
    // log(`Title => ${title}`);

    for (const value of description) {
        // log(`Value -> ${value}`);
    }
}

getTitleAndDescription("JavaScript", "Programming language",
    "It can be used for both frontend and backend development");
// Title -> JavaScript
// Value -> Programming language
// Value -> It can be used for both frontend and backend development