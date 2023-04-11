"use strict";

window.addEventListener("load", start);

const queue = initArray();
function start() {
  displayChart();
  setInterval(displayChart, 1000);
}

// Initializes array with 40 entries
function initArray() {
  const arr = [];
  for (let index = 0; index < 40; index++) {
    arr[index] = getNumberOfCustomers();
  }
  return arr;
}

// Random number between 0 and 32
function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

// Updates chart
function displayChart() {
  // update data
  updateQueue();
  // display chart
  for (let index = 0; index < queue.length; index++) {
    const grid = "#grid-no-" + index;
    document.querySelector(grid).style.height = queue[index] * 10 + "px";
  }
  document.querySelector("#data").textContent = "Data:  " + queue.join(", ");
}

// update queue => FIFO
function updateQueue() {
  const queueSize = getNumberOfCustomers();
  queue.push(queueSize);
  queue.shift();
}
