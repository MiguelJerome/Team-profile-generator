const fs = require('fs');

const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateWebPageObject = require('./src/web-page-template');
const generateWebPageObjectEngineer = require('./src/web-page-template');
const generateWebPage = require('./src/web-page-template');
const generateWebPageObjectReal = require('./src/web-page-template');



// TODO: Create a function to initialize app
function init() {

    promptManager("prompt manager")
    .then(portfolioData => {
        writeFile2(generateWebPage(portfolioData));
        return generateWebPage(portfolioData);
      })
      .then(promptMenu);
      }
    
    const promptManager = portfolioData => {
        console.log(`
      =================
      Add a Manager to the team
      =================
      `);
      
        // If there's no 'projects' array property, create one
        if (!portfolioData.projects) {
          portfolioData.projects = [];
        }
        
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'nameManager',
            message: 'What is the manager name?',
            validate: nameManager => {
                if (nameManager) {
                  return true;
                } else {
                  console.log('Please enter the manager name!');
                  return false;
                }
              }
          },
          {
            type: 'input',
            name: 'idManager',
            message: 'What is the id manager?',
            validate: idManager => {
                if (idManager) {
                  return true;
                } else {
                  console.log('Please enter the id manager!');
                  return false;
                }
              }
          },
          {
            type: 'input',
            name: 'emailManager',
            message: 'What is the email manager?',
            validate: emailManager => {
                if (emailManager) {
                  return true;
                } else {
                  console.log('Please enter the email manager!');
                  return false;
                }
              }
          },
          {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is the office number?',
            validate: managerOfficeNumber => {
                if (managerOfficeNumber) {
                  return true;
                } else {
                  console.log('Please enter the office number!');
                  return false;
                }
              }
          }
        ])
        
    };

    const promptMenu = portfolioData1 => {
        console.log(`
      =================
      Choose your team members
      =================
      `);
      
        // If there's no 'projects' array property, create one
        if (!portfolioData1.projects) {
          portfolioData1.projects = [];
        }
        
    return inquirer
    .prompt(
        {
            type: 'list',
            name: 'menuTypeEmployee',
            choices: ['engineer', 'intern', 'finish builiding my team'],
            message: 'What is the type of employee you want to have in your team',
            validate: menuTypeEmployee => {
                if (menuTypeEmployee) {
                  return true;
                } else {
                  console.log('Please enter the type of employee you want to have in your team!');
                  return false;
                }
              }
        })
          .then(({ menuTypeEmployee }) => {
            if( menuTypeEmployee === 'engineer')
            {
                console.log('Choose engineer');
                
               promptEngineer("Engineer");
            }
            else if( menuTypeEmployee === 'intern')
            {
                console.log('Choose intern');
                promptIntern("Intern");
            }
            else if( menuTypeEmployee === 'finish building my team')
            {
                endAppendingHtmlText();
                console.log('finish building my teams');
                return false;
            }
        });
        
    };

    const promptEngineer = portfolioData2 => {

        // tempory answer container
        let answerNameEngineer = 0;
        let answerIdEngineer = 0;
        let answerEmailEngineer = 0;
      
        console.log(`
      =================
      Add a New Engineer
      =================
      `);
      
        // If there's no 'projects' array property, create one
        if (!portfolioData2.projects) {
          portfolioData2.projects = [];
        }
        
    return inquirer
            .prompt([
                    {
                        type: 'input',
                        name: 'nameEngineer',
                        message: 'What is the engineer name',
                        validate: nameEngineer => {
                            if (nameEngineer) {
                                answerNameEngineer = nameEngineer;                      
                              return true;
                            } else {
                              console.log('Please enter the engineer name!');
                              return false;
                            }
                          }
                      },
                      {
                          type: 'input',
                          name: 'idEngineer',
                          message: 'What is the id Engineer?',
                          validate: idEngineer => {
                              if (idEngineer) {
                                answerIdEngineer =  idEngineer;
                                return true;
                              } else {
                                console.log('Please enter the id Engineer!');
                                return false;
                              }
                            }
                        },
                        {
                          type: 'input',
                          name: 'emailEngineer',
                          message: 'What is the email engineer?',
                          validate: emailEngineer => {
                              if (emailEngineer) {
                                answerEmailEngineer = emailEngineer;
                                return true;
                              } else {
                                console.log('Please enter the email engineer!');
                                return false;
                              }
                            }
                        },
                      {
                        type: 'input',
                        name: 'gitHubUsernameEngineer',
                        message: 'What is the engineer GitHub username?',
                        validate: gitHubUsernameEngineer => {
                            if (gitHubUsernameEngineer) {
                                const engineer = new Engineer(answerNameEngineer, answerIdEngineer, answerEmailEngineer, gitHubUsernameEngineer);
                               appendEngineerToHtmlText(engineer);
                              return true;
                            } else {
                              console.log('Please enter the engineer GitHub username!');
                              return false;
                            }
                          }
                      }
            ])
             .then ( promptMenu);       
    }


    const promptIntern = portfolioData3 => {

        // tempory answer container
        let answerNameIntern = 0;
        let answerIdIntern = 0;
        let answerEmailIntern = 0;
      
        console.log(`
      =================
      Add a New Intern
      =================
      `);
      
        // If there's no 'projects' array property, create one
        if (!portfolioData3.projects) {
          portfolioData3.projects = [];
        }
        
    return inquirer
            .prompt([
                    {
                        type: 'input',
                        name: 'nameIntern',
                        message: 'What is the intern name',
                        validate: nameIntern => {
                            if (nameIntern) {
                                answerNameIntern = nameIntern;                      
                              return true;
                            } else {
                              console.log('Please enter the intern name!');
                              return false;
                            }
                          }
                      },
                      {
                          type: 'input',
                          name: 'idIntern',
                          message: 'What is the id intern?',
                          validate: idIntern => {
                              if (idIntern) {
                                answerIdIntern =  idIntern;
                                return true;
                              } else {
                                console.log('Please enter the id intern!');
                                return false;
                              }
                            }
                        },
                        {
                          type: 'input',
                          name: 'emailIntern',
                          message: 'What is the email Intern?',
                          validate: emailIntern => {
                              if (emailIntern) {
                                answerEmailIntern = emailIntern;
                                return true;
                              } else {
                                console.log('Please enter the email intern!');
                                return false;
                              }
                            }
                        },
                      {
                        type: 'input',
                        name: 'schoolIntern',
                        message: 'What is the intern school?',
                        validate: schoolIntern => {
                            if (schoolIntern) {
                                const intern = new Intern(answerNameIntern,answerIdIntern, answerEmailIntern, schoolIntern);
                               appendInternToHtmlText(intern);
                              return true;
                            } else {
                              console.log('Please enter the intern school!');
                              return false;
                            }
                          }
                      }
            ])
             .then ( promptMenu);       
    }

