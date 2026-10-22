// **5 задача:**

// Напишите цикл `while`, который ищет элемент в массиве и выводит его индекс, если он найден. 
// Если элемент не найден, выведите сообщение "Элемент не найден".

// ```JavaScript
//     const colors = ['red', 'green', 'blue', 'yellow'];
//     const targetColor = 'blue';
// ```


// Solution 1
const colors = ['red', 'green', 'blue', 'yellow'];
const targetColor = 'blue';

let i = 0;
let found = false;

while (i < colors.length) {
  if (colors[i] === targetColor) {
    console.log(i);  // 2
    found = true;
    break;
  }
  i++;
}

if (!found) {
  console.log('Элемент не найден');
}


// Solution 2
// const colors = ['red', 'green', 'blue', 'yellow'];
// const targetColor = 'blue4';

// let i = 0;

// while (i < colors.length) {
//     if (colors[i] === targetColor) {
//         console.log(i);  // 2
//         break;
//     }
//     i++;

//     if (i === colors.length) {
//         console.log("Элемент не найден");
//     }
// }