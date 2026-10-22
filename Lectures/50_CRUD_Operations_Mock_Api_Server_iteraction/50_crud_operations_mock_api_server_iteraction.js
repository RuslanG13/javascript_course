/* 
CRUD операции

C - CREATE  [POST]
R - READ    [GET]
U - UPDATE  [PATCH, PUT]
D - DELETE  [DELETE]

PATCH используется для частичных обновления ресурса, а PUT — для замены всего ресурса
(в уроке используем PUT, так как mock api не поддерживает PATCH)
(НО у mock api PUT может имитировать метод PATCH)

https://mockapi.io
*/


const usersContainer = document.querySelector("#user-container");
const createUserBtn = document.querySelector("#btn-create");
const editUserBtn = document.querySelector("#btn-edit");
const removeUserBtn = document.querySelector("#btn-remove");

const MOCK_API_URL = "https://6abdab425121d616d90cfd90.mockapi.io/users";

let users = [];

createUserBtn.addEventListener("click", () => createUserAsync());
editUserBtn.addEventListener("click", () => updateUserAsync());
removeUserBtn.addEventListener("click", () => removeUserAsync());

// ---------------- Отрисовка пользователей --------------

const renderUsers = () => {
    usersContainer.innerHTML = "";

    users.forEach(user => {
        const userWrapper = document.createElement("section");
        const userName = document.createElement("h3");
        const userCity = document.createElement("p");
        const userAvatar = document.createElement("img");

        userName.textContent = `Name: ${user.name}`;
        userCity.textContent = `City: ${user.city}`;
        userAvatar.src = user.avatar;
        userWrapper.append(userName, userCity, userAvatar);

        usersContainer.append(userWrapper);
    });
}


// ---------------- Удаление существующего пользователя --------------

const removeUserAsync = async () => {
    try {
        const ID = "6";  // В реальности это значение всегда динамичное

        const response = await fetch(`${MOCK_API_URL}/${ID}`, {
            method: "DELETE",
        });

        if (response.status === 404) {
            throw new Error(`Id "${ID}" is not valid!`);
        }

        const deletedUser = await response.json();

        users = users.filter((user) => {
            return user.id !== deletedUser.id;
        });
        renderUsers();

    } catch (error) {
        console.error("Error occurred while deleting a current user.", error.message);
    }
}


// ---------------- Изменение существующего пользователя --------------

const updateUserAsync = async () => {
    try {
        const ID = "5";  // В реальности это значение всегда динамичное

        const response = await fetch(`${MOCK_API_URL}/${ID}`, {
            method: "PUT",
            body: JSON.stringify({
                name: "Petr",
                city: "Berlin",
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQhAZ5nEDtb1UGaJ1R9Ok_0r1DNMV60KJyZKx9uKLYA4TAZTyKZ5o1zhI&s",
            }),
            headers: {
                "Content-type": "application/json"
            }
        });
        const editedUser = await response.json();

        users = users.map((user) => {
            if (user.id === editedUser.id) {
                return editedUser;
            }

            return user;
        });
        renderUsers();

    } catch (error) {
        console.error("Error occurred while updating a current user.", error.message);
    }
}


// ---------------- Создание нового пользователя --------------

const createUserAsync = async () => {
    try {

        const response = await fetch(MOCK_API_URL, {
            method: "POST",
            body: JSON.stringify({
                name: "Vasya",
                city: "Dnipro",
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Cv8oZOdV4h8xUBFvD5nDVgHd8q6J3ly8HDejNODGsqN8TkBeQOgyvpo&s",
            }),
            headers: {
                "Content-type": "application/json"
            }
        });
        const newCreatedUser = await response.json();
        users.unshift(newCreatedUser);
        renderUsers();
    } catch (error) {
        console.error("Error occurred while creating a new user.", error.message);
    }
}


// ---------------- Получение всех пользователей --------------

const getUsersAsync = async () => {
    try {
        const response = await fetch(MOCK_API_URL);
        users = await response.json();

        renderUsers();

    } catch (error) {
        console.error("Catched Error", error.message);

    } finally {
        console.log("Finish Process!");
    }
}

getUsersAsync();