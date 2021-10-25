// TODO: Create a function that returns a license badge based on which license is passed in

const { fstat } = require("fs");

// If there is no license, return an empty string
function renderLicenseBadge(licence) {
    if(licence === 'MIT License'){
        return "![APM](https://img.shields.io/badge/license-MIT-blue)";
    }
    else if(licence === 'GNU AGPLv3'){
        return "![APM](https://img.shields.io/badge/license-GNU%20AGPLv3-blue)"
    }
    else if( licence === 'GNU GPLv3'){
        return "![AMP](https://img.shields.io/badge/license-GNU%20GPLv3-brightgreen)"
    }
    else if(licence === 'GNU LGPLv3'){
        return "![AMP](https://img.shields.io/badge/license-GNU%20LGPLv3-brightgreen)"
    }
    else if(licence === 'Mozilla Public License Version 2.0'){
        return "![AMP](https://img.shields.io/badge/license-Mozilla%20Public%20License%20Version%202.0-yellow)"
    }
    else if(licence === 'Apache License 2.0'){
        return "![AMP](https://img.shields.io/badge/license-Apache%202-blue)"
    }
    else if(licence === 'Boost Software License 1.0'){
        return "![AMP](https://img.shields.io/badge/license-Boost%20Software%20License%201.0-orange)"
    }
    else if(licence === 'The Unlicense'){
        return "![AMP](https://img.shields.io/badge/license-The%20Unlicense-lightgrey)"
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    fs.writefile('LICENSE.txt',)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    renderLicenseBadge(licence)
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title,description,instal,usage,credits,licence,test}) {

  return `# ${title}\n
## Description
${description}\n
## Installation 
${instal}\n
## Usage
${usage}\n
## Credits
${credits}\n
## License
${renderLicenseBadge(licence)}\n
## Test
${test}\n
`;
}

module.exports = generateMarkdown;