// writing files
const writeFile2 = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

const endAppendingHtmlText = function()
{
    const content = `</div>
    
    </body>
    </html>`;

    fs.appendFile('./dist/index.html', content, err =>  {
        if (err) {
            console.error(err);
        }
    });
}

const appendEngineerToHtmlText = function (engineer)
{
    const content = `<div class ="employee">
    <div class = "wrapper-header-employee">
      <header class="header1" >
        <ul>
            <li><h1>${engineer.getName()}</h1></li>
            <li><h1>${engineer.getRole()}</h1></li>
            <nav class="nav" > 
            </nav>
          </ul>
      </header>
  </div>

<div class = "wrapper-list">
  <ul>
    <li><h3>ID: ${engineer.getId()}</h3></li> 
    <li><h3>Email:<a href ="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></h3></li> 
    <li><h3>Gihub:<a href="https://github.com/${engineer.getGithub()}" target ="blank">${engineer.getGithub()}</a></h3></li> 
  </ul>
</div>
</div>`;
   
    fs.appendFile('./dist/index.html', content, err =>  {
        if (err) {
            console.error(err);
        }
    });
};

const appendInternToHtmlText = function (intern)
{
    const content = `<div class ="employee">
    <div class = "wrapper-header-employee">
      <header class="header1" >
        <ul>
            <li><h1>${intern.getName()}</h1></li>
            <li><h1>${intern.getRole()}</h1></li>
            <nav class="nav" > 
            </nav>
          </ul>
      </header>
  </div>

<div class = "wrapper-list">
  <ul>
    <li><h3>ID: ${intern.getId()}</h3></li> 
    <li><h3>Email:<a href ="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></h3></li> 
    <li><h3>School: ${intern.getSchool()}</h3></li> 
  </ul>
</div>
</div>`;
   
    fs.appendFile('./dist/index.html', content, err =>  {
        if (err) {
            console.error(err);
        }
    });
};

init();
