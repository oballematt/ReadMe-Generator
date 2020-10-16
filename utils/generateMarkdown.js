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

  let exampleMarkdown =
    `# ${userAnswer.title}
  (https://img.shields.io/github/languages/top/${userAnswer.username}/${userAnswer.repository}?style=flat&logo=appveyor) 
  

  ## Description

  ${userAnswer.description}
  
  `

  exampleMarkdown += tableOfContents

  exampleMarkdown += `
  * [License](#license)`

  if (userAnswer.installation !== "") {

    exampleMarkdown +=

      `
  ## Installation
  
  ${userAnswer.installation}
  
  `
  }

  if (userAnswer.usage !== "") {
    exampleMarkdown +=

      `
  ## Usage
  
  ${userAnswer.usage}
  
  `
  }

  if (userAnswer.contribution !== "") {
    exampleMarkdown +=
      `
  ## Contributing
  
  ${userAnswer.contribution}
  
  `

  }

  exampleMarkdown +=
    `
  ## License
  
  ${userAnswer.license}
  
  `

  let questions = 
  
  `
  ## Questions?
  
  If you have any questions, please contact me with the information below:

  Github [@${userInfo.login}](${userInfo.html_url})
  `
  if (userInfo.email !== null){
    exampleMarkdown +=
    `
    Email: ${userInfo.email}`
  }

  exampleMarkdown += questions

  return exampleMarkdown

}

module.exports = generateMarkdown;
