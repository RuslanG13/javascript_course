// Functions - scope, default, values, declaration vs expression

/* 
Зачастую нам надо повторять одно и то же действие во многих частях программы.
Чтобы не повторять один и тот же код во многих местах, придуманы функции. 
Функции являются основными «строительными блоками» программы.
Пример встроенной функции: console.log
*/

const log = console.log;


// ---------Function Declaration vs Function Expression-------------------------------------------------------

// Function Declaration
// greeting(); // Function Declaration можно вызвать до определения, как работает всплытие

function greeting() {
    log("Hello friends! [1]");
}

// greeting();

// Function Expression

// greetingFn();  Нельзя візівать  до определения функции, как не работает всплытие. 
// По сути функция присвоена обычной переменной
// ReferenceError: Cannot access 'greetingFn' before initialization

const greetingFn = function greeting() {
    log("Hello friends! [2]");
}

// greetingFn(); // Так работает

// ---------Scope (Глобальная и локальная область видимости)-------------------------------------------------------

/*
Параметр – это переменная, указанная в круглых скобках в объявлении функции.
Аргумент – это значение параметра, т.е переменной которая передаётся функции при её вызове.
*/

// Глобальная область видимости (global scope)
const num1 = 10; // Глобальная область

{
    const num2 = 20; // Локальная область видимости
    // log(num2); // 20
    // log(num1); // 10
    var num3 = 100; // var - исключение
}

// log(num1); // 10
// log(num2); // ReferenceError: num2 is not defined
// log(num3); // 100 

function showScopeExample() {
    const num4 = 1000;
    log("showScopeExample", num1, num4); // showScopeExample 10 1000

    function nestedFn() {
        const num5 = 3000;
        log("nestedFn", num4, num5);
    }

    nestedFn(); // nestedFn 1000 3000
}

// showScopeExample();
// nestedFn(); // ReferenceError: nestedFn is not defined

// ---------------------Default ValuesЗ--Значения по умолчанию---------------------------------------

// Параметры со значениями по умолчанию всегда должны быть последними,
// т.е после обязательных параметров

// function formatGreeting(name, emoji = "🥹") {   // format - функция форматирования
//     log(`Hello ${name} ${emoji}`);
// }

function formatGreeting(name, emoji = "🥹") {
    return `Hello ${name} ${emoji}`;
}

// log(formatGreeting("Oleg")); // Hello Oleg undefined
// log(formatGreeting("Oleg")); // Hello Oleg 🥹
// log(formatGreeting("Oleg", "🫩")); // Hello Oleg 🫩

// const formattGreeting = formatGreeting("Genadii", "🫩"); // Hello Genadii 🫩 (строка, результат функции)
const formattGreeting = formatGreeting; // function expression


log(formattGreeting("Genadii", "🫩"));