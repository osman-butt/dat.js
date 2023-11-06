// class Account {
//   #owner;
//   #balance;
//   constructor(owner) {
//     this.#owner = owner;
//     this.#balance = 0;
//   }
//   deposit(amount) {
//     this.#balance += amount;
//   }
//   withdraw(amount) {
//     if (this.#balance - amount >= 0) {
//       this.#balance -= amount;
//     } else {
//       throw new Error(
//         `Insufficient funds. Max allowed withdrawel is ${this.#balance}`
//       );
//     }
//   }
//   get balance() {
//     return this.#balance;
//   }
// }

// const acc = new Account("Osman");
// console.log("Start balance:", acc.balance);
// console.log(acc.deposit(50));
// console.log("Balance:", acc.balance);
// console.log(acc.withdraw(10));
// console.log("Balance:", acc.balance);

// class CheckeAccount extends Account {
//   #credit;
//   constructor(name, credit) {
//     super();
//   }
//   withdraw(value) {
//     if (this.#credit < this.balance - value) {
//       this.balance -= value;
//     } else {
//       throw new Error(
//         `Insufficient funds. Max allowed withdrawel is ${
//           this.balance + this.#credit
//         }`
//       );
//     }
//   }
// }

// const checkingAcc = new CheckeAccount("osman", 10);
// console.log(checkingAcc);

// SOLUTION
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (this.balance < amount) {
      throw new Error("Insufficient ammount");
    } else {
      this.balance += amount;
    }
  }
}

const account = new BankAccount("Osman", 1000);
account.withdraw(900);

class CheckingAccount extends BankAccount {
  constructor(owner, balance, overdraftLimit) {
    super(owner, balance);
    this.overdraftLimit = overdraftLimit;
  }
  withdraw(amount) {
    if (amount > this.balance + this.overdraftLimit) {
      throw new Error("Insufficient ammount");
    } else {
      this.balance -= amount;
    }
  }
}

const checkAcc = new CheckingAccount("Osman", 1000, 500);
checkAcc.withdraw(1300);
checkAcc.withdraw(100);
checkAcc.withdraw(100);
console.log(checkAcc.balance);

class SavingsAccount extends BankAccount {
  constructor(owner, balance, interestRate) {
    super(owner, balance);
    this.interestRate = interestRate;
  }
  addInterest() {
    const interest = (this.balance * this.interestRate) / 100;
    this.balance += interest;
  }
}

const savAcc = new SavingsAccount("Osman", 100, 2);
console.log(savAcc);
savAcc.addInterest();
console.log(savAcc);
