// prototypes - прототипы

/*Прототипы в JavaScript — это механизм, с помощью которого объекты в JavaScript могут наследовать 
свойства и методы друг от друга. Каждый объект имеет внутреннюю ссылку на другой объект, 
называемый прототипом.*/

const animal = {
    eats: true,
}

const rabbit = {
    jumps: true,
}

rabbit.__proto__ = animal;  // Свойство __proto__ - это скрытое свойство обьекта, которое указывает 
// на прототип второго обьекта от которого он наследуется

// console.log(rabbit);  // { jumps: true, _proto_: { eats: true } }
// console.log(rabbit.eats);  // true
// console.log(rabbit.hasOwnProperty("jumps"));  // true (Поле с глобального обьекта global присутсутвует у rabbit через прототипирование)
// console.log(rabbit.hasOwnProperty("eats"));  // false (Поле с глобального обьекта global присутсутвует у rabbit через прототипирование)

// ---------------------------------------------------

const animal1 = {
    eat() {
        console.log("I eat!");
    }
}

// proto лучше не использовать на практике, лучшей практикой является использование классов
// const dog = Object.create(animal1);

// dog.eat();  // I eat!

// dog.bark = function () {
//     console.log("I bark!");
// };

// dog.bark();  // I bark!

// ---------------------------------------------------
// Функции - конструкторы

function Person(name) {
    this.name = name;
}

const john = new Person("John");
const alex = new Person("Alex");

// prototype - это свойство у функций конструкторов используется для создания 
// прототипов обьектов создаваемых с помощью этого конструктора 
Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);

}

console.log(john);  // Person { name: 'John' }
console.log(john.name);  // John
// --------------------------------------------

console.log(alex);  // Person { name: 'Alex' }
console.log(alex.name);  // Alex
// --------------------------------------------

john.sayHello();  // Hello, my name is John
alex.sayHello();  // Hello, my name is Alex
// --------------------------------------------

console.log(john instanceof Person);  // true (Проверка какой обьект принадлежит какому классу. 
// В данном случае "john" экземпляр класса "Person" 
console.log(john.__proto__ === Person.prototype);  // true ("__proto__" ссылается на конструктор "Person", 
// а "prototype" в свою очередь ссылается на обьект "john" созданного с помощью конструктора "Person" )

// --------------------------------------------

// можно добавить собственные методы к встроенным объектам

Array.prototype.printElements = function () {  // Добавляем новый метод ко всем массивам 
    this.forEach((element, index) => {             // this указывает на массив, на котором метод вызывается
        console.log(`Элемент ${index + 1}: ${element}`);
    });
}

const myArray = [10, 20, 30, 40, 50];
myArray.printElements();
// Элемент 1: 10
// Элемент 2: 20
// Элемент 3: 30
// Элемент 4: 40
// Элемент 5: 50