// fetch, async, await, try, catch, finally


// GET Запрос

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

// fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
//     .then(response => response.json())
//     .then(json => console.log(json))
// [
//   { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
//   {
//     userId: 1,
//     id: 2,
//     title: 'quis ut nam facilis et officia qui',
//     completed: false
//   },
//   { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false },
//   { userId: 1, id: 4, title: 'et porro tempora', completed: true },
//   {
//     userId: 1,
//     id: 5,
//     title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
//     completed: false
//   }
// ]


// -------------------- Renders posts (GET) ----------------------------------------------

// fetch('https://jsonplaceholder.typicode.com/posts?_limit=3', {
//     method: "GET",
//     headers: {
//         "Content-type": "application/json",
//         "QWERTY": "HELLO WORLD!",
//     }
// })
//     .then(response => response.json())
//     .then(json => console.log(json))
// [
//   {
//     userId: 1,
//     id: 1,
//     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//     body: 'quia et suscipit\n' +
//       'suscipit recusandae consequuntur expedita et cum\n' +
//       'reprehenderit molestiae ut ut quas totam\n' +
//       'nostrum rerum est autem sunt rem eveniet architecto'
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: 'qui est esse',
//     body: 'est rerum tempore vitae\n' +
//       'sequi sint nihil reprehenderit dolor beatae ea dolores neque\n' +
//       'fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n' +
//       'qui aperiam non debitis possimus qui neque nisi nulla'
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
//     body: 'et iusto sed quo iure\n' +
//       'voluptatem occaecati omnis eligendi aut ad\n' +
//       'voluptatem doloribus vel accusantium quis pariatur\n' +
//       'molestiae porro eius odio et labore et velit aut'
//   }
// ]

// fetch('https://jsonplaceholder.typicode.com/posts?_limit=3', {
//     method: "GET",
//     headers: {
//         "Content-type": "application/json",
//         "QWERTY": "HELLO WORLD!",
//     }
// })
//     .then(response => response.json())
//     .then(posts => renderPosts(posts));

// const renderPosts = ((posts) => {
//     posts.forEach(post => {
//         const postContainer = document.createElement("div");
//         const postTitle = document.createElement("h3");
//         const postBody = document.createElement("p");

//         postTitle.textContent = post.title;
//         postBody.textContent = post.body;

//         postContainer.append(postTitle, postBody);
//         document.body.append(postContainer);
//     });
// });


// -------------------- Renders posts async...await (GET) ----------------------------------------------

// const renderPostsAsync = async () => {
//     // fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
//     //     .then(response => response.json())
//     //     .then(posts => renderPosts(posts));

//     const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
//     const posts = await response.json();

//     posts.forEach(post => {
//         const postContainer = document.createElement("div");
//         const postTitle = document.createElement("h3");
//         const postBody = document.createElement("p");

//         postTitle.textContent = post.title;
//         postBody.textContent = post.body;

//         postContainer.append(postTitle, postBody);
//         document.body.append(postContainer);
//     });
// };

// renderPostsAsync();


// --------------------- Try, catch, finally ----------------------------------------

const renderPostsAsync = async () => {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
        const posts = await response.json();

        posts.forEach(post => {
            const postContainer = document.createElement("div");
            const postTitle = document.createElement("h3");
            const postBody = document.createElement("p");

            postTitle.textContent = post.title;
            postBody.textContent = post.body;

            postContainer.append(postTitle, postBody);
            document.body.append(postContainer);
        });
    } catch (error) {
        console.log("Catched error!", error.message);
    } finally {
        console.log("Process finish");
    }
};

renderPostsAsync();