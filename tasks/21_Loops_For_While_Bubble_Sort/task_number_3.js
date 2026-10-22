// **3 задача:**

// Создайте массив с числами. Напишите цикл `for`, который подсчитывает количество четных чисел в массиве и выводит результат 
// в консоль.

// ```JavaScript
//     const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// ```


// Solution
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let countEvenNum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        countEvenNum++;
    }
}

console.log(countEvenNum);  // 5