// Events - propagation & delegation
// 1 - Погружение и всплытие событий (events capture and bubbling)
// 2- Делегирование событий (events delegation)

const log = console.log;

// --- Погружение и всплытие событий (events capturing and bubbling) --- 


/* - Всплытие 
Когда на элементе происходит событие, обработчики сначала срабатывают на
нём, потом на его родителе, затем выше и так далее, вверх по цепочке предков.
*/
const container = document.querySelector("[data-container]");

// container.addEventListener("click", () => {
//     log("The container's event listener was triggered");
// });

// document.addEventListener("click", () => {
//     log("The document's event listener was triggered");
// });

// container.addEventListener("click", (e) => {
//     e.stopPropagation();  // Предотвращает всплытие и погружение у элементов, то есть не будет вызваны события у предков
//     e.stopImmediatePropagation();  // Предотвращает всплытие и погружение. Сработает только конкретный ивент, другие ивенты будут игнорироваться.
//     log("1) The container's event listener was triggered");
// });

// container.addEventListener("click", () => {

//     log("2) The container's event listener was triggered");
// });

//===================================================================

/*
Погружение
В современной разработке стадия погружения используется очень редко,
обычно события обрабатываются во время всплытия.
3й аргумент функции addEventListener или просто true или {capture: true}
*/

// document.addEventListener("click", () => {
//     log("The document's event listener was triggered");
// }, true);

// container.addEventListener("click", () => {
//     log("The container's event listener was triggered");
// });

//===================================================================

// ---------------Делегирование событий------------------------------
/*
Всплытие и погружение являются основой для «делегирования событий»
очень мощного приёма обработки событий.
*/

const table = document.createElement("table");

for (let row = 0; row < 100; row++) {
    const tr = document.createElement("tr");

    for (let col = 0; col < 50; col++) {
        const td = document.createElement("td");
        td.dataset.cell = `row${row + 1}-col${col + 1}`;
        td.textContent = td.dataset.cell;
        tr.append(td);
    }

    table.append(tr);
}

table.addEventListener("click", (e) => {
    for (const elem of table.querySelectorAll("*")) {
        elem.classList.remove("highlight");
    }

    if (e.target.tagName === "TD") {
        e.target.classList.add("highlight");
    }
});

document.querySelector("[data-table]").append(table);


// ====================numpad======================

const numpad = document.querySelector("[data-numpad]");

let activeKey = null;

document.addEventListener("keydown", (e) => {
    // Если клавиша уже нажата — ничего не делаем
    if (activeKey !== null) {
        return;
    }

    activeKey = e.key;

    for (const button of numpad.querySelectorAll("td")) {
        if (button.textContent === activeKey) {
            button.classList.add("highlight");
            break;
        }
    }
});

document.addEventListener("keyup", (e) => {
    // Реагируем только на отпускание активной клавиши
    if (e.key !== activeKey) {
        return;
    }

    for (const button of numpad.querySelectorAll("td")) {
        button.classList.remove("highlight");
    }

    activeKey = null;
});