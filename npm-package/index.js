#!/usr/bin/env node
"use strict";

const inquirer = require("inquirer");
const chalk = require("chalk");
const data = require("./data.json");
const {Card} = require("./card.js");

// add response color
const response = chalk.white;

const resumeOptions = {
  type: "list",
  name: "resumeOptions",
  message: "What do you want to know?",
  choices: [...Object.keys(data), "🔴 Exit"]
};

function showResume() {
  console.log(Card);
  handleResume();
}

function handleResume() {
  inquirer.prompt(resumeOptions).then(answer => {
    if (answer.resumeOptions == "Exit") return;

    const options = data[`${answer.resumeOptions}`]
    if (options) {
      if(answer.resumeOptions=="💻 Projects")
      {
        console.log(response(new inquirer.Separator()));
        options.forEach(info => {
          console.log(response(" " + info));
        });
        console.log(response(new inquirer.Separator()));
      }
      else
      {
        console.log(response(new inquirer.Separator()));
        options.forEach(info => {
          console.log(response("🔺 " + info));
        });
        console.log(response(new inquirer.Separator()));
      }
    }

    //Handling Exit

    inquirer
    .prompt({
      type: "list",
      name: "exitBack",
      message: "Do You want to go back or exit?",
      choices: ["Back", "Exit"]
    }).then(choice => {
      if (choice.exitBack == "Back") {
        handleResume();
      } else {
        console.log("Thanks for stopping by 😇");
        return;
      }
    });
  }).catch(err => console.log('Oops,', err))
}

showResume();