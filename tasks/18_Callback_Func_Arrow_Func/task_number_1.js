// **1 задача:**

// Напишите функцию `greet`, которая принимает строку `name` и функцию-коллбэк `callback`. 
// Функция должна возвращать результат вызова коллбэка с именем.

// ```JavaScript
//     console.log(greet("Ekaterina", sayHello)); // "Hello, Ekaterina!"
// ```


// Solution
function greet(name, callback) {
    return callback(name);
}

function sayHello(fisrtName) {
    return `Hello, ${fisrtName}!`;
}


console.log(greet("Ekaterina", sayHello)); // "Hello, Ekaterina!"