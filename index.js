const mysql = require('mysql2');
// // connection 
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'employee_db'
})

db.connect(function(err) {
    if (err) throw err;
    
});
db.query('SELECT * FROM department', function (err, results) {
     if (err) throw err;
     
})


// inquirer prompts
const inquirer = require('inquirer');

// wrapped the main prompts in a function so that we can call it again after a users selection is completed
init()

function init() {
 mainMenu();
}

function mainMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'table_choice',
                choices: [
    
                    'View all Employees',
                    'Add Employee',
                    'Update Employee Role',
                    'View All Roles',
                    'Add Role',
                    'View All Departments',
                    'Add Department',
                    'Quit',
                ],
            },
        ])
        // use the `response` (which is the users selection) and check the value of it. If the value matches the `case`, then we call a function that will handle that case
        .then((response) => {
            console.log(response);
            let choice = response.table_choice;
            console.log('choice:' + choice);
            switch (choice) {
                case 'View all Employees':
                    // user selected View all Employees, so we call a function called `viewEmployees()`
                    viewEmployees();
                    break;
                case 'Add Employee':
                    addEmployee();
                    break;
                case 'Update Employee Role':
                    updateEmployeeRole();
                    break;  
                case 'View All Roles':
                    viewRoles();
                    break;
                case 'Add Role':
                    addRole();
                    break;
                case 'View All Departments':
                    viewDepartments();
                    break;
                case 'Add Department':
                    addDepartment();
                    break;        
                default:
                    quit();
            }
        })
            
}


// the viewEmployees function handles the query to our DB with a promise, then we take the data returned from that query and use it to display a table in the console.
function viewEmployees() {
    db.promise()
        .query('SELECT * FROM employee')
        .then(([rows]) => {
            let employees = rows;
            console.log('\n');
            console.table(employees);
        })
        // after the table is displayed, we recall the mainMenu function to bring the user back to the selection menu
        .then(() => mainMenu());
}

// each CASE will have a matching function where you handle the functionality with a query then displaying it
function addEmployee() {
    console.log('add an employee');
}

function updateEmployeeRole() {
    console.log('Update Employee Role');
}

function viewRoles() {
    db.promise()
        .query('SELECT * FROM role')
        .then(([rows]) => {
            let roles = rows;
            console.log('\n');
            console.table(roles);
        })
        .then(() => mainMenu());
}

function addRole() {
    console.log('add a role');
}

function viewDepartments() {
    db.promise()
        .query('SELECT * FROM department')
        .then(([rows]) => {
            let departments = rows;
            console.log('\n');
            console.table(departments);
        })
        .then(() => mainMenu());
}

function addDepartment() {
    console.log('add a department');
}

// created a quit function to call
function quit() {
    console.log('goodbye!');
    process.exit();
}


























// inquirer prompts
// const inquirer = require('inquirer');

// inquirer 
// .prompt([
//     {
//         type: 'list',
//         message: 'What would you like to do?',
//         name: 'table_choice',
//         choices: [
                // {
                    //     name: 'View all Employees',
                    //     value: 'View all Employees'
                    // },
                    // {
                    //     name: 'Add Employee',
                    //     value: 'Add Employee'
                    // },
                    // {
                    //     name: 'Update Employee Role',
                    //     value: 'Update Employee Role'
                    // },
                    // {
                    //     name: 'View All Roles',
                    //     value: 'View All Roles'
                    // },
                    // {
                    //     name: 'Add Role',
                    //     value: 'Add Role'
                    // },
                    // {
                    //     name: 'View All Departments',
                    //     value: 'View All Departments'
                    // },
                    // {
                    //     name: 'Add Department',
                    //     value: 'Add Department'
                    // },
                    // {
                    //     name: 'Quit',
                    //     value: 'Quit'
                    // },
           
// ])
// .then((response) => {
//     if (response.table_choice)
//     console.log(results)
// }
// );
