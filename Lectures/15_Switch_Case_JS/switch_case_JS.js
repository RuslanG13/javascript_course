/* 
Конструкция switch заменяет собой сразу несколько if.
const x = 5 + 5;
Это более наглядный способ сравнить выражение сразу с несколькими вариантами.
*/

const log = console.log;

// const x = 5 + 5;

// switch (x) {
//     case 3:
//         log("Мимо!");
//         break;
//     case 6:
//         log("Еще нет!");
//         break;
//     case 10:
//         log("Правильно!");
//         break;
//     default:
//         log("Нет ответа!")
// }

// -----------------------------------------------------

// const num = +prompt("Введите число от 0 до 7!");

// switch (num) {
//     case 0:
//     case 1:
//     case 2:
//         log("Числа 0 - 2");
//         break;
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//     case 7:
//         log("Числа 3 - 7");
//         break;
//     case "7":
//         log("Мы сюда не попадем, так как этот тип данных строка!");
//     default:
//         log("Нет ответа!");
// }

// -----------------------------------------------------

// const today = new Date();
// const today = new Date(2026, 3, 30); // часы тут устанавливаются по умолчанию 0 часов
// const month = today.getMonth() + 1;

// log(today) // 2026-04-29T23:19:39.627Z
// log(month) // 4 


// switch (month) {
//     case 1:
//         log("Январь");
//         break;
//     case 2:
//         log("Февраль");
//         break;
//     case 3:
//         log("Март");
//         break;
//     case 4:
//         log("Апрель");
//         break;
//     case 5:
//         log("Май");
//         break;
//     case 6:
//         log("Июнь");
//         break;
//     case 7:
//         log("Июль");
//         break;
//     case 8:
//         log("Август");
//         break;
//     case 9:
//         log("Сентябрь");
//         break;
//     case 10:
//         log("Октябрь");
//         break;
//     case 11:
//         log("Ноябрь");
//         break;
//     case 12:
//         log("Декабрь");
//         break;
// }

// -----------------------------------------------------

const today = new Date();
const hour = today.getHours(); // 2

log(hour);

switch (true) {
    case hour < 6:
        log("Доброй ночи!");
        break;
    case hour < 12:
        log("Доброе утро!");
        break;
    case hour < 18:
        log("Добрый день!");
        break;
    case hour < 24:
        log("Добрый вечер!");
        break;
    case hour < 6:
        log("Доброй ночи!");
        break;
    default:
        log("Получен неверный формат часов!");
}