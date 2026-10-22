// **4 задача:**

// Проверьте является ли слово или фраза палиндромами (одинаково читающееся в обоих направлениях)

// ```JavaScript
//     const first = "дед"; // true
//     const second = "баба"; // false
//     const phrase1 = "рвал дед лавр"; // true

//     // со звездочкой
//     const phrase2 = "Леша на полке клопа нашел"; // true
// ```


// Solution
// Тестовые данные
const first = "дед"; // true
const second = "баба"; // false
const phrase1 = "рвал дед лавр"; // true

// со звездочкой
const phrase2 = "Леша на полке клопа нашел"; // true


const isPalindrome = (str) => {
    const trimmedStr = str.toLowerCase().replaceAll(" ", "");
    const reverseTrimmedStr = trimmedStr.split("").reverse().join("");

    return trimmedStr === reverseTrimmedStr;
}

// со звездочкой
const trimmedPhrase2 = phrase2.toLowerCase().replaceAll(" ", "");
const isPhrase2Palindrome = trimmedPhrase2 === trimmedPhrase2.split("").reverse().join("");


console.log(isPalindrome(first));  // true
console.log(isPalindrome(second));  // false
console.log(isPalindrome(phrase1));  // true
console.log(isPalindrome(phrase2));  // true