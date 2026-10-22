// Date & Time
// Обьект Date - содержит дату и время, также методы управления ими.

const log = console.log;

let d = new Date(); // UTC 2026-04-27T01:33:32.965Z

// d = new Date(0); // 1 января 1970-го 1970-01-01T00:00:00.000Z
d = Date.now(); // 1777332372821 (timestamp количество млисекунд с 1 января 1970-го )

/* 
объект Date с временем, равным количеству миллисекунд (тысячная доля секунды), прошедших с 1 
января 1970 года UTC+0
Целое число, представляющее собой количество миллисекунд, прошедших с начала 1970 года, назыв
ается таймстамп (англ. timestamp) 
*/

d = new Date(2026, 3, 28, 2, 30, 45); // 2026-04-27T23:30:45.000Z (исчесление месяцев идет с нуля "0", как индексы) 0 - это январь, 1 - это февраль и тд.

// d = new Date("2026-04-28"); // 2026-04-28T00:00:00.000Z UTC
// d = new Date("2026-04-28 02:37"); // 2026-04-27T23:37:00.000Z UTC
// d = new Date("04-28-2026"); // 2026-04-27T21:00:00.000Z UTC
// d = new Date("2026-04-28T00:00:00"); // 2026-04-27T21:00:00.000Z UTC


// log(d.toISOString()); // 2026-04-27T23:30:45.000Z UTC
// log(d.toString()); // Tue Apr 28 2026 02:30:45 GMT+0300 (Восточная Европа, летнее время)


d = d.getTime(); // 1777332645000
// s = new Date(0).getTime(); // 0
// log(s);

d = Math.floor(Date.now() / 1000 / 60 / 60 / 24 / 365); // 56 (прошло лет с 1 января 1970-го года)

// log(d); 

// -----------------Методы обьекта Date-----------------------

d = Date.parse("2026-04-27T23:30:45.000Z"); // 1777332645000

// d = new Date();  // 2026-04-27T23:50:32.529Z UTC

// Сеттеры (установщики)

// d.setDate(1); // 2026-04-01T00:00:01.993Z UTC (первый день текущего месяца) 
// d.setDate(30); // 2026-04-30T00:00:39.444Z UTC (последний день текущего месяца)
// d.setDate(0); // 2026-03-31T00:00:58.403Z UTC (последний день предыдущего месяца)
// d.setDate(-1); // 2026-03-30T00:02:06.280Z UTC (предпоследний день предыдущего месяца)

// d.setHours(0); // 2026-04-27T21:06:36.068Z UTC (ставит часы на 00)
// d.setMinutes(0); // 2026-04-28T00:00:36.813Z UTC (ставит минуты на 00)
// d.setSeconds(0); // 2026-04-28T00:09:00.867Z UTC (ставит секунды на 00)
// d.setFullYear(2027); // 2027-04-28T00:09:40.785Z (сетапит год)
// d.setFullYear(2027, 0, 10); // 2027-01-10T01:10:30.739Z (из-за зимнего времени, разница во времени +2)

// let startDate = new Date(); // 2026-04-28T00:20:41.086Z
// let endDate = new Date(new Date().setFullYear(2026, 4)); // 2026-05-28T00:20:41.086Z


// log(startDate, " ", endDate); // 2026-04-28T00:25:23.605Z   2026-05-28T00:25:23.605Z
// log(endDate.getTime()); // 1779927923605
// log(startDate.getTime()); // 1777335923605
// // console.log(endDate - startDate); // 2592000000
// console.log(Math.floor((endDate - startDate) / 1000 / 60 / 60 / 24)); // в днях 30

// Геттеры (получатели)

d = new Date(); // 2026-04-28T22:15:58.041Z
// d= d.getDate(); // 29 (сегодняшнее число)
// d= d.valueOf(); // 1777414670736
// d= d.getFullYear(); // 2026
// d= d.getMonth(); // 3 (сейчас апрель, но получили Март, как отчет месяцев идет с 0)
// d= d.getMonth() + 1; // 4
// d = d.getMonth() + 1; // 4
// d = d.getDay(); // отдает день недели 3
// d = d.getDay(); // отдает день недели 3
// d = d.getHours(); // 1

// console.log(d);

//---------------Представление даты-----------------------------------

// https://www.w3schools.com/jsref/jsref_tolocalestring.asp

d = new Date(); // 2026-04-28T22:24:43.915Z

// let date = Intl.DateTimeFormat('default').format(d); // 29.04.2026
// date = Intl.DateTimeFormat("en-GB").format(d); // 29/04/2026
// date = Intl.DateTimeFormat("en-US").format(d); // 4/29/2026

// date = Intl.DateTimeFormat("ru-RU", {
//     day: "numeric",
//     month: "long",
//     // year: "numeric"
//    year: "2-digit"
//  }).format(d); // 29 апреля 2026 г. || 29 апреля 26 г.


// date = d.toLocaleString("ru-RU", {
//     second: "numeric",
//     minute: "numeric",
//     hour: "numeric",
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//     timeZone: "Europe/Kyiv"
//     // timeZone: "America/Fortaleza" // 28 апреля 2026 г. в 19:41:13
// }); // 29 апреля 2026 г. в 01:35:00


// log(date)

//---------------UTC vs ISO-----------------------------------

// UTC (Coordinated Universal Time)
/* 
UTC (Координированное универсальное время) — это стандарт времени, который используется по всему миру.
--> UTC: Подходит для отображения даты и времени в текстовом виде, когда важна читаемость.
*/
/* ISO (International Organization for Standardization)
ISO 8601 — это международный стандарт для представления дат и времени.
--> ISO: Предпочтительно использовать для хранения данных и передачи между системами, так как формат строгий и однозначный. */

const now = new Date(); // 2026-04-28T22:45:37.291Z UTC


console.group("UTC & ISO");
log(now.toUTCString());
log(now.toISOString());
console.groupEnd();

// Вывод 
/* UTC & ISO
  Tue, 28 Apr 2026 22:47:47 GMT // UTC time
  2026-04-28T22:47:47.572Z // ISO time
  */