#!/usr/bin/env node

import program from "commander";
import inquirer from "inquirer";

import { listLatestPortfolio } from "./Portfolio/latestPortfolio"
import { TokenLatestPortfolio } from "./Portfolio/tokenPortfolio"
import { dateLatestPortfolio } from "./Portfolio/datePortfolio"
import { dateTokenPortfolio } from "./Portfolio/dateTokenPortfolio";
import { isRequired } from "./utils/validation"

// Input
const token = [
  {
    type: 'input',
    name: 'token',
    message: `Pass the Token BTC, XRP and ETH to convert USD rates :`,
    validate: isRequired
  }

]

const date = [
  {
    type: 'input',
    name: 'date',
    message: `Pass the date in this date format DD/MM/YYYY :`,
    validate: isRequired
  }

]

const datetoken = [
  ...date, ...token

]
// run programs for commands

program.command('list')
  .alias('l')
  .description('return the latest portfolio value for that token in USD')
  .action(async () => {

    console.log(await listLatestPortfolio())
  });

program.command('token')
  .alias('t')
  .description('return the token latest portfolio value in USD')
  .action(async () => {
    const input = await inquirer.prompt(token)

    console.log(await TokenLatestPortfolio(input.token))

  });

program.command('date')
  .alias('d')
  .description('return the latest portfolio value on the date in USD')
  .action(async () => {
    const input = await inquirer.prompt(date)
    console.log(await dateLatestPortfolio(input.date))

  });

program.command('datetoken')
  .alias('dt')
  .description('return the token latest portfolio value on the date in USD')
  .action(async () => {
    const input = await inquirer.prompt(datetoken)
    console.log(await dateTokenPortfolio(input.date, input.token))

  });


program.parse(process.argv);

// If no args, output help
if (!process.argv[2]) {
  program.outputHelp();
}


