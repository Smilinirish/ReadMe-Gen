function renderLicenseBadge(license) {
    if(license === 'MIT License'){
        return "![APM](https://img.shields.io/badge/license-MIT-blue)";
    }
    else if(license === 'GNU AGPLv3'){
        return "![APM](https://img.shields.io/badge/license-GNU%20AGPLv3-blue)"
    }
    else if( license === 'GNU GPLv3'){
        return "![AMP](https://img.shields.io/badge/license-GNU%20GPLv3-brightgreen)"
    }
    else if(license === 'GNU LGPLv3'){
        return "![AMP](https://img.shields.io/badge/license-GNU%20LGPLv3-brightgreen)"
    }
    else if(license === 'Mozilla Public License Version 2.0'){
        return "![AMP](https://img.shields.io/badge/license-Mozilla%20Public%20License%20Version%202.0-yellow)"
    }
    else if(license === 'Apache License 2.0'){
        return "![AMP](https://img.shields.io/badge/license-Apache%202-blue)"
    }
    else if(license === 'Boost Software License 1.0'){
        return "![AMP](https://img.shields.io/badge/license-Boost%20Software%20License%201.0-orange)"
    }
    else if(license === 'The Unlicense'){
        return "![AMP](https://img.shields.io/badge/license-The%20Unlicense-lightgrey)"
    }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
}
function generateMarkdown({title,description,instal,usage,credits,license,test,github,email}) {    return `# ${title}\n
  ${renderLicenseBadge(license)}\n
  ## Table of Contents
> - [Description](#description)
> - [Installation](#installation )
> - [Usage](#usage)
> - [Credits](#credits)
> - [License](#license)
> - [Test](#test)
> - [Questions](#questions)

## Description
${description}\n
## Installation 
${instal}\n
## Usage
${usage}\n
## Credits
${credits}\n
## License

## Test
${test}\n
## Questions
GitHub: [www.github.com/${github}](https://www.github.com/${github})\n
Email: ${email}
`;
}
module.exports = generateMarkdown;