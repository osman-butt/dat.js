"use strict";
window.addEventListener("load", initApp);

async function initApp() {
  console.log("initApp: app.js is running 🎉");
  const zip = await getZipData("2300");
  console.log(zip.navn);
  const road = await getRoadData("Roskildevej");
  console.log(road.postnumre.forEach(log));
}

async function getZipData(zip) {
  console.log("---getZipData---");
  const response = await fetch(
    "https://api.dataforsyningen.dk/postnumre/" + zip
  );
  const data = await response.json();
  return data;
}

async function getRoadData(road) {
  console.log("---getRoadData---");
  const response = await fetch(
    "https://api.dataforsyningen.dk/vejnavne/" + road
  );
  const data = await response.json();
  return data;
}

function log(data) {
  console.log(data.navn);
}
