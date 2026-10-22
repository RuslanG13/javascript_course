// **2 задача:**

// 🧲 Задача: Компания и сотрудники 🧲

// Создайте класс `Company`, который будет представлять компанию где работают сотрудники, и класс `Employee`, 
// который будет управлять сотрудником. Реализуйте следующие функции:

// Класс `Employee` должен иметь свойства:

// 1) name (имя сотрудника),
// 2) position (должность сотрудника).
// 3) salary (зарплата сотрудника).
// 3) employmentDate (дата приема на работу сотрудника).

// Класс `Company` должен предоставлять методы:

// 1) addEmployee(employee) — добавить сотрудника в компанию.
// 2) fireEmployee(employee) — убрать сотрудника из компании 😬.
// 3) getListOfEmployees() — вывести список всех сотрудников в компании.
// 4) filterEmployeesBySalary(limitSalary) — вывести список всех сотрудников у которых зп начинается с `limitSalary`.
// 5) filterEmployeesByEmployentDate(limitDate) — вывести список всех сотрудников которые работают в компании начиная с `limitDate`.

// ```JavaScript
//   const alex = new Employee("Alex", "developer", "150000", new Date(2022, 2, 5));
//   const elena = new Employee("Elena", "qa", "90000", new Date(2023, 3, 7));

//   const company = new Company();

//   company.addEmployee(alex);
//   company.addEmployee(elena);

//   // дальше по накатанной
// ```


// Solution
class Employee {
    constructor(name, position, salary, employmentDate) {
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.employmentDate = employmentDate;
    }
}


class Company {

    #employees = [];

    addEmployee(employee) {
        this.#employees.push(employee);

        console.log(`Welcome our new employee: '${employee.name}'!`);
    }

    fireEmployee(employee) {
        this.#employees = this.#employees.filter((e) => {
            return e !== employee;
        });

        return employee.name;
    }

    getListOfEmployees() {
        const listOfEmployees = this.#employees.map((employee) => employee.name).join(", ");

        return listOfEmployees;
    }

    filterEmployeesBySalary(limitSalary) {
        const limitSalaryEmployee = this.#employees.filter((employee) => employee.salary >= limitSalary)
            .map((employee) => employee.name).join(", ");

        return limitSalaryEmployee;
    }

    filterEmployeesByEmployentDate(limitDate) {
        const limitDateEmployee = this.#employees.filter((employee) => employee.employmentDate >= limitDate)
            .map((employee) => employee.name).join(", ");

        return limitDateEmployee;
    }
}


const alex = new Employee("Alex", "developer", "150000", new Date(2022, 2, 5));
const elena = new Employee("Elena", "qa", "90000", new Date(2023, 3, 7));
const andrew = new Employee("Andrew", "analyst", "100000", new Date(2024, 5, 8));
const albina = new Employee("Albina", "project manager", "130000", new Date(2021, 2, 28));

const company = new Company();

company.addEmployee(alex);  // Welcome our new employee: Alex!
company.addEmployee(elena);  // Welcome our new employee: Elena!
company.addEmployee(andrew);  // Welcome our new employee: Andrew!
company.addEmployee(albina);  // Welcome our new employee: Albina!

// -----------------------------------------------------------------------------------------------------------------

const listOfEmployeesBeforefired = company.getListOfEmployees();
console.log(`List of employees: '${listOfEmployeesBeforefired}'`);  // List of employees: Alex, Elena, Andrew, Albina

// -----------------------------------------------------------------------------------------------------------------

const firedEmployee = company.fireEmployee(alex);
console.log(`Employee was fired: '${firedEmployee}'`);  // The employee was fired: Alex

// -----------------------------------------------------------------------------------------------------------------

const listOfEmployeesAfterFired = company.getListOfEmployees();
console.log(`List of employees: '${listOfEmployeesAfterFired}'`);  // List of employees: Elena, Andrew, Albina

// -----------------------------------------------------------------------------------------------------------------

const limitSalaryEmployee = company.filterEmployeesBySalary(100000);
console.log(`Employees with a salary limit of 100000 and higher: '${limitSalaryEmployee}'`);
// Employees with a salary limit of 100000 and higher: Andrew, Albina

// -----------------------------------------------------------------------------------------------------------------

const limitDateEmployee = company.filterEmployeesByEmployentDate(new Date(2023, 0, 1));
console.log(`Employees hired after January 1, 2023: '${limitDateEmployee}'`);
// Employees hired after January 1, 2023: Elena, Andrew