"use strict";
window.addEventListener("load", initApp);

const endpoint =
  "https://rest-api-intro-default-rtdb.europe-west1.firebasedatabase.app";

const query = "posts";

async function initApp() {
  console.log("initApp: app.js is running 🎉");
  const posts = await getPosts();
  displayPosts(posts);
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
async function createPost(title, image) {
  console.log("---createPost---");
  const newPost = { title, image };
  const postAsJson = JSON.stringify(newPost);
  const res = await fetch(`${endpoint}/${query}.json`, {
    method: "POST",
    body: postAsJson,
  });
  const data = await res.json();
  console.log(data);
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

function showModal(post) {
  console.log("---showModal---");
  document.querySelector("#modal-img").src = post.image;
  document.querySelector("#modal-title").textContent = post.title;
  document.querySelector("#modal-body").textContent = post.body;
  document.querySelector("#modal-post").showModal();
}
