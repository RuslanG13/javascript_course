// **1 задача:**

// Создайте массив с числами. Напишите цикл `for`, который вычисляет сумму всех чисел в массиве и выводит результат в консоль.

// ```JavaScript
//    const numbers = [1, 2, 3, 4, 5];
// ```


// Solution
const numbers = [1, 2, 3, 4, 5];

let sumElements = 0;

for (let i = 0; i < numbers.length; i++) {
    sumElements += numbers[i];
}

console.log(sumElements);  // 15