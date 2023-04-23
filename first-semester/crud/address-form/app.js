"use strict";

window.addEventListener("load", initApp);

const endpoint = "https://api.dataforsyningen.dk/postnumre";

async function initApp() {
  console.log("initApp: app.js is running 🎉");
  document.querySelector("#fzip").addEventListener("keydown", displayCity);
  document.querySelector("#addressform").addEventListener("submit", sendData);
}

async function displayCity(event) {
  const zip = document.querySelector("#fzip").value;
  document.querySelector("#fcity").style.backgroundColor = "rgb(255,255,255)";
  if (event.code === "Tab") {
    const city = await getCity(zip);
    document.querySelector("#fcity").value = city;
    document.querySelector("#fcity").style.backgroundColor =
      "rgb(233, 233, 233)";
  }
}

async function getCity(zip) {
  const response = await fetch(`${endpoint}/${zip}`);
  const data = await response.json();
  console.log(data);
  return data.navn;
}

function sendData(event) {
  event.preventDefault();
  const elements = document.forms.addressform;
  const formData = {
    name: elements.fname.value,
    address: elements.faddress.value + " " + elements.fhouseno.value,
    zip: elements.fzip.value,
    city: elements.fcity.value,
    address2: elements.fsecondaddress.value,
    telephone: elements.ftelephone.value,
    email: elements.fmail.value,
  };
  console.log(formData);
}
