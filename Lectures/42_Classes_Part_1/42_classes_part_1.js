// Classes Классы

const log = console.log;

// ========== Базовый синтаксис =======================

/*
class MyClass. {
    // методы класса
    constructor() { }
    method1() { }
    method2() { … … … … · }
    method3() { … … … … · }
}

- Вызов new MyClass() создает новый объект со всеми перечисленными
методами;
- При этом автоматически вызывается метод constructor(), в нём можно
инициализировать объект;
*/

class User {
    constructor(name) {
        this.name = name;
    }

    greeting() {
        log(`Hello, I am ${this.name}`);
    }

    greet = () => {
        log(`Hello, I am ${this.name}`);
    }
}

const userAlex = new User("Alex");

// log(userAlex);  // { greet: [Function: greet], name: 'Alex' }
// log(userAlex.name);  // Alex

// userAlex.greeting();  // Hello, I am Alex
// userAlex.greet();  // Hello, I am Alex

const userOlga = new User("Olga");

// log(userOlga);  // User { greet: [Function: greet], name: 'Olga' }
// log(userOlga.name);  // Olga

// log(typeof User);  // function (Узнать тип класса)


// ----------------------- new Function - Функция-конструктор------------

function UserFnClass(name) {
    this.name = name;

    this.greeting = function () {
        log(`Hello, I am ${this.name}`);
    }
}

UserFnClass.prototype.greet = function () {
    log(`Hello, I am ${this.name}`);
}

// UserFnClass.prototype.greet = () => {
//     log(`Hello, I am ${this.name}`);  // Hello, I am undefined
// }

const userVlad = new UserFnClass("Vlad");
// log(userVlad);  // UserFnClass { name: 'Vlad', greeting: [Function (anonymous)] }
// userVlad.greeting();  // Hello, I am Vlad
// userVlad.greet();  // Hello, I am Vlad 


// --------------- Гетерры и Сеттеры. Класс с приватными полями------------

class User1 {
    profession = "software engineer";  // # - делает поле в классе приватным
    #skills = "";

    constructor(name) {
        this.name = name;
    }

    get skills() {
        return this.#skills;
    }

    set skills(newSkills) {
        if (typeof newSkills !== "string") {
            log("Incorrect value");
            return;
        }
        this.#skills = newSkills;
    }
}

const userAnna = new User1("Anna");
userAnna.name = "Anna Viktorovna";
userAnna.profession = "QA Enginner";

// log(userAnna.skills);  // ""
// userAnna.skills = 456;  // Incorrect value
userAnna.skills = "html, css, js";

// log(userAnna.skills);  // html, css, js

// log(userAnna);  // User1 { profession: 'QA Enginner', name: 'Anna Viktorovna' }


// --------------- Класс со статическими методами и свойствами ------------

class User2 {
    static #instanceCount = 0;

    constructor(name) {
        this.name = name;
        User2.#instanceCount++;
    }

    greering() {
        log(`Hello, I am ${this.name}`);
    }

    static getInstanceCout() {  // static - делает метод статичным (Метод, который работает на самом классе User2, 
        // но не на экземплярах класса)
        log(`Count of instance of ${User2.#instanceCount} User2 class`);
    }
}

const userKen = new User2("Ken");
const userNatalia = new User2("Natalia");

// userKen.getSomething();  // userKen.getSomething is not a function
User2.getInstanceCout();  // Count of instance of 1 User2 class / Count of instance of 2 User2 class

log(userKen);  // User2 { name: 'Ken' } 