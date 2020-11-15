const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./utils/generateMarkdown');




// array of questions for user
const questions = [
    {
        type: 'input',
                name: 'github',
                message: 'What is your github username?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?'
            },
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please write a short description of your project'
            },
            {
                type: 'input',
                name: 'license',
                message: 'What kind of license should your project have?',
                choices: ['MIT', 'APACHE 2.O', 'GPL 3.0', 'BSD 3', 'None' ]
                
            },
            {
                type: 'input',
                name: 'install',
                message: 'What command should be installed to run dependencies?'
            },
            {
                type: 'input',
                name: 'test',
                message: 'What command should be run to run tests?'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What does the user need to know about using the repo?'
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'What does the user need to know about contributing to the repo?'
            },
            
        ];
        
        
        // function to initialize program
        function init() {
          inquirer
            .prompt(questions)
            .then((response) => {
              console.log(response);

              fs.writeFile("SAMPLE.md", generateReadMe(response), function (
                err
              ) {
                if (err) {
                  throw err;
                }
              });
            })
            .catch((err) => console.log(err));
        }

// function call to initialize program
init();
