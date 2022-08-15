
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const fs = require('fs');


const generateWebPage = (data) => {
    return `# Data name Manager
  ${data.nameManager}
  
  ## Data id Manager
  * ${data.idManager}
  
  ## Data email Manager
  * ${data.emailManager}
  
  ## Data Manager Office Number
  * ${data.managerOfficeNumber}
   
  `;
  };

  const generateWebPageObject = (data) => {

    const manager1 = new Manager(data.nameManager, data.idManager, data.emailManager,data.managerOfficeNumber);

    return `# Object name Manager
  ${manager1.getName()}
  
  ## Object id Manager
  * ${manager1.getId()}
  
  ## Object Email Manager
  * ${manager1.getEmail()}
  
  ## Object Number Manager
  * ${manager1.getOfficeNumber()}
   
  `;
  };

  const generateWebPageObjectReal = (data) => {

    const manager = new Manager(data.nameManager, data.idManager, data.emailManager,data.managerOfficeNumber);

    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="style.css" /> 
    </head>
    
    <body>

          <header class="header" >
              <h1> My Team</a></h1>
             <nav class="nav" > 
              </nav>
          </header>
      <div class = page-container>
          <div class ="employee">
            <div class = "wrapper-header-employee">
              <header class="header1" >
                <ul>
                    <li><h1>${manager.getName()}</h1></li>
                    <li><h1>${manager.getRole()}</h1></li>
                    <nav class="nav" > 
                    </nav>
                  </ul>
              </header>
          </div>
       
        <div class = "wrapper-list">
          <ul>
            <li><h3>ID: ${manager.getId()}</h3></li> 
            <li><h3>Email:<a href ="mailto:${manager.getEmail()}">${manager.getEmail()}</a></h3></li> 
            <li><h3>Office number: ${manager.getOfficeNumber()}</h3></li> 
          </ul>
        </div>
        </div>
    `;
  };

  module.exports = generateWebPage;
  module.exports = generateWebPageObject;
  module.exports = generateWebPageObjectReal;

