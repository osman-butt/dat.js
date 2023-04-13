"use strict";

window.addEventListener("load", initApp);

// ========== Global Variables ========== //

const names = [
  "Peter",
  "Magdalena",
  "Frederikke",
  "Oskar",
  "Rasmus",
  "Sofie",
  "Anders",
  "Birgitte",
];

const years = [2003, 2032, 1990, 1966, 1998, 1989, 1975, 2023, 1933];

const teachers = [
  {
    name: "Magdalena Maria Otap",
    mail: "mago@kea.dk",
    phone: "77880000",
    title: "Lecturer",
    age: 36,
    image: "https://share.cederdorff.com/images/mago.jpg",
  },
  {
    name: "Birgitte Jensen",
    mail: "birgitte@mail.dk",
    phone: "77226010",
    title: "Senior Lecturer",
    age: 49,
    image:
      "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921541630000&format=webp",
  },
  {
    name: "Dan Nielsen",
    mail: "dan@mail.dk",
    phone: "77226027",
    title: "Lecturer",
    age: 36,
    image:
      "https://www.eaaa.dk/media/bdojel41/dan-okkels-brendstrup.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921559630000&format=webp",
  },
  {
    name: "Rasmus Cederdorff",
    mail: "race@kea.dk",
    phone: "72286318",
    title: "Senior Lecturer",
    age: 33,
    image: "https://share.cederdorff.com/images/race.jpg",
  },
  {
    name: "Martin Hansen",
    mail: "martin@mail.dk",
    phone: "77886620",
    title: "Lecturer",
    age: 34,
    image:
      "https://www.eaaa.dk/media/oayjq02h/martin-n%C3%B8hr.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921658800000&format=webp",
  },
  {
    name: "Peter Lind",
    mail: "petl@kea.dk",
    phone: "77886699",
    title: "Senior Lecturer",
    age: 46,
    image: "https://share.cederdorff.com/images/petl.jpg",
  },
];

const teacher = {
  name: "Peter Lind",
  mail: "petl@kea.dk",
  phone: "77886699",
  title: "Senior Lecturer",
  age: 46,
  image: "https://share.cederdorff.com/images/petl.jpg",
};

// ========== initApp ========== //

function initApp() {
  console.log("initApp: app.js is running 🎉");
  //   forEach
  loopThroughNames();
  loopThroughYears(years);
  loopThroughFiveFirstYears(years);
  loopThroughFiveLastYears(years);
}

// ========== forEach ========== //
function loopThroughNames() {
  console.log("---loopThroughNames---");
  names.forEach(logName);
  names.forEach(displayName);
}

function logName(name, index, array) {
  if (index % 2) {
    console.log("Every second name");
    if (index === 0) {
      console.log(
        `Names Array First element - Name=${name} with index=${index}`
      );
    } else if (index === array.length - 1) {
      console.log(
        `Names Array Last element - Name=${name} with index=${index}`
      );
    } else {
      console.log(`Names Array - Name=${name} with index=${index}`);
    }
  } else {
    console.log(name);
    console.log(index);
  }
}

function displayName(name, index) {
  const html = /*html*/ `
        <li>index=${index} - ${name}</li>
    `;
  document.querySelector("#names").insertAdjacentHTML("beforeend", html);
}

// ========== for loop ========== //
function loopThroughYears(years) {
  console.log("---loopThroughYears---");
  for (let index = 0; index < years.length; index++) {
    const year = years[index];
    displayYears(index, year);
    year === 2023 ? console.log("Current year") : 0;
    if (index === years.length - 1) {
      console.log("This is the last year in the array");
      console.log(index);
      console.log(year);
    } else {
      console.log(index);
      console.log(year);
    }
  }
}

function displayYears(index, year) {
  const html = /*html*/ `
        <li>index=${index} - ${year}</li>
    `;
  document.querySelector("#years").insertAdjacentHTML("beforeend", html);
}

function loopThroughFiveFirstYears(years) {
  console.log("---loopThroughFiveFirstYears---");
  for (let index = 0; index < 5; index++) {
    const year = years[index];
    console.log(year);
  }
}

function loopThroughFiveLastYears(years) {
  console.log("---loopThroughFiveLastYears---");
  for (let index = years.length - 5; index < years.length; index++) {
    const year = years[index];
    console.log(year);
  }
}
// ========== for of loop ========== //

// ========== for in loop ========== //

// ========== while loops ========== //

// ========== Filter items: array.filter(...) ========== //

// ========== Sorting: array.sort() ========== //
