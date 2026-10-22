window.addEventListener("subscription", (e) => {
    const status = e.detail.isSubscribed
        ? "Вы подписаны!💥"
        : "Вы отписались!😬";

    alert(status);
});