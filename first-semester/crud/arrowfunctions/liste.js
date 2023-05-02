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
    house: "Hufflepuff",
    gender: "female",
  },
  {
    firstName: "Justin",
    lastName: "Finch-Fletchley",
    house: "Hufflepuff",
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

// Boolean expression & if-statements
const student = liste[0];
const isGryffindor = student.house.toLowerCase() === "gryffindor";
console.log(isGryffindor);
const student1 = liste[3];
const isNotGryffindor = student1.house.toUpperCase() !== "GRYFFINDOR";
console.log(isNotGryffindor);
const student2 = liste[5];
const lastName = "Weasley";
const hasLastName =
  lastName.toLowerCase().trim() === student2.lastName.toLowerCase();
console.log(hasLastName);

// FILTER
function filterByHouse(student, house) {
  return student.filter(matchHouse);

  function matchHouse(student) {
    return student.house === house;
  }
}

console.log(filterByHouse(liste, "Gryffindor"));

// Arrow functions
function filterByHouseArrow(student, house) {
  return student.filter(student => student.house === house);
}

console.log(filterByHouseArrow(liste, "Hufflepuff"));

function sortList(sortByString) {
  if (sortByString === "firstName") {
    return liste.sort((student1, student2) => {
      return student1.firstName.localeCompare(student2.firstName);
    });
  } else if (sortByString === "lastName") {
    return liste.sort((student1, student2) => {
      return student1.lastName.localeCompare(student2.lastName);
    });
  }
}

console.log(sortList("firstName"));
