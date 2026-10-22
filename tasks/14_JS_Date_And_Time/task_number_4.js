// **4 задача:**

// Сколько минут осталось до завтра?

// ```JavaScript
//     const now = new Date();
//     const tomorrow = ??;
//     const minutesBeforeTomorrow = ??;

//     console.log(minutesBeforeTomorrow); // ??
// ```


// Solution
// UTC time

const now = new Date();
const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

console.log(now.toLocaleString()); // 29.04.2026, 03:08:28
console.log(tomorrow.toLocaleString()); // 30.04.2026, 00:00:00

const minutesBeforeTomorrow = Math.ceil((tomorrow - now) / 1000 / 60);

console.log(minutesBeforeTomorrow); // 1252