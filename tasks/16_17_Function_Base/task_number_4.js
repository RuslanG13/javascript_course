// **1 задача:**

// Напишите функцию `greet`, которая принимает два параметра: `name (имя)` и `greeting (приветствие)`. Если параметр `greeting` не передан, 
// функция должна использовать значение по умолчанию "Hello". Функция должна возвращать строку приветствия.

// ```JavaScript
//     console.log(greet("Alice")); // Вывод: "Hello, Alice!"
//     console.log(greet("Bob", "Good morning")); // Вывод: "Good morning, Bob!"
// ```


// Solution 
function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet("Ivan", "Good day")); // Good day, Ivan!
console.log(greet("Ivan")); // Hello, Ivan!