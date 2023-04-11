"use strict";

window.addEventListener("load", start);

let count = 0;
const arr = [count];
function start() {
  console.log(arr);
  setInterval(incrementArray, 1000);
}

function incrementArray() {
  arr.unshift(++count);
  if (arr.length >= 9) {
    arr.length = 9;
  }
  console.log(arr);
}
