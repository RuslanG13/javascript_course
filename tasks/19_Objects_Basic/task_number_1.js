// **1 задача:**

// Создайте объект `car`, который будет описывать автомобиль. У него должны быть следующие свойства:

// `brand` (марка автомобиля)
// `model` (модель автомобиля)
// `year` (год выпуска)
// `isNew` (новая ли машина)

// Далее, измените значение в свойстве year на `любое` другое;
// Далее, удалите свойство `isNew`;

// ```JavaScript
//     const car = {};
// ```


// Solution
const car = {
    brand: "BMW",
    model: "320i",
    year: 2025,
    isNew: true
}

car.year = 2026; // 2026
delete car.isNew; // -

console.log(car); // { brand: 'BMW', model: '320i', year: 2026 }