const inquirer = require('inquirer');
const Manager = require('./lib/Manager')

// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 


const employees = [];

// Actions need


async function askForManagerInfo(){
    //Prompt the user for the data
    const answers = await inquirer
        .prompt({
            type: 'input',
            message: 'Who is the manager of this team?',
            name: 'name',
            validate: function(answers){
                if(answers.length < 1){
                    console.log("Please Enter a valid name...")
                } else {
                    return true;
                }

            },

            type: 'input',
            message: "what is the managers's ID?",
            name: 'employeeID',
            validate: function(answers){
                if(isNaN(answers)){
                    console.log("Please Enter a Numeric Value...")
                }
            },

            type: 'input',
            message: "What is the manager's email address?",
            name: 'email',
            validate: function(answers){
                if(answers.length < 1){
                    console.log('Enter a valid email address...')
                } else {
                    return true;
                }
                
            },


            type: 'input',
            message: "What is the manager's office Number?",
            name: 'officeNum',
            validate: function(answers){
                if(isNaN(answers)){
                    console.log("Please Enter a Numeric Value...")
                }
            
            }



          
        });
        then(employees.push(new Manager(answers))) 
    
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

askForManagerInfo()
askForEngineerInfo()
askForIntern()