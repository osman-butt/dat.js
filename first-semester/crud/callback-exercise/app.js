"use strict";

window.addEventListener("load", initApp);

const liste = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    gender: "male",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    gender: "male",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    gender: "female",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    gender: "male",
  },
  {
    firstName: "Pansy",
    lastName: "Parkinson",
    house: "Slytherin",
    gender: "female",
  },
  {
    firstName: "Hannah",
    lastName: "Abbott",
    house: "HufflePuff",
    gender: "female",
  },
  {
    firstName: "Justin",
    lastName: "Finch-Fletchley",
    house: "HufflePuff",
    gender: "male",
  },
  {
    firstName: "Michael",
    lastName: "Corner",
    house: "Ravenclaw",
    gender: "male",
  },
  {
    firstName: "Padma",
    lastName: "Patil",
    house: "Ravenclaw",
    gender: "female",
  },
];

function initApp() {
  console.log("initApp: app.js is running 🎉");
  console.log(liste.filter(isSlytherin));
  console.log(liste.filter(notSlytherin));
}

function isSlytherin(person) {
  return person.house === "Slytherin";
}

function notSlytherin(person) {
  return person.house !== "Slytherin";
}
