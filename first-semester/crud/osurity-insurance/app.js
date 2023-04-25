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

async function sendData(event) {
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
  await createInfo(formData);
  elements.reset();
  document.querySelector("#fcity").style.backgroundColor = "rgb(255,255,255)";
}

async function createInfo(formData) {
  console.log("---createPost---");
  const postAsJson = JSON.stringify(formData);
  const res = await fetch(
    `https://rest-api-intro-default-rtdb.europe-west1.firebasedatabase.app/customer.json`,
    {
      method: "POST",
      body: postAsJson,
    }
  );
  const response = await res.json();
  if (res.status) {
    showPrompt("OPLYSNINGERNE BLEV GEMT", "rgb(117, 214, 117)");
  }
  console.log("Send response: " + res.status);
}

function showPrompt(message, color) {
  const html = /*html*/ `
  <div id="feedback" class="hidden"></div>
  `;
  document.querySelector("header").insertAdjacentHTML("afterend", html);
  const prompt = document.querySelector("#feedback");
  prompt.textContent = message;
  prompt.style.backgroundColor = color;
  prompt.addEventListener("animationend", hidePrompt);
  prompt.classList.remove("hidden");
}

function hidePrompt() {
  const prompt = document.querySelector("#feedback");
  prompt.remove();
}
