// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
// validte
  if(license === "MIT"){
   return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
}else{
  return "";
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT"){
    return `You can find information about MIT license here: https://choosealicense.com/licenses/mit/`
  }else{
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if(license === "MIT"){
    return ' [License](#license)' ;

  }else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
   
 
 # ${data.title}
 
 
  ${renderLicenseBadge(data.license)}
 
  ## Description
  ${data.description}


## Table of Content
  
  * [Installation](#installation)
  
  * [Usage](#usage\n)
  
  * ${renderLicenseSection(data.license)}

  * [Contributing](#contributing)

  * [Test](#test)

  * [Questions](#questions)
## Installation

  ${"To install the necessary dependencies, run the folloging command: \n"}
  ${data.installation}

## Usage
${data.repoUse}

## License
### This project is licensed by:  ${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}


## Contributing
${data.contribution}

## Test
### You can run a test by typing: ${data.test}  

## Questions
${"If you have questions please send email at: "}${data.contact}
  `
}

module.exports = {generateMarkdown};
