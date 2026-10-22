// **3 задача:**

// Выведите сегодняшнюю дату в соответствии с локалью `en-US` и `ru-RU`

// ```JavaScript
//     const d = new Date();
//     const todayEN = ??;
//     const todayRU = ??;

//     console.log(todayEN); // Wednesday, August 14, 2024 at 8:34 PM
//     console.log(todayRU); // среда, 14 августа 2024 г. в 20:34
// ```


// Solution
const d = new Date();

const todayEN = d.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Europe/Kyiv"
});

const todayRU = Intl.DateTimeFormat("ru-RU", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Europe/Kyiv"
}).format(d);

console.log(todayEN); // Wednesday, April 29, 2026 at 2:07 AM
console.log(todayRU); // среда, 29 апреля 2026 г. в 02:11