import {setItemToLocalStorage} from "./helpers.js";
import greetingFn from "./helpers.js";  // При дефолтном импорте возможно задавать любое название для импортируемого элемента

// console.dir(document.getElementById("heading"));
// console.dir(document.getElementById("heading").textContent);

const numberArray = [1, 2, 3, 4, 5,];

setItemToLocalStorage("numbers", JSON.stringify(numberArray));  // numbers	"[1,2,3,4,5]"

// greetingFn();