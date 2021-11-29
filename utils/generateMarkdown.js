// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
// validte
  if(license === "MIT"){
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
}else{
  return "";
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT"){
    return `You can find information about MIT opensource here: https://opensource.org/licenses/MIT`;
  }else{
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "MIT"){
    return '- [License](#license)';

  }else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
   
  # ${data.title} 
  // license Badge 
  ${renderLicenseBadge(data.license)}

  ##Description: 
  ${"  " + data.description}
  ${data.repoUse}


  ##Table of Content
  
  - [Installation](#installation\n)
  - [Usage](#Test\n)
  - [Credits](#credits\n)


  
 ${renderLicenseLink(data.license)}
// test
  - [runTest](#test)




 ${renderLicenseSection(data.license)}
 
  `;
  
}

module.exports = {generateMarkdown};
