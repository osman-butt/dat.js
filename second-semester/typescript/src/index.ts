let number: number = 5;
console.log(number);

function render(document: string): string {
  return document;
}

let numbers: number[] = [1, 2];
numbers.forEach(num => console.log(num / 2));

let user: [number, string] = [1, "steve"];

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let go: Direction = Direction.Right;
console.log(go);

// noImplicitReturns: false in config
// function calcTax(income: number): number | undefined {
//   if (income > 500_000) {
//     // If error allow unreachableCode = false in config
//     let tax = income * 0.6;
//     return tax;
//   }
// }

// Optional values
function calcTax(income: number, taxYear: number = 2022): number {
  console.log(`Calc tax for ${taxYear}`);
  const tax = income * 0.4;
  return tax;
}

function sum(a: number, b: number): number {
  return a + b;
}

// Objects
const employee: {
  readonly id: number;
  name: string;
  printName: () => void;
} = {
  id: 1,
  name: "Steve",
  printName: function () {
    console.log(this.name);
  },
};

// id is read-only, so this won't work
// employee.id =2 ;

type Employee = {
  readonly id: number;
  name: string;
  printName: () => void;
};

const employee2: Employee = {
  id: 2,
  name: "Steve",
  printName: function () {
    console.log(this.name);
  },
};

function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "string") {
    return parseInt(weight) * 2.2;
  } else {
    return weight / 0.45;
  }
}

kgToLbs(10);
kgToLbs("10");

type Draggable = {
  drag: () => void;
};

type Dropable = {
  drop: () => void;
};

type Resizeable = {
  resize: () => void;
};

// Combining types
type UIWidget = Draggable & Dropable & Resizeable;

const uiWidget: UIWidget = {
  drag: () => {
    console.log("Drag");
  },
  drop: () => {
    console.log("Drop");
  },
  resize: () => {
    console.log("Resize");
  },
};

uiWidget.drag();
uiWidget.drop();
uiWidget.resize();

type Quantity = 50 | 100 | 200;

// Will not works
// const q: Quantity = 20;

type Direction2 = "Up" | "Down" | "Left" | "Right";
const d: Direction2 = "Up";

type Customer = {
  birthDate: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  console.log(`Fetching cust with id ${id}`);

  return { birthDate: new Date() };
}

const customer = getCustomer(1);
console.log(customer?.birthDate);

// Type assertion
// let phone: HTMLElement | null = document.getElementById("phone");
// let phone = document.getElementById("phone") as HTMLInputElement;
// compiler tells it can be null, but we know it can only be of HTMLInputElement
// phone.click();

let input = {} as HTMLInputElement; // No need to initalize with HTMLInputElement properties

// function doSomething(document: any /*unknown Gives an error*/) {
function doSomething(
  document: unknown /*unknown Gives an error -> Forces us to do typechecking*/
) {
  // Narrowing
  if (typeof document === "string") console.log(document.toUpperCase());
}

// function processEvents(): never {
//   while (true) {
//     console.log("processing");
//   }
// }

// processEvents();

// Using never -> We get notified of unreachable code
function reject(reason: string): never {
  throw new Error(reason);
}
// reject("Something went wrong");
// console.log("Done");

// CLASSES
// public, private, readonly, protected

class Account {
  constructor(
    private readonly id: number,
    public owner: string,
    private balance: number
  ) {}

  getBalance(): number {
    console.log(`Account id ${this.id}`);

    return this.balance;
  }
}

let account2 = new Account(1, "Steve", 100);
// account2.id;
