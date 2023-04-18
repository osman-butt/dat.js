"use strict";
window.addEventListener("load", initApp);

const endpoint =
  "https://rest-api-intro-default-rtdb.europe-west1.firebasedatabase.app";
async function initApp() {
  console.log("initApp: app.js is running 🎉");
  const posts = await getPosts();
  posts.forEach(displayPost);
  console.log(posts);
}

async function getPosts() {
  console.log("---getZipData---");
  const response = await fetch(`${endpoint}/posts.json`);
  const data = await response.json();
  const posts = preparePostData(data);
  return posts;
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
        </article>
  `;
  document.querySelector("#grid").insertAdjacentHTML("beforeend", postHtml);
  document
    .querySelector("#grid article:last-child")
    .addEventListener("click", function () {
      showModal(post);
    });
}

function showModal(post) {
  document.querySelector("#modal-img").src = post.image;
  document.querySelector("#modal-title").textContent = post.title;
  document.querySelector("#modal-post").showModal();
}
