"use strict";

window.addEventListener("load", initApp);

function initApp() {
  console.log("---initApp--");
  const json =
    '{"title": "This is my awesome title", "image": "https://share.cederdorff.com/images/petl.jpg" }';
  const jsonObj = parseJSONString(json);
  console.log(jsonObj);
  const user = { name: "John", age: 30, city: "New York" };
  const cars = ["Ford", "BMW", "Audi", "Fiat", "VW"];
  const userJsonString = stringify(user);
  const carsJsonString = stringify(cars);
  console.log(userJsonString);
  console.log(carsJsonString);
}

// Parse json string to js object
function parseJSONString(jsonStringObj) {
  const jsonObj = JSON.parse(jsonStringObj);
  return jsonObj;
}

// Js object/array to json string
function stringify(object) {
  const jsonString = JSON.stringify(object);
  return jsonString;
}
