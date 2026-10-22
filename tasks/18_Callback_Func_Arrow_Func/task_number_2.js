// **2 задача:**

// Напишите функцию `double`, которая принимает число `num` и функцию-коллбэк `callback`. 
// Функция должна возвращать результат вызова коллбэка с удвоенным значением числа.

// Использовать `arrow functions`.

// ```JavaScript
//     console.log(double(5, displayResult)); // "Result is 10"
// ```


// Solution
const double = (num, callback) => callback(num * 2); // аргумент num * 2 - это параметр result c функции displayResult

const displayResult = (result) => `Result is ${result}`; // параметр result - это аргумент с функции double

console.log(double(5, displayResult)); // "Result is 10"