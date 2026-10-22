// setTimeout & setinterval

// setTimeout - отработает один раз через определенное время
// setinterval - отработает каждый раз через заданное количество времени

// setTimeout(() => alert("Hello"), 1000);  // Асинхронная функция
// setTimeout(alert, 1000, "hello");  // "world" не отобразится как alert принимает только один аргумент

// setInterval(() => console.log("hello"), 1000);


// console.log("1");  // 1 Синхронная функция
// console.log("2");  // 2 Синхронная функция
// console.log("3");  // 3 Синхронная функция


// ---------- Манипулирование разметкой и счетчик ----------------------

// setTimeout(() => {
//     document.querySelector("#title").textContent = "Hello everyone";
// }, 3000);

// let counter = 1;
// setInterval(() => {
//     document.querySelector("#title").textContent = `Hello everyone ${counter++}`;
// }, 1000);


// ---------------------- Часы -------------------

const clock = () => {
    const currentDate = new Date();

    const format = value => String(value).padStart(2, "0");

    const hours = format(currentDate.getHours());
    const minutes = format(currentDate.getMinutes());
    const seconds = format(currentDate.getSeconds());

    document.querySelector("#current-date").textContent =
        `${hours}:${minutes}:${seconds}`;
};

let intervalId = setInterval(clock, 1000);

const stopBtn = document.querySelector("#btn-stop");
const resumeBtn = document.querySelector("#btn-resume");

stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
});

resumeBtn.addEventListener("click", () => {
    if (!intervalId) {
        intervalId = setInterval(clock, 1000);
    }
});

// -------------- Пример асинхронного выполнения ----------------

// setTimeout(() => alert("Hello!"), 100);  // цикл отработал не за одну секунду, а ждал пока отработает цикл for

// let res = 0;
// for (let i = 0; i < 1222222222; i++) {
//     res++;
// }

// console.log(res);