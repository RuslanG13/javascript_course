// Циклы, for, while

const styles = `background: lightsalmon`;
log = console.log;

// -------------- Цикл for --------------------

// const cars = ["audi", "ford", "bmw", "mazda", "tesla"];

// Вывод элементов массива без циклов
// log("1: ", cars[0]);  // 1:  audi
// log("2: ", cars[1]);  // 2:  ford
// log("3: ", cars [2]);  // 3:  bmw
// log("4: ", cars [3]);  // 4:  mazda
// log("5: ", cars [4]);  // 5:  tesla


//---------------------------------------------------------------
/*
    for (стартовое выражение (начало цыкла); условное выражение (условие);
    инкримент или декремент (на каждом шаге (итерации) цыкла) ) {
    // логика, что выполняется на каждом шаге (итерации)
    }

*/
//---------------------------------------------------------------

// Первый вариант цикла for (Полный)
// for (let i = 0; i < 5; i++) {
//     log("-->", i); // переменная i в области видимости цыкла. Локальная
// }

// let i = 0; // переменная i не в области видимости цыкла. Глобальная. Они не конфликтуют между собой


// Второй вариант цикла for (Без начального значения в самом условии цыкла)
// let i = 0;
// for(; i < 5; i++) {
//     log("-->", i);
// }


// Третий вариант цикла for (Без начального значения и шага в самом условии цыкла)
// let i = 0;
// for(; i < 5;) {
//     log("-->", i++);
// }


// Вечный цикл
// for (; ;) {
//     log("Вечный цикл")
// }


// -------------------------------------------

const cars = ["audi", "ford", "bmw", "mazda", "tesla"];

// Вывод элементов массива з цыклом
// for (let i = 0; i < cars.length; i++) {
//     log(`${i + 1} ${cars[i]}`);
// }
// 1 audi
// 2 ford
// 3 bmw
// 4 mazda
// 5 tesla

// for (let i = cars.length - 1; i >= 0; i--) {
//     log(`${i + 1} ${cars[i]}`);
// }
// 5 tesla
// 4 mazda
// 3 bmw
// 2 ford
// 1 audi

// -------------------------------------------

// for (let i = 0; i < cars.length; i++) {
//     if (cars[i] === "mazda") continue;
//     log(`${i + 1} ${cars[i]}`);
// }
// 1 audi
// 2 ford
// 3 bmw
// 5 tesla

// for (let i = 0; i < cars.length; i++) {
//     if (cars[i] === "mazda") break;
//     log(`${i + 1} ${cars[i]}`);
// }
// 1 audi
// 2 ford
// 3 bmw

// -------------------------------------------

// const users = [
//     { id: 1, name: "Alex", age: 35, position: "Manager" },
//     { id: 1, name: "Kate", age: 24, position: "QA" },
//     { id: 1, name: "Roman", age: 40, position: "Developer" },
// ];

// for (let i = 0; i < users.length; i++) {
//     console.group(`Employee ${i + 1}`);
//     log(`Name: ${users[i].name}`);
//     log(`Age: ${users[i].age}`);
//     log(`Position: ${users[i].position}`);
//     console.groupEnd();
// }

// -------------------------------------------

// 1) Вычислить сумму всех чисел

// const numbers = [1, 2, 3, 4, 5];

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }

// log(sum);  // 15

// 2) Посчитать количество четных чисел в массиве

// const numbers_digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let eventCount = 0;
// for (let i = 0; i < numbers_digits.length; i++) {
//     if (numbers_digits[i] % 2 === 0) {
//         eventCount++;
//     }
// }

// log(eventCount);  // 5

// -------------------------------------------

