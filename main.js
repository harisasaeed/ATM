#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.green("\t\tWelcome To ATM\t\t"));
console.log(chalk.bgBlackBright("\t=================================t\t"));
let myBalance = 10000; //PKR
let myPin = 2468;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.italic.blueBright("Welcome To Your Account!!"));
    let operationsAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Transaction Type",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"]
        }
    ]);
    if (operationsAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your Amount",
                type: "number",
            }
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(chalk.italic.yellow("your remaining balance is : " + myBalance));
        }
        else {
            console.log(chalk.red("Sorry! your Balance is  Insufficiant"));
        }
    }
    else if (operationsAns.operation === "fast cash") {
        let fastCash = await inquirer.prompt([
            {
                name: "cash",
                type: "rawlist",
                message: "please select Anyone option:",
                choices: ["500", "1000", "3000", "5000"]
            }
        ]);
        if (fastCash.cash <= myBalance) {
            myBalance -= fastCash.cash;
            console.log(chalk.yellow(`your remaining balance is : ${myBalance}`));
        }
    }
    else if (operationsAns.operation === "check balance")
        console.log(chalk.italic.yellow("your current balance is : " + myBalance));
    console.log(chalk.underline.blueBright("\t\tThankYou For Using ATM\t\t"));
}
else {
    console.log(chalk.underline.red("\t\tIncorrect Pin Number\t\t"));
}
