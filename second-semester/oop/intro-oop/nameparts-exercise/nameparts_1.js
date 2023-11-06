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

function main() {
  console.log("Initial value of fullname:", NameParts.getFullName());
  const name = " Harry  James   Potter  ";
  console.log("Setting name:", name);
  NameParts.setFullName(name);
  console.log("Fullname:", NameParts.getFullName());
  console.log("Has middle name:", NameParts.hasMiddleName());
  console.log("Firstname:", NameParts.firstName);
  console.log("Middlename:", NameParts.middleName);
  console.log("Lastname:", NameParts.lastName);
}

main();
