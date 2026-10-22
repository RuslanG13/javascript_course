// **4 задача:**

// Напишите функцию `addNewCar` которая проверяет есть ли в массиве `cars` переданный авто как аргумент и если нет,
// то добавляет новое авто в массив `cars`.

// ```JavaScript
//     const cars = ["audi", "ford", "mercedes", "mazda", "tesla"];
// ```


// Solution
const cars = ["audi", "ford", "mercedes", "mazda", "tesla"];

function addNewCar(array, newCar) {
    if (!array.includes(newCar)) {
        array.push(newCar);
    }

    return array;
}

console.log(addNewCar(cars, "audi"));  // [ 'audi', 'ford', 'mercedes', 'mazda', 'tesla' ]
console.log(addNewCar(cars, "bmw"));  // [ 'audi', 'ford', 'mercedes', 'mazda', 'tesla', 'bmw' ]