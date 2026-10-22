// Functions - callbacks, iife, arrow functions

log = console.log;

function greeting() {
    log("Hello team!");
}

function showGreeting(callback) {
    callback();
}

// showGreeting(greeting); // Hello team!
// тут передаем greeting (вложенную функцию коллбек) как ссыдку, 
// а вызываться она будет в функции showGreeting 

// ----------------------------------

function getInfo(name, age) {
    return `Name: ${name}; Age: ${age};`;
}

function getInfoWithCurrentDate(cb) {
    const date = new Date(); // 2026-05-01T22:49:08.941Z; 

    log(`Today: ${date.toISOString()}; \n ${cb("Ivan", 33)}`);
}

// getInfoWithCurrentDate(getInfo);
// Today: 2026-05-01T22:50:22.091Z;
// Name: Ivan; Age: 33;

// ----------------------------------------------------

// function survey(question, agreeFn, disagreeFn) {
//     if (confirm(question)) {
//         agreeFn();
//     } else {
//         disagreeFn();
//     }
// }

// survey(
//     "Ты мой друг?",
//     function () { log("Ты согласился быть моим другом!") },
//     function () { log("Ты НЕ согласился быть моим другом!") }
// )

// ------------------------Стрелочные функции (arrow function)----------------------------

// const sum = (a, b) => {
//     return a + b;
// }


// console.log(sum(5, 5)); // 10

// const multiplication = (a, b) => a + b;

// log(multiplication(1, 19)); // 20


// const showName = name => `Name: ${name}`;

// log(showName("Julia")); // Name: Julia

// ----------------------IIFE------------------------------

// Immediately invoked function expressions

// СЕЙЧАС ЭТО НЕ АКТУАЛЬНО И ИСПОЛЬЗОВАТЬ ЭТО НЕ НУЖНО, НО ЗНАТЬ НУЖНО ДЛЯ ПОНИМАНИЯ

// function () {
//     log("......");
// }


// Так разработчики придумали как сделать локальную область видимости для 
// переменных с ключевым словом var

// (function () {
//     var message = "Hello";
//     log(message);
// })(); // Hello

// log(message); // ReferenceError: message is not defined


// (function (name) {
//     var message = "Hello";
//     log(message, name);
// })("Anna"); // Hello Anna