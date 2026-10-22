// **2 задача:**

// Напишите две функции для умножения чисел. Первая функция должна быть объявлена как `функциональное выражение`, 
// а вторая как `декларация функции`. Обе функции должны принимать два числа и возвращать их произведение.

// ```JavaScript
//     console.log(multiplyExpression(2, 3)); // Вывод: 6
//     console.log(multiplyDeclaration(4, 5)); // Вывод: 20
// ```


// Solution
const multiplyExpression = function (num1, num2) {
    return num1 * num2;
}

function multiplyDeclaration(num1, num2) {
    return num1 * num2;
}

console.log(multiplyExpression(5, 5)); // Вывод: 25
console.log(multiplyDeclaration(9, 9)); // Вывод: 81