const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const employees = [];

// Actions need

// Ask them for manager info
function askManagerInfo(){
    //Prompt the user for the data
    inquirer
        .prompt('questions')
        .then((answers) => {

            employees.push (new Manager())// pass in data from inquirer)

        })
         // THEN ask for what they would like to do next
            askForNextAction()

        


}

async function askForManagerInfo(){
    //Prompt the user for the data
    const answers = await inquirer.prompt('questions')

    // THEN create and store object for the manager
    employees.push (new Manager())// pass in data from inquirer)

    // THEN ask for what they would like to do next
    askForNextAction()


}
       

// Ask them for engineer info
          //Prompt the user for the data
         // THEN create and store object for the manager
         // THEN ask for what they would like to do next
      

// Ask what they would like to do next
    // Add Engineer, Add Intern, Be Done
        // IF 'Add Engineer' -> Ask them for engineer info
        // IF 'Add Intern' -> Ask them for Intern info
        // IF 'Be Done' => build an html page


// Use all of the collected employee employee data to build an html page
