// **3 задача:**

// Напишите функцию которая преобразует массив `cars` в строку используя переданный сепаратор как аргумент функции.

// ```JavaScript
//    const cars = ["audi", "ford", "mercedes", "mazda", "tesla"];
//    const newCars = transformIntoString("--");

//    console.log(newCars); // audi--ford--mercedes--mazda--teslas
// ```


// Solution 1
const cars = ["audi", "ford", "mercedes", "mazda", "tesla"];

const transformIntoString = (array, separator = ',') => {
    return array.join(separator);
}

const newCars = transformIntoString(cars, "--");

console.log(newCars);  // audi--ford--mercedes--mazda--tesla