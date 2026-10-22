const createUserForm = document.querySelector("[data-create-user-form]");
const usersContainer = document.querySelector("[data-users-container]");
const editUserFormDialog = document.querySelector("[data-edit-user-form-dialog]");

const MOCK_API_URL = "https://6abdab425121d616d90cfd90.mockapi.io/users";

let users = [];


// ------- Клик по всему контейнеру (делегирование событий) -------------

usersContainer.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-user-remove-btn")) {
    // console.log("userremoveBtn" in e.target.dataset);

    const isRemoveUser = confirm("Are you sure you want to delete this user?");
    isRemoveUser && removeExistingUserAsync(e.target.dataset.userId);

    return;
  }

  if (e.target.hasAttribute("data-user-edit-btn")) {
    populateDialog(e.target.dataset.userId);
    editUserFormDialog.showModal();
  }
});


// ------------------- Событие отправки формы создания пользователя -----------------

createUserForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(createUserForm);
  const formUserData = Object.fromEntries(formData);

  const newUserData = {
    name: formUserData.userName,
    city: formUserData.userCity,
    email: formUserData.userEmail,
    avatar: formUserData.userImageUrl,
  }

  createNewUserAsync(newUserData);
});


// --------------- Редактирование существующего пользователя -----------------------
const editExistingUserAsync = async (userData) => {
  try {
    const response = await fetch(`${MOCK_API_URL}/${userData.id}`, {
      method: "PUT",
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application/json"
      }
    });

     if (response.status === 400) {
      throw new Error("Failed to update user: Bad Request (400)");
    }

    const editedUser = await response.json();

    users = users.map(user => {
      if (user.id === editedUser.id) {
        return editedUser;
      }

      return user;
    });

    editUserFormDialog.close();
    renderUsers();

    alert("User has been updated successfully");
  } catch (error) {
    console.error("Error updating user", error.message);
  }
}


// ------- Удаление существующего пользователя -------------

const removeExistingUserAsync = async (userId) => {
  try {
    const response = await fetch(`${MOCK_API_URL}/${userId}`, {
      method: "DELETE",
    });

    if (response.status === 404) {
      throw new Error(`User with ID ${userId} is not found`);
    }

    const removedUser = await response.json();

    users = users.filter(user => user.id !== removedUser.id);
    renderUsers();

    alert("User has been successfully deleted");
  } catch (error) {
    console.error(`Failed to delete user with ID ${userId}`, error.message);
  }
}


// ------------------- Создание нового пользователя -----------------

const createNewUserAsync = async (newUserData) => {
  try {
    const response = await fetch(MOCK_API_URL, {
      method: "POST",
      body: JSON.stringify(newUserData),
      headers: {
        "Content-type": "application/json"
      }
    });

    if(response.status !== 201 || 200) {
      throw new Error("Error creating new user");
    }

    const newCreatedUser = await response.json();

    users.unshift(newCreatedUser);
    renderUsers();

    createUserForm.reset();
    alert("New user has been created successfully");
  } catch (error) {
    console.error("Error creating new user", error.message);
  }
}


// ------------------- Получение всех пользователей -----------------

const getUsersAsync = async () => {
  try {
    const response = await fetch(MOCK_API_URL);
    users = await response.json();

    renderUsers();
  } catch (error) {
    console.error("Error fetching users", error.message);
  }
}


// ------------------- Отрисовка пользователей -----------------

const renderUsers = () => {
  usersContainer.innerHTML = "";

  users.forEach(user => {
    usersContainer.insertAdjacentHTML("beforeend", `
            <div class="user-card">
                <h3>${user.name}</h3>
                <p>City: ${user.city}</p>
                <span>Email: ${user.email}</span>
                <img src="${user.avatar}"/>
                <button class="user-edit-btn" data-user-id="${user.id}" data-user-edit-btn>⚒️</button>
                <button class="user-remove-btn" data-user-id="${user.id}" data-user-remove-btn>❌</button>
            </div>
            `);
  });
}


// ---------------- Заполнение модального окна разметкой формы ------------

const populateDialog = (userId) => {
  editUserFormDialog.innerHTML = "";

  const editForm = document.createElement("form");
  const closeFormBtn = document.createElement("button");

  closeFormBtn.classList.add("close-edit-form-btn");
  closeFormBtn.textContent = "❌";
  closeFormBtn.addEventListener("click", () => editUserFormDialog.close());

  editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(editForm);
    const formUserData = Object.fromEntries(formData);

    const newUserData = {
      id: formUserData.userId,
      name: formUserData.userName,
      city: formUserData.userCity,
      email: formUserData.userEmail,
      avatar: formUserData.userImageUrl,
    }

    editExistingUserAsync(newUserData);
  });

  editForm.classList.add("form");
  editForm.innerHTML = `
            <input type="text" name="userId" value=${userId} hidden />

            <div class="control-field">
              <label for="nameId" class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                id="nameId"
                name="userName"
                required
                minlength="2"
                maxlength="23"
              />
            </div>

            <div class="control-field">
              <label for="cityId" class="form-label">City</label>
              <input
                type="text"
                class="form-control"
                id="cityId"
                name="userCity"
                required
                minlength="2"
                maxlength="20"
              />
            </div>

            <div class="control-field">
              <label for="emailId" class="form-label">Email</label>
              <input
                type="email"
                class="form-control form-control-email"
                id="emailId"
                name="userEmail"
                required
              />
            </div>

            <div class="control-field">
              <label for="imagesUrlId" class="form-label">Images</label>

              <select
                name="userImageUrl"
                id="imagesUrlId"
                class="form-control form-control-images"
                required
              >
                <option value="">Image URL</option>
                <hr />
                <option
                  value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1tlHID-KtnYPWT0fNy_q-o4RBZz8lroSGLgo6bZOS2Q&s=10"
                >
                  Cat 1
                </option>
                <option
                  value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0maOLJ9j31VumNnnFIgvl1A6pDxuaDIyoeDsQ7sU2yg&s=10"
                >
                  Cat 2
                </option>
                <option
                  value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu5jjPNH21PXRrym45s36EBWQQ85KFrhaX1d-OS4pZjA&s=10"
                >
                  Cat 3
                </option>
                <option
                  value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBzDNypLRcPbME02AatgBq_RkRWUVBYkYoWwRBp9mM7w&s=10"
                >
                  Dog 1
                </option>
                <option
                  value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc2eHkzKA26dGfeGx7aTgRLX7bYAGfmcEbwvEyWNp5w&s=10"
                >
                  Dog 2
                </option>
                <option
                  value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbpiDCR28txHgvfc0MF_ewyvJ94FnG7r4syZjfry5IRA&s=10"
                >
                  Dog 3
                </option>
                <option
                  value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mdFXM8N6btATPiGn72QbjFc2LUvcOxl9uaKOYqiXAA&s"
                >
                  Wolf 1
                </option>
                <option
                  value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPwpmVIdFT0reDX7Z9_owzPhxGMvSUVwvPvQqzwUqZg&s=10"
                >
                  Fox 1
                </option>
              </select>
            </div>

            <button type="submit" class="btn submit-btn">Edit User</button>
    `;

  editUserFormDialog.append(editForm, closeFormBtn);
}

getUsersAsync();