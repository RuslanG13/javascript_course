// Objects - обьекты

/* 
В JS 7 типов данных примитивные, но объекты отностятся к ссылочным (не примитивным) типам
Объекты используются для хранения коллекций различных значений.
В JavaScript объекты используются очень часто, это одна из основ языка.
У объектов есть свойства.
Свойство – это пара «ключ: значение», где ключ – это строка (также называемая «именем свойства»), 
а значение может быть чем угодно.
*/

const log = console.log;

const hobby = "hobby";
const id = "13dsasdadGDJF";

// const p = new Object(); // создание объекта через конструктор
const person = {
    name: "Dmitry",
    age: 13,
    isDeveloper: true,
    address: {
        country: "Poland",
        city: "Gdansk",
        street: "Main street 999"
    },
    0: "Just Zero",
    "last name": "Hohmann",
    greet: function () {
        log("Hello, I`m Dmitry!");
    },
    greetSecond: () => log("Hello, I`m Dmitry from arrow function!"),
    [hobby]: "skiing, coding, drawing",
    // id: id,
    id
}

// log(person);
// {
//   '0': 'Just Zero',
//   name: 'Dmitry',
//   age: 13,
//   isDeveloper: true,
//   address: { country: 'Poland', city: 'Gdansk', street: 'Main street 999' },
//   'last name': 'Hohmann',
//   greet: [Function: greet],
//   greetSecond: [Function: greetSecond]
// }

// log(person.name); // Dmitry
// log(person.age); // 13

// log(person["name"]); // Dmitry
// log(person["age"]); // 13

// log(person.isDeveloper); // true
// log(person.isPositive); // undefined
// // log(person.isPositive.qwerty); // TypeError: Cannot read properties of undefined (reading 'qwerty')
// // log(person.isPositive?.qwerty); // undefined

// log(person.address); // { country: 'Poland', city: 'Gdansk', street: 'Main street 999' }
// log(person.address.country, person.address.city, person.address.street); // Poland Gdansk Main street 999

// --------------------------------------------------------

// log(person[0], person["0"]); // Just Zero Just Zero

// log(person["last name"]); // Hohmann

// delete person[0];
// log(person[0]); // undefined
// log(person);
// {
//   name: 'Dmitry',
//   age: 13,
//   isDeveloper: true,
//   address: { country: 'Poland', city: 'Gdansk', street: 'Main street 999' },
//   'last name': 'Hohmann',
//   greet: [Function: greet],
//   greetSecond: [Function: greetSecond]
// }

//-----------------------------------------------------------

// person.greet(); // Hello, I`m Dmitry!
// person.greetSecond(); // Hello, I`m Dmitry from arrow function

//-----------------------------------------------------------

// const prevName = person.name;
// log(prevName); // Dmitry

// person.name = "Alex";
// log(person.name); // Alex

//-----------------------------------------------------------

// log(person.isHappy); // undefined
// person.isHappy = true;

// log(person.isHappy); // true
// log(person);

// {
//   '0': 'Just Zero',
//   name: 'Dmitry',
//   age: 13,
//   isDeveloper: true,
//   address: { country: 'Poland', city: 'Gdansk', street: 'Main street 999' },
//   'last name': 'Hohmann',
//   greet: [Function: greet],
//   greetSecond: [Function: greetSecond],
//   hobby: 'skiing, coding, drawing',
//   id: '13dsasdadGDJF'
// } 

// log(person.hobby); // skiing, coding, drawing

// log(id); // 13dsasdadGDJF

//-----------------------------------------------------------

// log("age" in person); // true
// log("qwerty" in person); // false

//-----------------------------------------------------------

const newPerson = person; // тут присваивается не сам обьект, а ссылка на обьект
log(newPerson === person); // true (равны не по значению, а по ссылке)

newPerson.age = 33; // тут изменяется по факту один обьект, где лежит ссылка на этот обьект


log(newPerson === person); // true (равны не по значению, а по ссылке)
log(newPerson.age, person.age); // 33, 33