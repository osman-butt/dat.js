// Constructor function
// Since it is a function it inherits from Object
function Student(firstName, lastName, height) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.height = height;

  Object.defineProperty(this, "fullName", {
    get() {
      return this.firstName + " " + this.lastName;
    },
  });
  // Kan sorteres efter toString
  this.toString = function () {
    return this.fullName;
  };
}

// New creates a new
const harry = new Student("Harry", "Potter");
const ron = new Student("Ron", "Weasley");

console.log(harry.fullName);
console.log(`Harry object values: ${harry}`);
