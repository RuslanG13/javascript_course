// this

// 1) Глобальный контекст
// console.log(this); // В браузере выведет window , в Node.js - глобальный обьект (global {})  

//--------------------------------------------------------------

// 2) Методы обьекта
const person = {
    name: 'Sam',
    sayHello: function () {
        console.log(`Hello, ${this.name}`);
    }
}

// person.sayHello();  // Выведет: "Hello, Sam"

//--------------------------------------------------------------

// 3) Стрелочные функции и this
const person1 = {
    age: 31,
    sayAge: () => {
        console.log(`Age: ${this.age}`);
    },
    sayAgeWithContext: function () {
        console.log(`Age: ${this.age}`);

    }
}
// person1.sayAge();  // Выведет: "Age: undefuned"
// person1.sayAgeWithContext();  // Выведет: "Age: 33"

//--------------------------------------------------------------

// 4) Контекст this в событиях DOM

//--------------------------------------------------------------

// 5 this in: call, apply and bind
function greet(greeting, emoji) {  // function, не стрелочная функция
    console.log(`${greeting}, ${this.name} ${emoji}`);
}

const person2 = { name: "Alex" };

// Call => Call не возвращает ссылку на функцию, он сразу ее вызывает с определенным this
// greet("Hello", "=)");  // Hello, undefined =)  // Без контекста будет undefined
greet.call(person, "Hello", "=)");  // Hello, Sam =)
greet.call(person2, "Hello", "=)");  // Hello, Alex =) 

// console.log("-------------------------------------------------------");

// Apply - тоже самое, что и Call только аргументы нужно положить в массив
greet.apply(person2, ["Hi", "=("]);  // Hi, Alex =(
greet.apply(person, ["Hi", "=("]);  // Hello, Sam =(

// console.log("-------------------------------------------------------");

// Bind в отличии от Call и Apply не вызывает функцию сразу, а возвращает новую функцию с определенным this
const say = greet.bind(person2);  //если возвращается, что то новое, то нужно поместить в переменную, для хранения
say("Hey", "=/");  // Hey, Alex =/

//--------------------------------------------------------------

// 6) Потеря контекста

const sayAge = person1.sayAgeWithContext;
sayAge();  // Выведет: "Age: undefined"

const boundSayAge = person1.sayAgeWithContext.bind(person1);
boundSayAge();  // Age: 31

const person3 = { age: 45 };
const boundSayAge2 = person1.sayAgeWithContext.bind(person3);
boundSayAge2();  // Age: 45