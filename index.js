// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "ghusername",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is your projects name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project.",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "GPL", "Apache 2.0", "MPL-2.0", "none"],
    default: "MIT",
  },
  {
    type: "input",
    name: "install",
    message: "What command should be run to install dependencies?",
  },
  {
    type: "input",
    name: "testcommand",
    message: "What command should be run to run tests?",
  },
  {
    type: "input",
    name: "whattoknow",
    message: "What does user need to know when using repo?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What does user need to know about contributing to repo?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Your README.md file has been generated!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README-TEST.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
