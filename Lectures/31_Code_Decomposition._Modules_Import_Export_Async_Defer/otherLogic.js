import { getItemFromLocalStorage } from "./helpers.js";

const numbersArray = getItemFromLocalStorage("numbers");  // такое же название переменной как и в main.js так как область видимости 
// разная
// console.log(numbersArray);  // [1,2,3,4,5]