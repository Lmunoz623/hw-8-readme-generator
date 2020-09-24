const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user

function promptUser() {
    return inquirer.prompt([
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
            type: "selector",
            name: "license",
            message: "Select the license for your README.",
            license: [
                "GNU GPLv3",
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
            name: "questions",
            message: "What is your GitHub username"
        },
        {
            type: "input",
            name: "questions",
            message: "What is your GitHub URL?"
        },
        {
            type: "input",
            name: "questions",
            message: "What is your eamil address?"
        }
    ]);
}   

promptUser()
// function to write README file
    .then(function(data) {
        const html = generateHTML(data);
        return writeFileAsync("readme.html", data);
    })

    // function to initialize program
    async function init() {
        console.log("hi")
        try {
          const answers = await promptUser();
      
          const html = generateHTML(answers);
      
          await writeFileAsync("readme.html", data);
      
          console.log("Successfully wrote to readme.html");
        } catch(err) {
          console.log(err);
        }
      }

    // function call to initialize program
    init();

