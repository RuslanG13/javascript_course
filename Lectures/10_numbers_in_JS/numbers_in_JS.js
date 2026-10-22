// Numbers - числа

// способы создания числа в js
// let x = 10;
// x = Number(100);
// x = new Number(101);
// x = x.valueOf(); // valueOf() — это метод, который возвращает примитивное значение объекта.
// // x.valueOf() // Доступ к значению экземпляра класса


// console.log(x.valueOf());

// --------------------------------------------------
// Методы числа
let num = 20.333;

// num = num.toFixed(2);
// console.log();
//  // Два знака после замятой
// num = num.toFixed(3); // Три знака после замятой
// num = num.toFixed(); // Три знака после замятой

// num = Number(num.toPrecision(3)); // более точій инструмент для отображения мастерской
// console.log(num);
// console.log(typeof num);

// num = num.toString();
// num = num.toString().length;  // Длина строки


// console.log(num.valueOf()); // В джаваскрипте примитивы представлены как обьекты
// при создании переменной с типом данных число, то создается и обертка для этого примитива

num = new Number(0); // так попадаем в if. Из-за этого могут возникнуть проблемы в коде
// num = 0; // так не попадаем в if. 
num = Number(0); // так не попадаем в if. Так то же можно. Это тип данных число

if (num) {
    // console.log('check');
}

// console.log(typeof 0); // number
// console.log(typeof Number(0)); // number
// console.log(typeof new Number(0)); // object

// const numObj = new Number(123);

// console.log(typeof numObj); // "object"
// console.log(typeof numObj.valueOf()); // "number"

// ---------------------------------------------------------------

const maxNumber = Number.MAX_VALUE; // это не методы, так получаем свойства обьекта Number
const minNumber = Number.MIN_VALUE;

console.log(maxNumber); // 1.7976931348623157e+308
console.log(minNumber); // 5e-324

/* 
Примитив как объект
Каждый примитив имеет свой собственный «объект-обёртку», 
которые называются: String, Number, Boolean, Symbol и BigInt. 
Таким образом, они имеют разный набор методов. 
*/