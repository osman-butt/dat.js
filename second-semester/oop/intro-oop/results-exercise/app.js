import * as results from "./results.js";

window.addEventListener("load", initApp);

async function initApp() {
  console.log("App is running!");
  await buildResultsList();
  resultsArr.sort((result1, result2) => result1.time - result2.time);
  displayResults(resultsArr);
}

const resultsArr = [];

const dateDisplayOptions = {
  year: "numeric",
  month: "short",
  day: "2-digit",
  timeZone: "Europe/Copenhagen",
};

function displayResults(results) {
  const table = document.querySelector("table#results tbody");
  table.innerHTML = "";
  for (const result of results) {
    const html = /*html*/ `
    <tr>
      <td>${result.date.toLocaleString("da-DK", dateDisplayOptions)}</td>
      <td>${result.id}</td>
      <td>${result.discipline}</td>
      <td>${result.type}</td>
      <td>${result.timeToString()}</td>
    </tr>`;

    table.insertAdjacentHTML("beforeend", html);
  }
}

async function fetchResults() {
  const resp = await fetch("results.json");
  const data = await resp.json();
  return data;
}

async function buildResultsList() {
  const originalResults = await fetchResults();
  for (const jsonObj of originalResults) {
    const realObject = results.construct(jsonObj);
    resultsArr.push(realObject);
  }
}
