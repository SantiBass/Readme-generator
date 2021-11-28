// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const choices = require('inquirer/lib/objects/choices');
const generateMardown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message : "What is your GitHub user name? ",
        name : 'userName'
        // validate: (value)=> {if(value){return true}else {return 'you need a value to cntinue'}}

    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'contact',
        // choices: ['email', 'phone', 'telekinesis']
    },
    {
        type: 'input',
        message: "What is your project's name?",
        name : 'title',
      // validate: (value)=> {if(value){return true}else {return 'you need a value to cntinue'}}

    },
    {
        type: 'input',
        message :'Write a short description of you project',
        name : 'description',
        // validate: (value)=> {if(value){return true}else {return 'you need a value to cntinue'}}

    },
    {
        type: 'list',
        message : "What kind of license your project have?",
        name : 'license',
        choices: ["No license", "Mit license"] 
        // validate: (value)=> {if(value){return true}else {return 'you need a value to cntinue'}}

    },
    {
        type: 'input',
        message : "What command should  be run to install dependencies? ",
        name : 'installation'
        // validate: (value)=> {if(value){return true}else {return 'you need a value to cntinue'}}

    },
    {
        type: 'input',
        message : "What command should be run to run test? ",
        name : 'runTest'
        // validate: (value)=> {if(value){return true}else {return 'you need a value to cntinue'}}

    },
    {
        type: 'input',
        message : "What does the user need to know about using the repo? ",
        name : 'repoUse'
        // validate: (value)=> {if(value){return true}else {return 'you need a value to cntinue'}}

    },
    {
        type: 'input',
        message : "What does the user need to know about contributing to the repo? ",
        name : 'contribution'
        // validate: (value)=> {if(value){return true}else {return 'you need a value to cntinue'}}

    },

];
// inquirer.prompt(questions)
// .then(data => {
// const fileName = `${data.userName.toLowerCase().split(" ").join("")}.json`

// })

// console.log(questions)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
     fs.writeFile(fileName, data, (err) => err? console.log(err) : console.log("Success!")
     )}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
    const readmeFile = generateMardown(data);
    writeToFile("README.md", readmeFile ) 

    
    });
    

};

// Function call to initialize app
init();
