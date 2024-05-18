// class BankAccount {
//     constructor (checking, savings){
//     this.checking = checking;
//     this.savings = savings;
// }
// }

// const myAcct = new BankAccount(1000, 2000)

// console.log(myAcct);

// myAcct.checking = 0

// console.log(myAcct.checking);

function BankAccount() {
  let checking = 1000;
  let savings = 2000;

  return {
    logBankAcct: function () {
      console.log("checking:", checking, "savings:", savings);
    },
  };
}

const myAcct = BankAccount();

myAcct.logBankAcct();
