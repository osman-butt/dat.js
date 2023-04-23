"use strict";

window.addEventListener("load", initApp);

function initApp() {
  console.log("initApp: app.js is running 🎉");
  document.querySelector("#fcalc").addEventListener("submit", calculateBMI);
  document.querySelector("#fcalc").addEventListener("reset", resetCalc);
}

function calculateBMI(event) {
  event.preventDefault();
  console.log("---calculateBMI---");
  const elements = document.forms.fcalc;
  const bmiCalcOutput = document.querySelector("#fbmi");
  const bmiTextOutput = document.querySelector("#ftext");
  const weight = elements.fweight.value;
  const height = elements.fheight.value / 100;
  const bmi = weight / (height * height);
  bmiCalcOutput.textContent = bmi.toFixed(1);
  if (bmi < 18.5) {
    bmiTextOutput.textContent = "Undervægtig";
  } else if (bmi >= 18.5 && bmi <= 25) {
    bmiTextOutput.textContent = "Normal vægt";
  } else if (bmi > 25 && bmi <= 30) {
    bmiTextOutput.textContent = "Overvægtig";
  } else {
    bmiTextOutput.textContent = "Svær overvægt";
  }
}

function resetCalc(event) {
  const bmiCalcOutput = document.querySelector("#fbmi");
  const bmiTextOutput = document.querySelector("#ftext");
  bmiCalcOutput.textContent = "";
  bmiTextOutput.textContent = "";
}
