// 8 типов данных
// number, bigInt, string, boolean, undefined, null, object, symbol

// Number
/* const age = 28;

console.log(age);
console.log(typeof age); */

// String
/* const firstName = "Igor K.";

console.log(firstName);
console.log(typeof firstName); */

// bigInt
/* const bigNumber = 34234342354656456456456456456456n;

console.log(bigNumber);
console.log(typeof bigNumber); */

// boolean
// const isActive = true;
// const isConfirmed = false;

// console.log(typeof isActive);
// console.log(typeof isConfirmed);

// null
// const city = null;

// console.log(city);
// console.log(typeof city);

// undefined
// let isLoading;

// console.log(isLoading); // значение переменной
// console.log(typeof isLoading);  // тип переменной

// isLoading = undefined;
// isLoading = false;
// console.log(isLoading);

// symbol
const id = Symbol('123');

// console.log(typeof id);

// Ссылочные типы
// Object

const person = {
    name: 'Oleh',
    age: 24,
    id: id
}

console.log(person);
console.log(typeof person);

// Array

const numArr = [1, 2, 3, 4, 5];
console.log(numArr);
console.log(typeof numArr);

// function
function info() {
    return "Hello, Hello";
}

console.log(typeof info);
console.log(info());

// --------------
console.log(Number.prototype);
console.log(Object.getOwnPropertyNames(Number.prototype));