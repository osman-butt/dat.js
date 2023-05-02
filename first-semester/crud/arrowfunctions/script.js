"use strict";

let count = 0;

document.querySelector("#btn").addEventListener("click", function (event) {
  count++;
  console.log("Clicks: " + count);
});
