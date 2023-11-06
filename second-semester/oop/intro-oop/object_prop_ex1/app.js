// Exercise 1: https://race.notion.site/Object-properties-exercises-17b32f4e53044f9089c9623f857afcba
// Initial code provided in exercise
function constructNameParts(fullName) {
  const NameParts = {
    firstName: undefined,
    middleName: undefined,
    lastName: undefined,
    _age: 0,
    set fullName(fullName) {
      const names = fullName.split(" ");

      if (names.length === 3) {
        this.firstName = names[0];
        this.middleName = names[1];
        this.lastName = names[2];
      } else {
        this.firstName = names[0];
        this.lastName = names[1];
      }
    },
    get fullName() {
      if (!this.middleName) {
        return `${this.firstName} ${this.lastName}`;
      } else {
        return `${this.firstName} ${this.middleName} ${this.lastName}`;
      }
    },
    hasMiddleName: function () {
      if (this.middleName) {
        return true;
      } else {
        return false;
      }
    },

    set age(age) {
      this._age = age;
    },

    get age() {
      return this._age;
    },

    ageCheck() {
      if (this.age >= 18) {
        console.log(`The student is ${this.age} and is old enough!`);
      } else {
        console.log(`The student is ${this.age} and not old enough!`);
      }
    },
  };

  NameParts.fullName = fullName;

  return NameParts;
}

const person = constructNameParts("Hans Peter");
person.age = 12;
console.log(person.ageCheck());

// With .seal, we cannot add new properties to the object,
// but we are able to change the existing one
Object.seal(person);

// person.studentType = "Under graduate";
person.age = 18;
console.log(person.age);

Object.freeze(person);
// person.studentType = "Under graduate";
// person.age = 20;
console.log(person.age);

const someStudent = constructNameParts("Harry James Potter");
// Changing the method such that it doen't appear in a for in loop
Object.defineProperty(someStudent, "hasMiddleName", { enumerable: false });
Object.defineProperty(someStudent, "ageCheck", { enumerable: false });
Object.defineProperty(someStudent, "_age", { enumerable: false });

for (const key in someStudent) {
  console.log(`${key}: ${someStudent[key]}`);
}
