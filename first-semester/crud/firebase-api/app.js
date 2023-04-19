"use strict";
window.addEventListener("load", initApp);

const endpoint =
  "https://rest-api-intro-default-rtdb.europe-west1.firebasedatabase.app";

const query = "posts";
const queryUsers = "users";

async function initApp() {
  console.log("initApp: app.js is running 🎉");
  const posts = await getPosts();
  const users = await getUsers();
  displayPosts(posts);
  displayUsers(users);
}

async function displayPosts(posts) {
  console.log("---displayPosts---");
  document.querySelector("#grid-posts").innerHTML = "";
  if (posts.length > 0) {
    showGrid();
    posts.forEach(displayPost);
  } else {
    hideGrid();
  }
}
async function displayUsers(users) {
  console.log("---displayUsers---");
  document.querySelector("#grid-users").innerHTML = "";
  if (users.length > 0) {
    showGrid();
    users.forEach(displayUser);
  } else {
    hideGrid();
  }
}

async function updateGridPosts() {
  console.log("---updateGridPosts---");
  document.querySelector("#grid-posts").innerHTML = "";
  const posts = await getPosts();
  if (posts.length > 0) {
    showGrid();
    posts.forEach(displayPost);
  } else {
    hideGrid();
  }
}

function hideGrid() {
  document.querySelector("#no-data").offsetHeight;
  document.querySelector("#grid-posts").offsetHeight;
  document.querySelector("#grid-posts").classList.remove("hidden");
  document.querySelector("#no-data").classList.remove("hidden");
}
function showGrid() {
  document.querySelector("#no-data").offsetHeight;
  document.querySelector("#grid-posts").offsetHeight;
  document.querySelector("#no-data").classList.add("hidden");
  document.querySelector("#grid-posts").classList.remove("hidden");
}

// === READ (GET) === //
async function getPosts() {
  console.log("---getPosts---");
  const response = await fetch(`${endpoint}/${query}.json`);
  const data = await response.json();
  const posts = preparePostData(data);
  return posts;
}

// === DELETE (DELETE) === //
async function deletePost(post) {
  console.log("---deletePost---");
  const id = post.id;
  const url = `${endpoint}/${query}/${id}.json`;
  const res = await fetch(url, { method: "DELETE" });
  console.log(res);
  updateGridPosts();
}

// === CREATE (POST) === //
async function createPost(title, image, body, uid) {
  console.log("---createPost---");
  const newPost = { title, image, body, uid };
  const postAsJson = JSON.stringify(newPost);
  const res = await fetch(`${endpoint}/${query}.json`, {
    method: "POST",
    body: postAsJson,
  });
  const response = await res.json();
  updateGridPosts();
}

// === READ (GET) === //
async function getUsers() {
  console.log("---getUsers---");
  const response = await fetch(`${endpoint}/${queryUsers}.json`);
  const data = await response.json();
  const users = preparePostData(data);
  console.log(data.ok);
  return users;
}

// === DELETE (DELETE) === //
async function deleteUser(user) {
  console.log("---deletePost---");
  const id = user.id;
  const url = `${endpoint}/${queryUsers}/${id}.json`;
  const res = await fetch(url, { method: "DELETE" });
  console.log(res);
  updateGridPosts();
}

// Converts object of objects to array of objects
function preparePostData(dataObject) {
  console.log("---preparePostData---");
  const posts = [];
  for (const key in dataObject) {
    const post = dataObject[key];
    post.id = key;
    posts.push(post);
  }
  return posts;
}

function displayPost(post) {
  console.log("---displayPost---");
  const postHtml = /*html*/ `
            <article class="grid-item">
          <img
            src="${post.image}"
            alt=""
          />
          <h2 style="text-align: center;">${post.title}</h2>
          <button id="delete-btn">DELETE</button>
        </article>
  `;
  document
    .querySelector("#grid-posts")
    .insertAdjacentHTML("beforeend", postHtml);
  document
    .querySelector("#grid-posts article:last-child img")
    .addEventListener("click", function () {
      showModal(post);
    });
  document
    .querySelector("#grid-posts article:last-child button")
    .addEventListener("click", function () {
      deletePost(post);
    });
}
function displayUser(users) {
  console.log("---displayUsers---");
  const postHtml = /*html*/ `
            <article class="grid-item">
          <img
            src="${users.image}"
            alt=""
          />
          <h2 style="text-align: center;">${users.name}</h2>
          <h3 style="text-align: center;">${users.title}</h3>
          <button id="delete-btn">DELETE</button>
        </article>
  `;
  document
    .querySelector("#grid-users")
    .insertAdjacentHTML("beforeend", postHtml);
  document
    .querySelector("#grid-users article:last-child img")
    .addEventListener("click", function () {
      showModalUsers(users);
    });
  document
    .querySelector("#grid-users article:last-child button")
    .addEventListener("click", function () {
      deleteUser(users);
    });
}

function showModal(post) {
  console.log("---showModal---");
  document.querySelector("#modal-img").src = post.image;
  document.querySelector("#modal-title").textContent = post.title;
  document.querySelector("#modal-body").textContent = post.body;
  document.querySelector("#modal-post").showModal();
}
function showModalUsers(users) {
  console.log("---showModal---");
  document.querySelector("#modal-users-img").src = users.image;
  document.querySelector("#modal-users-name").textContent = users.name;
  document.querySelector("#modal-users-title").textContent = users.title;
  document.querySelector("#modal-users-mail").textContent = users.mail;
  document.querySelector("#modal-users-phone").textContent = users.phone;
  document.querySelector("#modal-users").showModal();
}
