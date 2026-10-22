// **7 задача:**

// Создайте функцию `usePerson` которая будет возвращать кортеж из двух значений. 
// Первое значение это объект c полями name и age;
// Второе значение это функция которая изменяет поля данного объекта;

// С помощью деструктурирующего присваивания получите в переменные эти два значения из функции и 
// далее несколько раз измените объект с помощью полученной функции и выведите результаты в консоль.

// Также можно предусмотреть дополнительные проверки внутри `usePerson` на наличие свойства 
// в передаваемом объекте в полученую фукнцию

// ```JavaScript
//     const usePerson = (initialValue = {}) => {...};

//     тут создаются переменные из кортежа person и setPerson = usePerson({ name: "Alex", age: 23 });

//     console.log(person); // { name: "Alex", age: 23 }

//     setPerson({ name: "Marina", age: 25 });
//     console.log(person); // { name: "Marina", age: 25 }

//     setPerson({ name: "Kate", age: 28 });
//     console.log(person); // { name: "Kate", age: 28 }

//     // с доп проверками:
//     setPerson({ name: "Nik" });
//     console.log(person); // { name: "Nik", age: undefined }

//     setPerson({});
//     console.log(person); // { name: undefined, age: undefined }
// ```


// Solution
const usePerson = (initialValue = {}) => {
    const person = initialValue;

    const changePerson = (newPerson = {}) => {
        if ("name" in newPerson) {
            person.name = newPerson.name;
        } else {
            person.name = undefined;
        }

        if ("age" in newPerson) {
            person.age = newPerson.age;
        } else {
            person.age = undefined;
        }
    };

    return [person, changePerson];
}

const [person, setPerson] = usePerson({ name: "Alex", age: 23 });

console.log(person); // { name: "Alex", age: 23 }

setPerson({ name: "Marina", age: 25 });
console.log(person); // { name: "Marina", age: 25 }

setPerson({ name: "Kate", age: 28 });
console.log(person); // { name: "Kate", age: 28 }

setPerson({ name: "Nik" });
console.log(person); // { name: "Nik", age: undefined }

setPerson({});
console.log(person); // { name: undefined, age: undefined }