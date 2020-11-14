const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');




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
                name: 'description',
                message: 'What kind of license should your project have?',
                choices: ['MIT', 'APACHE 2.O', 'GPL 3.0', 'BSD 3', 'None' ]
                
            },
            {
                type: 'input',
                name: 'dependencies',
                message: 'What command should be installed to run dependencies?'
            },
            {
                type: 'input',
                name: 'tests',
                message: 'What command should be run to run tests?'
            },
            {
                type: 'input',
                name: 'repo',
                message: 'What does the user need to know about running the repo?'
            },
            
        ];
        
        inquirer
            .prompt(questions)
        
        // function to write README file
        function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
