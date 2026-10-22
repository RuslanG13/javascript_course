// Call stack (Стек вызовов)

const log = console.log;

// function one() {
//     log("One");
// }

// function two() {
//     log("Two");
// }

// function three() {
//     log("Three");
// }

// ------------------------------------------

function one() {
    log("One");
    two();
}

function two() {
    log("Two");
    three();
}

function three() {
    log("Three");
}

one();