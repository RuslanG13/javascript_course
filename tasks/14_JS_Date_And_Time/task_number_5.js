// **5 задача:**

// Определите последние число февраля месяца 2026 года

// ```JavaScript
//     const lastNumberOfMonth = ??;

//     console.log(lastNumberOfMonth); // 29
// ```


// Solution 1
const lastNumberOfMonth = new Date(2026, 2, 0);

console.log(lastNumberOfMonth.getDate()); // 28


// Solution 2
const lastNumberOfMonth2 = new Date(2026, 2, 0);

console.log(lastNumberOfMonth2.toLocaleString()); // 28.02.2026, 00:00:00