// **3 задача:**

// ссылка на 3 задачу (решение включено) https://learn.javascript.ru/task/fibonacci-numbers


// Solution
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}


console.log(fib(3));  // 2
console.log(fib(7));  // 13
console.log(fib(77));  // 5527939700884757