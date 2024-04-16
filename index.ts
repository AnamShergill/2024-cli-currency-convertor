#! /usr/bin/env node

import inquirer from "inquirer"; 
import chalk from "chalk";

console.log(chalk.cyanBright.bold("\n \t 'Welcome to Currency-Convertor Application' \n"));

//Define the list of currencies and there exchange rate

const exchange_rate : any= {

      "USD": 1,
      "PKR":277.95, 
      "INR":83.61,
      "EUR":0.94,
      "AED":3.67,
      "CAD":1.38,
      "IQD":1310.00,
      "MYR":4.77,
      "CLP":964.16, 
      "NOK":10.93
};

let user_select = await inquirer.prompt([ 
        { 
          name: "from_currency",
          type: "list",
          message: chalk.red("\n Please select the currency to convert from:\n"),
          choices: ["USD","PKR","INR","EUR","AED","CAD","IQD","MYR","CLP","NOK"]

        },

        {
          name: "to_currency",
          type: "list",
          message: chalk.magentaBright("\n Please select the currency to convert into: \n"),
          choices:["USD","PKR","INR","EUR","AED","CAD","IQD","MYR","CLP","NOK"]

        },

        {
            name: "amount",
            input:"number",
            message: chalk.greenBright("\n Enter the amount you want to convert:\n")
        }
]);

// Curenecy conversion by using formula

let fromAmount = exchange_rate[user_select.from_currency];
let toAmount = exchange_rate[user_select.to_currency];
let amount = user_select.amount

let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;

// Display the converted amount to user

console.log(chalk.yellowBright(`Converted Amount = ${chalk.bgBlueBright.bold(convertedAmount.toFixed(2))}`));