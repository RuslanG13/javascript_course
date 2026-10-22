let value = 10;


// число в строку 
value = value + "";
value = `${value}`;
value = value.toString();
value = String(value);

// строку в число
value = Number(value);
value = +value;
value = "10a"
value = parseInt(value); // расширенная функция, что 
// делает из строки число и откидывает строчные символы, оставляя только цифры
value = "10.333";
value = parseFloat(value); // делает число с плавающей точкой

value = Number(10.12345.toFixed(3));
// value = parseFloat(10.12345.toFixed(3));

// console.log(value);
// console.log(typeof value);
// -----------------------------------------------

// Casting - непрямая конвертация (приведение типов)

value = 10 + '10'; // '1010'
value = 10 * '10'; // 100
value = 10 / '10'; // 1
value = 10 - '10'; // 0
value = 10 % '10'; // 0

value = 10 + true; // 11
value = 10 + false; // 10
value = 10 + null; // 10

value = 10 + undefined; // NaN (потому что 10 не приводится к числу при матем операции)
value = 10 + NaN; // NaN (потому что 10 не приводится к числу при матем операции)
value = 10 + []; // 10
value = 10 + {}; // 10[object Object]

value = true + true; // 2
value = true + false; // 1
value = false + false; // 1

// console.log(value);
//-----------------------------------------------

// == сравнивается с приведением к одному типу
// === сравнивается по типу и по значению, без приведения к одному типу

let res;

res = true == true; // true
res = true === true; // true
res = true == 1; // true
res = true === 1; // false

res = false == 0; // true
res = false === 0; // false

res = 1 == '1'; // true
res = 1 === '1'; // false

res = null == undefined; // true
res = null === undefined; // false

res = "" == []; // true
res = "" === []; // false

console.log(res);