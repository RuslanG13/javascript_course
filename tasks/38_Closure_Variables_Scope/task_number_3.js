// **3 задача:**

// Калькулятор с памятью
// Создай функцию `createCalculator`, которая возвращает объект с четырьмя методами:

//  - add(value): добавляет value к текущему значению.
//  - subtract(value): вычитает value из текущего значения.
//  - multiply(value): умножает текущее значение на value.
//  - getValue(): возвращает текущее значение.

// При создании калькулятора его значение должно быть равно 0.

// ```JavaScript
//   const calculator = createCalculator();

//   calculator.add(10);
//   console.log(calculator.getValue()); // 10

//   calculator.subtract(3);
//   console.log(calculator.getValue()); // 7

//   calculator.multiply(2);
//   console.log(calculator.getValue()); // 14
// ```


// Solution
const createCalculator = () => {
    let curentValue = 0;

    return {
        add: (value) => {
            curentValue = curentValue + value;
        },
        subtract: (value) => {
            curentValue = curentValue - value;
        },
        multiply: (value) => {
            curentValue = curentValue * value;
        },
        getValue: () => {
            return curentValue;
        }
    }
}

const calculator = createCalculator();

calculator.add(10);
console.log(calculator.getValue());  // 10

calculator.subtract(3);
console.log(calculator.getValue());  // 7

calculator.multiply(2);
console.log(calculator.getValue());  // 14