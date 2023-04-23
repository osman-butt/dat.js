"use strict";

window.addEventListener("load", initApp);

function initApp() {
  console.log("initApp: app.js is running 🎉");
  changeColor();
  document.querySelector("#fred").addEventListener("change", displayColor);
  document.querySelector("#fgreen").addEventListener("change", displayColor);
  document.querySelector("#fblue").addEventListener("change", displayColor);
}

function displayColor(event) {
  document.querySelector("#" + this.id + "output").textContent = this.value;
  changeColor();
}

function changeColor() {
  const red = document.querySelector("#fredoutput").textContent;
  const green = document.querySelector("#fgreenoutput").textContent;
  const blue = document.querySelector("#fblueoutput").textContent;
  console.log(red + ", " + green + ", " + blue);
  document.querySelector("#rgboutput").style.backgroundColor =
    "rgb(" + red + "," + green + ", " + blue + ")";
}
