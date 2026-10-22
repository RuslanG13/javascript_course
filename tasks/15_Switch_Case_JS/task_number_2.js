// **2 задача:**

// Напишите `switch`, который принимает на вход день недели (число от 0 до 6) и выводит название соответствующего дня. 
// Если введено число, которое не соответствует ни одному дню недели, программа должна вывести сообщение `Некорректный ввод`.
// 0 — воскресенье
// 1 — понедельник
// 2 — вторник
// 3 — среда
// 4 — четверг
// 5 — пятница
// 6 — суббота

// ```JavaScript
//     const day = new Date().getDay();
// ```


// Solution
const day = new Date().getDay(); // 4

switch (day) {
    case 0:
        console.log("Воскресенье!");
        break;
    case 1:
        console.log("Понедельник!");
        break;
    case 2:
        console.log("Вторник!");
        break;
    case 3:
        console.log("Среда!");
        break;
    case 4:
        console.log("Четвер!");
        break;
    case 5:
        console.log("Пятница!");
        break;
    case 6:
        console.log("Суббота!");
        break;
    default:
        console.log("Некорректный ввод");
}