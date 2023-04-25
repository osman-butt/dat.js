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
  //   for loop
  loopThroughYears(years);
  loopThroughFiveFirstYears(years);
  loopThroughFiveLastYears(years);
  logNumbers();
  //   for of loop
  loopThroughTeachers();
  teachersOver40();
  forOfSearchTeachersByName("er");
  //   for in loop
  forInTeacher(teacher);
  //   while loop
  whileTeachersLength();
  whileTeacherIsLecturer();
  whileSearchByName("SEN");
  //   array methods - filter
  filterTeachersOver40();
  filterTeachersByName("SEN");
  filterLecturers();
  //   array methods - find
  findTeacherByAge();
  findTeacherByName("Martin Hansen");
  //   array methods - sort
  sortNames();
  sortYears();
  sortTeachersByName();
  sortTeachersByAge();
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

function logNumbers() {
  console.log("---logNumbers---");
  console.log("Log 0-9");
  for (let index = 0; index < 10; index++) {
    console.log(index);
  }
  console.log("Log 1-10");
  for (let index = 1; index < 11; index++) {
    console.log(index);
  }
  console.log("Log 10-0");
  for (let index = 10; index >= -1; index--) {
    index === -1 ? console.log("Lift off") : console.log(index);
  }
  console.log("Log even 1-19");
  for (let index = 2; index < 20; index++) {
    console.log(index);
    ++index;
  }
  console.log("Log double 1-16777216");
  for (let index = 1; index < 16777216; index++) {
    index *= 2;
    console.log(index);
  }
  console.log("Log 111-138");
  for (let index = 111; index < 138; index++) {
    console.log(index);
    index += 2;
  }
  console.log("Log 100-0 in 10 steps");
  for (let index = 100; index >= 0; index--) {
    console.log(index);
    index -= 9;
  }
}

// ========== for of loop ========== //
function loopThroughTeachers() {
  console.log("---loopThroughTeachers---");
  for (const teacher of teachers) {
    console.log(teacher);
  }
}

function teachersOver40() {
  console.log("---teachersOver40---");
  const results = [];
  for (const teacher of teachers) {
    if (teacher.age >= 40) {
      results.push(teacher);
    }
  }
  console.log(results);
}

function forOfSearchTeachersByName(searchValue) {
  console.log("---forOfSearchTeachersByName---");
  const results = [];
  for (const teacher of teachers) {
    if (teacher.name.includes(searchValue)) {
      results.push(teacher);
    }
  }
  console.log(results);
}

// ========== for in loop ========== //
function forInTeacher(obj) {
  console.log("---forInTeacher---");
  for (const key in obj) {
    console.log(key + ": " + obj[key]);
  }
}

// ========== while loops ========== //
function whileTeachersLength() {
  console.log("---whileTeachersLength---");
  let index = 0;
  while (index < teachers.length) {
    console.log(teachers[index]);
    index++;
  }
}

function whileTeacherIsLecturer() {
  console.log("---whileTeacherIsLecturer ---");
  let index = 0;
  while (index < teachers.length) {
    const teacher = teachers[index];
    if (teacher.title === "Lecturer") {
      console.log(teacher);
    }
    index++;
  }
}

function whileSearchByName(searchValue) {
  console.log("---whileSearchByName---");
  const results = [];
  let index = 0;
  while (index < teachers.length) {
    const teacher = teachers[index];
    if (teacher.name.toLowerCase().includes(searchValue.toLowerCase())) {
      results.push(teacher);
    }
    index++;
  }
  console.log(results);
}

// ========== Filter items: array.filter(...) ========== //
function filterTeachersOver40() {
  console.log("---filterTeachersOver40---");
  const results = teachers.filter(checkAge);
  console.log(results);
}
function checkAge(teacher) {
  return teacher.age >= 40;
}

function filterTeachersByName(searchValue) {
  console.log("---filterTeachersByName---");
  searchValue = searchValue.toLowerCase();
  const results = teachers.filter(checkName);
  function checkName(teacher) {
    return teacher.name.includes(searchValue);
  }
  console.log(results);
}

function filterLecturers() {
  console.log("---filterLecturers---");
  const results = teachers.filter(checkTitle);
  function checkTitle(teacher) {
    return teacher.title === "Lecturer";
  }
  console.log(results);
}

// ========== Sorting: array.find() ========== //
function findTeacherByAge() {
  console.log("---findTeacherByAge---");
  const results = teachers.find(checkAge);
  function checkAge(teacher) {
    return teacher.age === 36;
  }
  console.log(results);
}

function findTeacherByName(name) {
  console.log("---findTeacherByName---");
  const results = teachers.find(checkName);
  function checkName(teacher) {
    return teacher.name === name;
  }
  console.log(results);
}

// ========== Sorting: array.sort() ========== //
function sortNames() {
  console.log("---sortNames---");
  names.sort();
  console.log(names);
}
function sortYears() {
  console.log("---sortYears---");
  years.sort();
  console.log(years);
}

function sortTeachersByName() {
  console.log("---sortTeachersByName---");
  teachers.sort(compareName);
  function compareName(teacher1, teacher2) {
    return teacher1.name.localeCompare(teacher2.name);
  }
  console.log(teachers);
}

function sortTeachersByAge() {
  console.log("---sortTeachersByAge---");
  teachers.sort(compareAge);
  function compareAge(teacher1, teacher2) {
    return teacher1.age - teacher2.age;
  }
  console.log(teachers);
}
