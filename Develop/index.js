const inquirer = require("inquirer");
const fs = require("fs");


// array of questions for user

inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your README?"
        },
        {
            type: "input",
            name: "description",
            message: "Write a short description of your README."
        },
        {
            type: "input",
            name: "contents",
            message: "What information would you like to include in your Table of Contents?"
        },
        {
            type: "input",
            name: "installation",
            message: "What are the instructions for installation?"
        },
        {
            type: "input",
            name: "usage",
            message: "What is the usage information?"
        },
        {
            type: "checkbox",
            name: "license",
            message: "Select the license for your README.",
            choices: [
                "GNU GPLv3 License",
                "MIT License",
                "ISC License"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "What are the contribution guidelines?"
        },
        {
            type: "input",
            name: "tests",
            message: "What are the instructions for testing?"
        },
        {
            type: "input",
            name: "questions1",
            message: "What is your GitHub username"
        },
        {
            type: "input",
            name: "questions2",
            message: "What is your GitHub URL?"
        },
        {
            type: "input",
            name: "questions3",
            message: "What is your eamil address?"
        }
    ]).then(response => {
        // function to write README file
        fs.writeToFile("README.md", JSON.stringify(response, null, '\t'), function(err) {

            if (err) {
              return console.log(err);
            }
        
            console.log("Success!");
        
          });
    })



// function to initialize program
function init() {

}

// function call to initialize program
init();