// for (let i = 0; i < 3; i++) {
//     log(`${i + 1} - $Loop[1]`);
//     for (let j = 0; j < 3; j++) {
//         log(`${j + 1} - Loop[2]`);
//     }
// }
// 1 - $Loop[1]
// 1 - Loop[2]
// 2 - Loop[2]
// 3 - Loop[2]
// 2 - $Loop[1]
// 1 - Loop[2]
// 2 - Loop[2]
// 3 - Loop[2]
// 3 - $Loop[1]
// 1 - Loop[2]
// 2 - Loop[2]
// 3 - Loop[2]

// ------------------While-------------------------

// let i = 0;
// while (i < cars.length) {
//     log(`while - ${i + 1}`);
//     i++;
// }
// while - 1
// while - 2
// while - 3
// while - 4
// while - 5

// Вечный цикл
// while (true) {
//     break; - без break будет безконечный цикл
// }


// -------------------------------------------
/* 
while(true) используется - в алгоритмах где с неопределенным кол-вом итераций
3
Frontender[1.0] JavaScript - Циклы. FOR, WHILE, база, бесконечный цикл, пузырьковая сортировка (bubble sort)
- в серверных приложениях, где например обрабатываются события или сообщения, когда 
неизвестно когда поступит следующее событие и нужно постоянно проверять новые данных- постоянный опрос какого-либо состояния, например сетевого соединения или устройства
до тех пор пока не будет выполнено определенное условие для выхода из цикла- есть и другие случаи, всегда зависит от задачи
*/
// -------------------------------------------

// let i = 0;

// while (true) {
//     log("while(true)");
//     if (i > 10) {
//         log(`i = ${i}`);
//         break;
//     }
//     i++;
// }
// while(true)
// while(true)
// while(true)
// while(true)
// while(true)
// while(true)
// while(true)
// while(true)
// while(true)
// while(true)
// i = 10

// -------------while(true) mock function example------------------------------

// let count = 0;
/* 
тут - замыкания (переменная count)
- асинхронные функции (pollNetwork и checkConnection)
- Promise и setTimeout для фейковой задержки
*/


// const pollNetwork = async (delay = 1000) => {
//     await new Promise(resolve => {
//         setTimeout(resolve, delay);
//     })
//     count++;
//     if (count < 5) {
//         return { status: "pending" };
//     }
//     return { status: "connected" };
// }

// const checkConnection = async () => {
//     while (true) {
//         const response = await pollNetwork(1500);
//         console.log(`STATUS = ${response.status}`);
//         if (response.status === "connected") {
//             break;
//         }
//     }
// }

// checkConnection();
// STATUS = pending
// STATUS = pending
// STATUS = pending
// STATUS = pending
// STATUS = connected


// -------------------------------------------

// do - while

// let i = 0;
// do {
//     log(`do-while - ${i + 1}`);
//     i++;
// } while (i < cars.length);
// do-while - 1
// do-while - 2
// do-while - 3
// do-while - 4
// do-while - 5

// -----------------Bubble Sort--------------------------

// 3) Отсортируйте массив пузырьковой сортировкой

const array = [4, 33, 2, 1];

for (let i = 0; i < array.length; i++) {
    log(`${i + 1} - loop[1]`);

    for (let j = 0; j < array.length - 1 - i; j++) {
        log(`${i + 1} - loop[2]; ${array[j]} > ${array[j + 1]}`);
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}
// 1 - loop[1]
// 1 - loop[2]; 4 > 33
// 1 - loop[2]; 33 > 2
// 1 - loop[2]; 33 > 1

// 2 - loop[1]
// 2 - loop[2]; 4 > 2
// 2 - loop[2]; 4 > 1

// 3 - loop[1]
// 3 - loop[2]; 2 > 1

// 4 - loop[1]

log(array);  // [ 1, 2, 4, 33 ]


const array2 = [4, 33, 2, 1];
const array2Sorted = array2.sort((a, b) => a - b);
// const array2Sorted = array2.sort((a, b) => b - a);  // [ 33, 4, 2, 1 ]

log(array2Sorted);  // [ 1, 2, 4, 33 ] 