

// WHEN I enter my project title
// THEN this is displayed as the title of the README


// WHEN I enter a description, 
// installation instructions, 
// usage information, 
// contribution guidelines, 
// and test instructions


// WHEN I choose a license for my application from a list of options


// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under


// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile


// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions


// WHEN I click on the links in the Table of Contents


// THEN I am taken to the corresponding section of the README



const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'projectTitle',
    },
    {
      type: 'input',
      message: 'Tell me Details about your Project',
      name: 'description',
    },
    {
        type: 'input',
        message: 'Tell me Installation Instruction',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Tell me Details about Contibution Guidelines',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Tell me How to Test your Application',
        name: 'test',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please selecet Your application licence',
        choices: ['Distributed under the MIT License.', 'Distributed under the Apache License 2.0.', 'Distributed under the GNU General Public License v3.0.']
      },
    {
        type: 'input',
        message: 'Please Enter your Github UserName',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Please Enter your contact E-mail',
        name: 'e-mail',
    },
  ])
  .then((data) => {

    fs.writeFileSync('README.md', JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });


//   fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
//   // Ternary operator takes in a condition followed by a question mark (?)
//   // then an expression to execute if the condition is truthy followed by a colon (:)
//   // and finally the expression to execute if the condition is falsy.
//   // This operator is frequently used as a shortcut for the if statement.
//   err ? console.error(err) : console.log('Commit logged!')
// );