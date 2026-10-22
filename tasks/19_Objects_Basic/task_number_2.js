// **2 задача:**

// Создайте объект `calculator` у которого будут 4 свойства-функции. 
// - 1 функция `addition` (сложение)
// - 2 функция `multiplication` (умножение)
// - 3 функция `division` (деление)
// - 4 функция `subtraction` (вычитание)

// Каждая функция принимает два аргумента `num1` и `num2`;
// У каждой функции есть возращаемый результат вычислений; 

// ```JavaScript
//     const calculator = {};
// ```


// Solution
const calculator = {
    addition: (num1, num2) => num1 + num2,
    multiplication: (num1, num2) => num1 * num2,
    division: (num1, num2) => num2 !== 0 ? (num1 / num2) : "Error Zero division is forbidden",
    subtraction: (num1, num2) => num1 - num2
}

console.log(calculator.addition(5, 5));  // 10
console.log(calculator.multiplication(5, 5));  // 25
console.log(calculator.division(5, 5));  // 1
console.log(calculator.subtraction(5, 5)); // 0