
const Intern = require('./lib/intern.js');
const Engineer = require('./lib/engineer.js');
const Manager = require('./lib/manager.js');

const inquirer = require('inquirer');
const fs = require('fs');







function createemps() {
    var appends = ``;
    const newinquiry = new Manager;
    function mgrprompt(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'Mname',
                message: `Manager's name:`,
            },
            {
                type: 'input',
                name: 'MEID',
                message: `Manager's Employee ID:`,
            },
            {
                type: 'input',
                name: 'MEmAd',
                message: `Manager's email address:`,
            },
            {
                type: 'input',
                name: `MOfNu`,
                message: `Manager's Office Number:`,
            },
            {
                type: 'list',
                name: 'AddEmp',
                choices: ['Engineer', 'Intern','None'],
                message: 'Would you like to add another employee?'
            }
        ])
        .then((answers) => {
            const{Mname, MEID, MEmAd, MOfNu, AddEmp} = answers;
            const manager = new Manager(Mname, MEID, MEmAd, MOfNu, AddEmp);
            console.log(manager);
            var appendmgr = (`          
            <section class="card card-rounded bg-white">
            <header class="card-header text-center bg-primary">
              <h2 class="text-white">
                Manager
              </h2>
            </header>
            <div class="p-3">
            <blockquote class="blockquote text-center">
              <p class="card-body">
              ${Mname}
                <br />
              Employee ID: <br>${MEID}
              <br />
              Email: <a href="mailto:${MEmAd}">${MEmAd}</a>
              <br />
              Phone: ${MOfNu}
              </p>
              </blockquote>
            </div>
            <footer class="card-footer text-center">
            </footer>
          </section>`);
          appends += appendmgr ;
          addemps(AddEmp);
        })
        }

        function intprompt(){
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'Iname',
                    message: `Intern's name:`,
                },
                {
                    type: 'input',
                    name: 'IEID',
                    message: `Intern's Employee ID:`,
                },
                {
                    type: 'input',
                    name: 'IEmail',
                    message: `Intern's email:`,
                },
                {
                    type: 'input',
                    name: 'School',
                    message: `School:`,
                },
                {
                    type: 'list',
                    name: 'AddEmp',
                    choices: ['Engineer', 'Intern','None'],
                    message: 'Would you like to add another employee?'
                }
            ])
            .then((answersint) => {
                const{Iname, IEID, IEmail, School, AddEmp} = answersint;
                const intern = new Intern(Iname, IEID, IEmail, School, AddEmp);
                console.log(intern);
                var appendint = (`          
                <section class="card card-rounded bg-white">
                <header class="card-header text-center bg-primary">
                  <h2 class="text-white">
                    Intern
                  </h2>
                </header>
                <div class="p-3">
                <blockquote class="blockquote text-center">
                  <p class="card-body">
                  ${Iname}
                    <br />
                  Employee ID: <br>${IEID}
                  <br />
                  Email: <a href="mailto:${IEmail}">${IEmail}</a>
                  <br />
                  School: ${School}
                  </p>
                  </blockquote>
                </div>
                <footer class="card-footer text-center">
                </footer>
              </section>`);
              appends += appendint;
              addemps(AddEmp);
            
            })
        }

        function engprompt(){
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'Ename',
                    message: `Engineer's name:`,
                },
                {
                    type: 'input',
                    name: 'EEID',
                    message: `Engineer's Employee ID:`,
                },
                {
                    type: 'input',
                    name: 'EnEmail',
                    message: `Engineer's email:`,
                },
                {
                    type: 'input',
                    name: 'Ghub',
                    message: `Github Username:`,
                },
                {
                    type: 'list',
                    name: 'AddEmp',
                    choices: ['Engineer', 'Intern','None'],
                    message: 'Would you like to add another employee?'
                }
            ])
            .then((answerseng) => {
                const{Ename, EEID, EnEmail, Ghub, AddEmp} = answerseng;
                const engineer = new Engineer(Ename, EEID, EnEmail, Ghub, AddEmp);
                console.log(engineer);
                var appendeng = (`          
                <section class="card card-rounded bg-white">
                <header class="card-header text-center bg-primary">
                  <h2 class="text-white">
                    Engineer
                  </h2>
                </header>
                <div class="p-3">
                <blockquote class="blockquote text-center">
                  <p class="card-body">
                  ${Ename}
                    <br />
                  ${EEID}
                  <br />
                 Email: <a href="mailto:${EnEmail}">${EnEmail}</a>
                  <br />
                  Github: <a href="https://www.github.com/${Ghub}">https://www.github.com/${Ghub}</a>
                  </p>
                  </blockquote>
                </div>
                <footer class="card-footer text-center">
                </footer>
              </section>`);
              appends += appendeng;
              addemps(AddEmp);
            })
        }

    


    function addemps(emps){
        if(emps == 'Engineer'){
            engprompt();
        } else if (emps == 'Intern'){
            intprompt();
        } else if (emps == 'None'){
            var htmlfile = (
                `<!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8"/>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Company Web</title>
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
                        <link rel="stylesheet" type="css" href="./dist/style.css" />
                        <script
                        src="https://code.jquery.com/jquery-3.5.1.min.js"
                        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
                        crossorigin="anonymous"
                        ></script>
                    </head>
                    <body class="min-100-vh flex-column">
                    <header class="p-5 text-center text-white bg-primary">
                    <h1>Company Profiles</h1>
                    </header>
                    <main class="card group p-4 bg-light">
                    ${appends}
                    </main>
                    <script src="assets/js/script.js"></script>
                </body>
                </html>
                        `
            );
            fs.writeFile('./dist/index.html', htmlfile, (err) =>
            err ? console.log(err) : console.log('Success!'));
        }
        };

        mgrprompt();



}


const cssfile = (
    ``
)

createemps();
