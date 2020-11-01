const inquirer = require("inquirer");
const orm = require("./lib/orm");

const homeQuestion = {
    message: "What would you like to do?",
    name: "choice",
    type: "list",
    choices: ["Add a department.", "Add a role.", "Add an employee.", "View a department.", "View a role.", "View an employee.", "Update an employee's role.", "Quit."]
};

async function init() {
    const choices = [];
    while (true) {
        let {choice} = await inquirer.prompt(homeQuestion);
        choices.push(choice);
        if (choice === "Add a department.") {

        } else if (choice === "Add a role.") {

        } else if (choice === "Add an employee.") {

        } else if (choice === "View a department.") {

        } else if (choice === "View a role.") {

        } else if (choice === "View an employee.") {

        } else if (choice === "Update an employee's role.") {

        } else break;
    }
    console.log(choices);
}
init();
const questions = [
    {
        message: "What would you like to do?",
        name: "choice",
        type: "list",
        choices: ["Add a department", "Add a role", "Add an employee", "View a department", "View a role", "View an employee", "Update an employee's role", "Quit"]
    },
    {
        message: "Please describe your project.",
        name: "bio",
        type: "text"
    },
    {
        message: "Please give instructions for installation.",
        name: "install",
        input: "text",
        default: "none"
    },
    {
        message: "Please give instructions on how to use your project.",
        name: "usage",
        input: "text",
    },
    {
        message: "What is your GitHub username?",
        name: "gitUser",
        type: "text"
    },
    {
        message: "What is your email address?",
        name: "email",
        type: "text"
    },
    {
        message: "Please give some guidelines for contributors.",
        name: "contribution",
        type: "text"
    },
    {
        message: "Please give instructions for how to test your project.",
        name: "test",
        type: "text"
    },
    {
        message: "Please select an open-source license for your project.",
        name: "license",
        type: "list",
        choices: ['MIT', 'Apache-2.0', 'GPL v3', 'GPL v2', 'BSD 3-Clause', 'BSD 2-Clause', 'LGPL v3']
    },
];
