// array of questions for user
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util")
const generateMarkdown = require("./utils/generateMarkdown");
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"

    },
    {
        type: "input",
        name: "repository",
        message: "What is your project repository name?"

    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"

    },
    {
        type: "input",
        name: "description",
        message: "Give a description of your project"

    }, {
        type: "input",
        name: "installation",
        message: "Please provide intructions to install your project if needed"

    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions on how to use your project"

    },
    {
        type: "input",
        name: "contribution",
        message: "Please provide how others can contribute to your project if needed"

    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']

    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return (err)
        }
        console.log("Readme file generated!")

    })
}
const writeFileAsync = util.promisify(writeToFile)

// function to initialize program
async function init() {
    try {
        const userAnswer = await inquirer.prompt(questions);
        const userInfo = await user.getUser(userAnswer)
        const markdown = generateMarkdown(userAnswer, userInfo)
        await writeFileAsync("generatedReadme.md", markdown)
    } catch (error) {
        console.log(error)
    }

}

// function call to initialize program
init();
