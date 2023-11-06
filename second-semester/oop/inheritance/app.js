// node: Nodes can be connected with other nodes

// element: Ineherits from node

// HTML element: Inherits from element

// HTML SELECT: Inherits from HTML Element

// Document fragment

/*
getPropertyOf


Ikke brug __proto__


instance (et konkret object, som er blevet lavet)
- methods
- properties

static (fælles for alle)
- methods
- properties

*/

// Factory function
function constructStudent(firstName, lastName) {
  const Student = {
    firstName: firstName,
    lastName: lastName,
    get fullName() {
      return this.firstName + " " + this.lastName;
    },
  };
  return Student;
}

const harry = constructStudent("Harry", "Potter");
const ron = constructStudent("Ron", "Weasley");

Object.defineProperty(Object.getPrototypeOf(harry), "house", {
  value: "Gryffindor",
  configurable: true,
  enumerable: true,
});

console.log(harry.house);
harry.house = "Another";
console.log(harry.house); // Outputs the same, since harrys prop is not writeable

// Copy into console in browser to see the protoype

for (const prop in harry) {
  console.log(prop);
}
