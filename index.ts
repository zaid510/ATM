import inquirer from "inquirer";

let mypin = 1200;
let myBalance = 100000;

const ans = await inquirer.prompt([
  {
    type: "number",
    name: "userPin",
    message: "Please Enter your PIN Code ",
  },
]);
if (ans.userPin == mypin) {
  console.log("Your Pin is correct");
  const userMethod = await inquirer.prompt([
    {
      name: "usermethod",
      type: "list",
      message: "Kindly, Enter your method:",
      choices: ["Withdraw", "Current Balance", "Fast Cash"],
    }
  ]);
  if (userMethod.usermethod === "Withdraw") {
    const amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Please enter your Amount",
      }
    ]);
    if (amountAns.amount > myBalance) {
      console.log("Unsufficent Balance");
    } else {
      myBalance = myBalance - amountAns.amount;
      console.log(`Your Remaing amount is ${myBalance}`);
    }
  } else if (userMethod.usermethod === "Current Balance") {
    console.log(`Your Balance amount is ${myBalance}`);
  } else if (userMethod.usermethod === "Fast Cash") {
    const fastans = await inquirer.prompt([
      {
        name: "fast",
        type: "list",
        Message: " Please select your cash Amount ",
        choices: [100, 500, 1000, 5000, 1000],
      }
    ]);
    myBalance = myBalance - fastans.fast;
    console.log(`Your Remaing amount is ${myBalance}`);
  }
} else {
  console.log("your PIN is incorrect Please try again");
};