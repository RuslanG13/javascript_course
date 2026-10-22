// **6 задача:**

// Напишите цикл `for`, который находит максимальное значение в массиве чисел и выводит его в консоль.

// ```JavaScript
//     const numbers = [3, 5, 7, 2, 8, 10, 6];
// ```


// Solution
const numbers = [3, 5, 7, 2, 8, 10, 6];

let maxNum = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
        maxNum = numbers[i];
    }
}

console.log(maxNum);  // 10