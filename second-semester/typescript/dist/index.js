"use strict";
let number = 5;
console.log(number);
function render(document) {
    return document;
}
let numbers = [1, 2];
numbers.forEach(num => console.log(num / 2));
let user = [1, "steve"];
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let go = Direction.Right;
console.log(go);
function calcTax(income, taxYear = 2022) {
    console.log(`Calc tax for ${taxYear}`);
    const tax = income * 0.4;
    return tax;
}
function sum(a, b) {
    return a + b;
}
const employee = {
    id: 1,
    name: "Steve",
    printName: function () {
        console.log(this.name);
    },
};
const employee2 = {
    id: 2,
    name: "Steve",
    printName: function () {
        console.log(this.name);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "string") {
        return parseInt(weight) * 2.2;
    }
    else {
        return weight / 0.45;
    }
}
kgToLbs(10);
kgToLbs("10");
const uiWidget = {
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
const d = "Up";
function getCustomer(id) {
    console.log(`Fetching cust with id ${id}`);
    return { birthDate: new Date() };
}
const customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthDate);
let input = {};
function doSomething(document) {
    if (typeof document === "string")
        console.log(document.toUpperCase());
}
function reject(reason) {
    throw new Error(reason);
}
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    getBalance() {
        console.log(`Account id ${this.id}`);
        return this.balance;
    }
}
let account2 = new Account(1, "Steve", 100);
//# sourceMappingURL=index.js.map