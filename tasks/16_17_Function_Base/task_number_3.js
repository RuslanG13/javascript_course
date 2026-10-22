// **3 задача:**

// Напишите функцию которая возвращает строку с текстом какой сегодня день недели:

// ```JavaScript
//     function getCurrentDayOfWeek(currentDate) {}

//     console.log(getCurrentDayOfWeek(new Date()))
// ```


// Solution
function getCurrentDayOfWeek(currentDate) {
    const day = currentDate.getDay(); // 6 getDay() - возвращает порядочный номер дня недели

    switch (day) {
        case 0:
            return "Воскресенье!";
        case 1:
            return "Понедельник!";
        case 2:
            return "Вторник!";
        case 3:
            return "Среда!";
        case 4:
            return "Четвер!";
        case 5:
            return "Пятница!";
        case 6:
            return "Суббота!";
        default:
            return "Некорректный ввод";
    }
}

console.log(getCurrentDayOfWeek(new Date()));