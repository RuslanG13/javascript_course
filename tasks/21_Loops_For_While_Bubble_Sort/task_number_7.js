// **7 задача:**

// Дан массив `array`. Выполните пузырьковую сортировку массива по возрастанию и по убыванию убыванию с помощью циклов `for`.

// ```JavaScript
//     const array = [4, 33, 2, 1];
// ```


// Solution 1 (по возрастанию)
const array = [4, 33, 2, 1];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

console.log(array);  // [ 1, 2, 4, 33 ]


// Solution 2 (по убыванию)
// const array = [4, 33, 2, 1];

// for (let i = 0; i < array.length - 1; i++) {
//     for (let j = 1; j < array.length - i; j++) {
//         if (array[j - 1] < array[j]) {
//             let temp = array[j];
//             array[j] = array[j - 1];
//             array[j - 1] = temp;
//         }
//     }
// }

// console.log(array);  // [ 33, 4, 2, 1 ]