import fs from "fs/promises";

// 1 + 4
function constructNameParts(name) {
  const NameParts = {
    firstName: undefined,
    middleName: undefined,
    lastName: undefined,
    setFullName(name) {
      const nameArr = name.split(" ");
      const fullName = nameArr.filter(a => a.length > 0);
      if (fullName.length === 3) {
        this.firstName = fullName[0];
        this.middleName = fullName[1];
        this.lastName = fullName[2];
      } else {
        this.firstName = fullName[0];
        this.lastName = fullName[1];
      }
    },
    getFullName() {
      if (this.firstName && this.middleName && this.lastName) {
        return this.firstName + " " + this.middleName + " " + this.lastName;
      } else if (this.firstName && this.lastName) {
        return this.firstName + " " + this.lastName;
      } else {
        return "";
      }
    },
    hasMiddleName() {
      if (this.middleName) {
        return true;
      } else {
        return false;
      }
    },
  };
  if (name) {
    NameParts.setFullName(name);
  }
  return NameParts;
}

// 2
function printNameParts(NameParts) {
  console.log("Fullname:", NameParts.getFullName());
  console.log("Firstname:", NameParts.firstName);
  console.log("Middlename:", NameParts.middleName);
  console.log("Lastname:", NameParts.lastName);
  console.log("Has middlename:", NameParts.hasMiddleName());
  console.log("------------------------------------");
}

// 3 + 4
// const harry = constructNameParts("Harry James Potter");
// const ron = constructNameParts("Ronald Weasley");

// harry.setFullName("Harry James Potter");
// ron.setFullName("Ronald Weasley");
// printNameParts(harry);
// printNameParts(ron);

// 5
// const snape = constructNameParts("Severus Snape");
// const studentNames = [harry, ron, snape];
// printStudents(studentNames);

function printStudents(studentsArr) {
  studentsArr.forEach(printNameParts);
}

// 6
async function readNameParts() {
  const data = await fs.readFile("./nameparts/data.json");
  const namesArr = JSON.parse(data);
  return namesArr;
}

// 7
function convertNameParts(namesArr) {
  const namePartsArr = namesArr.map(a => constructNameParts(a.fullname));
  return namePartsArr;
}

// 8
async function main() {
  const data = await readNameParts();
  const namePartsArr = convertNameParts(data);
  printStudents(namePartsArr);
}

main();
