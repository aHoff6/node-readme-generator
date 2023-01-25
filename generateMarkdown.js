//  Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === "none") {
    return "";
  } else if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "GPL") {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else if (license === "Apache 2.0") {
    return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  } else if (license === "MPL-2.0") {
    return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
  }
}

//  Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === "none") {
    return "";
  } else if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "GPL") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "Apache v2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "MPL-2.0") {
    return "https://opensource.org/licenses/MPL-2.0";
  }
}

//  Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (!license || license === "none") {
//     return "";
//   }
//   return `This project is licensed under the ${renderLicenseBadge(license)} license.

// Read more about license here: ${renderLicenseLink(license)}`;
// }

// TODO: structure out read me 
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ---
  ${data.description}

  ## Table of Contents
  ---
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contact](#contact)
  - [Contributions](#contributions)

  ## Installation
  ---
  \`\`\`md
  ${data.install}
  \`\`\`

  ## Usage
  ---
  ${data.usage}

  ## Contributions
  ---
  ${data.contributing}

  ## Contact Info
  ---
  My GitHub Username is :${data.ghusername}

  My Email is: ${data.email}

  ## License
  ---
  Read more about license here:
  ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
