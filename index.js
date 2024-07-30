"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var mypin = 1200;
var myBalance = 100000;
var ans = await inquirer_1.default.prompt([
    {
        type: "number",
        name: "userPin",
        message: chalk_1.default.green("Please Enter your PIN Code "),
    },
]);
if (ans.userPin == mypin) {
    console.log(chalk_1.default.green("Your Pin is correct"));
    var userMethod = await inquirer_1.default.prompt([
        {
            name: "usermethod",
            type: "list",
            message: "Kindly, Enter your method:",
            choices: ["Withdraw", "Current Balance", "Fast Cash"],
        }
    ]);
    if (userMethod.usermethod === "Withdraw") {
        var amountAns = await inquirer_1.default.prompt([
            {
                name: "amount",
                type: "number",
                message: "Please enter your Amount ",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log(chalk_1.default.red("Unsufficent Balance"));
        }
        else {
            myBalance = myBalance - amountAns.amount;
            console.log(chalk_1.default.greenBright(Your, Remaing, amount, is, $, { myBalance: myBalance }));
        }
    }
    else if (userMethod.usermethod === "Current Balance") {
        console.log(chalk_1.default.redBright(Your, Balance, amount, is, $, { myBalance: myBalance }));
    }
    else if (userMethod.usermethod === "Fast Cash") {
        var fastans = await inquirer_1.default.prompt([
            {
                name: "fast",
                type: "list",
                Message: " Please select your cash Amount ",
                choices: [100, 500, 1000, 5000, 1000],
            }
        ]);
        myBalance = myBalance - fastans.fast;
        console.log(chalk_1.default.greenBright(Your, Remaing, amount, is, $, { myBalance: myBalance }));
    }
}
else {
    console.log(chalk_1.default.red("your PIN is incorrect Please try again"));
}
;
