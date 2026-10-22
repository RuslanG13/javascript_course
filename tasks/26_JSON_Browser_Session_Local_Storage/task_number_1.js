// **1 задача:**

// Преобразуйте `car` в JSON, затем распарсите JSON в переменную `newCar`.
// При парсинге найдите поле `year` и восстановите объект даты

// ```JavaScript
//    const car = {
//     year: new Date(2024, 3, 1),
//     brand: "audi",
//     color: "blue",
//     power: 3.2,
//     isFast: true,
//   }
// ```    


// Solution
const car = {
    year: new Date(2024, 3, 1),
    brand: "audi",
    color: "blue",
    power: 3.2,
    isFast: true,
}

carJSON = JSON.stringify(car);
console.log(carJSON);  // {"year":"2024-03-31T21:00:00.000Z","brand":"audi","color":"blue","power":3.2,"isFast":true} 

const newCar = JSON.parse(carJSON, (key, value) => {
    if (key === 'year') {
        return new Date(value);
    };

    return value;
});
console.log(newCar);
// {
//   year: 2024-03-31T21:00:00.000Z,
//   brand: 'audi',
//   color: 'blue',
//   power: 3.2,
//   isFast: true
// }
console.log(newCar.year.getFullYear());  // 2024
