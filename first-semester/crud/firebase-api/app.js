"use strict";
window.addEventListener("load", initApp);

const endpoint =
  "https://rest-api-intro-default-rtdb.europe-west1.firebasedatabase.app";
async function initApp() {
  console.log("initApp: app.js is running 🎉");
  updateGridPosts();
}

async function updateGridPosts() {
  console.log("---updateGridPosts---");
  document.querySelector("#grid").innerHTML = "";
  const posts = await getPosts();
  if (posts.length > 0) {
    document.querySelector("#no-data").offsetHeight;
    document.querySelector("#grid").offsetHeight;
    document.querySelector("#no-data").classList.add("hidden");
    document.querySelector("#grid").classList.remove("hidden");
    posts.forEach(displayPost);
    console.log(posts);
  } else {
    document.querySelector("#grid").classList.remove("hidden");
    document.querySelector("#no-data").classList.remove("hidden");
  }
}

// === CRUD (READ) === //
async function getPosts() {
  console.log("---getZipData---");
  const response = await fetch(`${endpoint}/posts.json`);
  const data = await response.json();
  const posts = preparePostData(data);
  return posts;
}

// === CRUD (DELETE) === //
async function deletePost(post) {
  const id = post.id;
  console.log("---deletePost---");
  const url = `${endpoint}/posts/${id}.json`;
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
  document.querySelector("#grid").insertAdjacentHTML("beforeend", postHtml);
  document
    .querySelector("#grid article:last-child img")
    .addEventListener("click", function () {
      showModal(post);
    });
  document
    .querySelector("#grid article:last-child button")
    .addEventListener("click", function () {
      deletePost(post);
    });
}

function showModal(post) {
  console.log("---showModal---");
  document.querySelector("#modal-img").src = post.image;
  document.querySelector("#modal-title").textContent = post.title;
  document.querySelector("#modal-post").showModal();
}
