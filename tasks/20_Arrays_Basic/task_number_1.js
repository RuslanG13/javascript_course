// **1 задача:**

// У вас есть массив `fruits`, который содержит названия различных фруктов. Выведите в консоль первый и последний элемент массива.

// ```JavaScript
//    const fruits = ["Apple", "Banana", "Orange", "Grape"];
// ```


// Solution 1
const fruits = ["Apple", "Banana", "Orange", "Grape"];

console.log(fruits[0], fruits.at(-1)); // Apple Grape


// Solution 2
// const fruits = ["Apple", "Banana", "Orange", "Grape"];

// console.log(fruits[0], fruits[fruits.length - 1]); // Apple Grape