
import inquirer from "inquirer";

let balance = 500000;
let myPin = 123;

let userPin = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter your pin",
  },
]);

if (userPin.pin === myPin) {
  let options = await inquirer.prompt([
    {
      name: "selectedOption",
      type: "list",
      message: "Select an option",
      choices: ["withdraw", "balance inquiry", "fast cash", "change pin"],
    },
  ]);

  if (options.selectedOption === "withdraw") {
    let amount = await inquirer.prompt([
      {
        name: "toldAmount",
        type: "number",
        message: "Enter the amount",
      },
    ]);
    if (amount.toldAmount > balance) {
      console.log("Insufficient balance");
    } else {
      balance -= amount.toldAmount;
      console.log(`your remaining balance is ${balance}`);
    }
  } else if (options.selectedOption === "balance inquiry") {
    console.log(balance);
  } else if (options.selectedOption === "fast cash") {
    let amountOptions = await inquirer.prompt([
      {
        name: "selectedAmount",
        type: "list",
        message: "Select an option",
        choices: [1000, 5000, 10000, 100000, 10000000, "full amount"],
      },
    ]);
    if (amountOptions.selectedAmount > balance) {
      console.log("Insufficient balance");
    } else if (amountOptions.selectedAmount === "full amount") {
      console.log(`your previous balance was ${balance}`);
      console.log("and your remaining balance is 0");
    } else {
      balance -= amountOptions.selectedAmount;
      console.log(`your remaining balance is ${balance}`);
    }
  } else if (options.selectedOption === "change pin") {
    let changedPin = await inquirer.prompt([
      {
        name: "newPin",
        type: "number",
        message: "Enter your new pin",
      },
    ]);
    myPin = changedPin.newPin;
    console.log(`your new pin is ${myPin}`);
  }
} else {
  console.log("Incorrect pin");
}