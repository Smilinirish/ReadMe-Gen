const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utilities/generateMarkdown')
const questions = [
    'Project Title?\n',
    `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?\n`,
'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.\n',
'Provide instructions and examples for use\n',
`List your collaborators, if any, with links to their GitHub profiles.
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
If you followed tutorials, include links to those here as well.\n`,
['MIT License','GNU AGPLv3','GNU GPLv3','GNU LGPLv3','Mozilla Public License Version 2.0',
'Apache License 2.0','Boost Software License 1.0','The Unlicense'
],
'Go the extra mile and write tests for your application. Then provide examples on how to run them here.\n','GitHub User Name\n','Email address\n'];
function writeToFile(data) {
    fs.writeFile('README.md',generateMarkdown(data),(err) => err ? console.log(err):console.log("README.md sucessfully created"))
}
function init(){
    inquirer
    .prompt(
        [
            {
                type:'input',
                message:questions[0],
                name:'title',
            },
            {
                type:'input',
                message:questions[1],
                name:'description',
            },
            {
                type:'input',
                message:questions[2],
                name:'instal',
            },
            {
                type:'input',
                message:questions[3],
                name:'usage',
            },
            {
                type:'input',
                message:questions[4],
                name:'credits',
            },
            {
                type:'list',
                name:'license',
                message:'select license type',
                choices:questions[5],
            },
            {
                type:'input',
                message:questions[6],
                name:'test',
            },
            {
                type:'input',
                message:questions[7],
                name:'github',
            },
            {
                type:'input',
                message:questions[8],
                name:'email'
            }
        ]
    ).then((data) => writeToFile(data))

}
init();