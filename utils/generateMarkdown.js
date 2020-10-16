// function to generate markdown for README
function generateMarkdown(userAnswer, userInfo) {
  let tableOfContents = `## Table of Contents`

  if (userAnswer.installation !== "") {
    tableOfContents += `
  * [Installation](#installation)`
  }

  if (userAnswer.usage !== "") {
    tableOfContents += `
  * [Usage](#usage)`
  }

  if (userAnswer.contribution !== "") {
    tableOfContents += `
  * [Contributing](#contribution)`
  }

}

module.exports = generateMarkdown;
