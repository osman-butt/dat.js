"use strict";

window.addEventListener("load", initApp);

function initApp() {
  console.log("---initApp--");
  const json =
    '{"title": "This is my awesome title", "image": "https://share.cederdorff.com/images/petl.jpg" }';
  const jsonObj = parseJSONString(json);
  console.log(jsonObj);
}

// Parse json string to javascript object
function parseJSONString(jsonStringObj) {
  const jsonObj = JSON.parse(jsonStringObj);
  return jsonObj;
}
