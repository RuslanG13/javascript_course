// **2 задача:**

// Посчитайте зарплату у всех сотрудников из объекта `employees`

// ```JavaScript
//   const employees = {
//     alex: 1000,
//     elena: 500,
//     olga: 800,
//     nicolas: 1300,
//     anton: 2400,
//     oleg: 3000,
//     kate: 5000
//   }
// ```


// Solution
const employees = {
    alex: 1000,
    elena: 500,
    olga: 800,
    nicolas: 1300,
    anton: 2400,
    oleg: 3000,
    kate: 5000
}

let totalSalary = 0;

for (const key in employees) {
    totalSalary += employees[key];
}

console.log(totalSalary);  // 14000