// **3 задача:**

// Напишите функцию `outerFunction`, внутри которой объявите переменную `innerVar` и функцию `innerFunction`, 
// которая выводит значение переменной `innerVar`. Вызовите `innerFunction` внутри `outerFunction`, 
// а затем попробуйте вывести значение `innerVar` за пределами `outerFunction`. Объясните, что произошло и почему.

// ```JavaScript
//     outerFunction(); // Вывод: "I am inside!"

//     console.log(innerVar); // Что будет выведено?
// ```


// Solution
function outerFunction() {
    let innerVar = "I am inside!";

    function innerFunction() {
        console.log(innerVar);
    }

    innerFunction();
}

outerFunction(); // Вывод: I am inside!
// Функция innerFunction находится внутри outerFunction, поэтому у неё есть доступ к переменным, объявленным внутри outerFunction.
// Это называется лексическая область видимости (scope).

// То есть:
// innerVar объявлена в outerFunction
// innerFunction может её использовать