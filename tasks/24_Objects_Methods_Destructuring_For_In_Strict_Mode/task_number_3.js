// **3 задача:**

// Создайте объект `newCar` в который деструктурируйте объект `oldCar` и замените значения в свойстваx
// `model` на `escape 4` и `year` на `2023`

// ```JavaScript
//    const oldCar = {
//     year: 2015,
//     name: "Ford",
//     model: "escape 3",
//     "engine capacity": 1.5,
//    }

//    const newCar = {}
// ```


// Solution 1
const oldCar = {
    year: 2015,
    name: "Ford",
    model: "escape 3",
    "engine capacity": 1.5,
}

const newCar = {
    ...oldCar,
    year: 2023,
    model: "escape 4"
}
console.log(newCar);  // { year: 2023, name: 'Ford', model: 'escape 4', 'engine capacity': 1.5 }


// Solution 2
const oldCar2 = {
    year: 2015,
    name: "Ford",
    model: "escape 3",
    "engine capacity": 1.5,
}

const newCar2 = {
    ...oldCar2
}
// console.log(newCar2);  // { year: 2015, name: 'Ford', model: 'escape 3', 'engine capacity': 1.5 }

newCar2.model = "escape 4";
newCar2.year = 2023;
// console.log(newCar2);  // { year: 2023, name: 'Ford', model: 'escape 4', 'engine capacity': 1.5 }