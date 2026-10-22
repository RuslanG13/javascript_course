// Operators

let lessons = 10;

lessons = 10 + 10; // addition
lessons = 10 - 5; // subtraction
lessons = 10 * 10; // multiplication
lessons = 10 / 5; // division
lessons = 11 % 2 // остаток от деления (remainder of division)

// console.log(lessons);
// --------------------------------------------------

let x;
x = 2 ** 2; // возведение в степень (exponentiation)
x = 2 ** 3;

x = 1;
x = x + 1; // x++;
x = x - 1; // x--;

// console.log(x);
// --------------------------------------------------

let a = 10;

// let b = a++; // постфиксный инкремент

// console.log(b); // 10
// console.log(a); // 11


// let b = ++a; // префиксный инкремент
// console.log(b); // 11
// console.log(a); // 11


// let = b = a--; //постфиксный декремент
// console.log(b); // 10
// console.log(a); // 9


// let = b = --a; // префиксный декремент
// onsole.log(b); // 9
// console.log(a); // 9
// --------------------------------------------------
// Операторы присваивания

let d = 10;

// d += 2; // res = 12
// d -= 2; // res = 8
// d *= 2; // res = 20
// d /= 2; // res = 5
// d %= 3; // res = 1
// d **= 2; // res = 100


// console.log(d);
// --------------------------------------------------
// Операторы сравнения
// >, <, >=. <=, 
// ==, ===, !=, !==

// !!!!!! В коде нужно использовать тройное (строгое) равно ===
// При строгом равно проверяется как значение так и тип значения 


// console.log(1 == 1); // true
// console.log(1 === 1); // true

// console.log(1 == '1'); // true
// console.log(1 === '1'); // false

// console.log(1 != '1'); // false
// console.log(1 !== '1'); // true

// -------------------------------------------------
// Конкатенация (обьединение)

// const greeting = "Hello " + "World!";aa
const concatWithString = 1 + "bla bla bla bla";

console.log(concatWithString);