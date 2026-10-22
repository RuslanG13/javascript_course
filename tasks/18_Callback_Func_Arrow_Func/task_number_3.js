// **3 задача:**

// Напишите функцию `processString`, которая принимает строку `str` и функцию-коллбэк `callback`. 
// Функция должна возвращать результат вызова коллбэка с преобразованной строкой.

// Использовать `arrow functions`.

// ```JavaScript
//     console.log(processString("hello", makeUpperCase)); // "HELLO"
// ```


// Solution
const processString = (str, callback) => callback(str);

const makeUpperCase = string => string.toUpperCase();

console.log(processString("hello", makeUpperCase)); // "HELLO"