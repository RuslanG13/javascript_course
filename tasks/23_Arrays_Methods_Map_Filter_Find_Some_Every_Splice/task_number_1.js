// **1 задача:**

// Удалите повторяющиеся элементы из массива `skills` и присвойте новый полученный массив в переменную `uniqSkills`;

// ```JavaScript
//    const skills = ["html", "css", "scss", "js", "git", "ts", "react", "git", "angular", "js"];
// ```


// Solution
const skills = ["html", "css", "scss", "js", "git", "ts", "react", "git", "angular", "js"];
const uniqSkills = skills.filter((skill, index, thisArr) => index === thisArr.indexOf(skill));


console.log(skills);  // ["html", "css", "scss", "js", "git", "ts", "react", "git", "angular", "js"];
console.log(uniqSkills);  // ["html", "css", "scss", "js", "git", "ts", "react", "angular"];