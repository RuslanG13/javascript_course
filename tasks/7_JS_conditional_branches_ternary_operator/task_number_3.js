// **3 задача:**

// Перепишите задачу 2 с использование тернарного оператора (?)


// Solution
const userInput = Number(prompt("Введи целое число", 0));

userInput > 0 ? 1 : userInput < 0 ? -1 : 0;
console.log(userInput);