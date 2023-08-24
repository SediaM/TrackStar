const mysql = require('mysql2');
// connection 
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

inquirer 
.prompt([
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'table_choice',
        choices: ['View all Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']

    },
    {
        type: 'list',
        message: 'What is the name of the department?',
        name: 'list_table_choice',
        when: (response) => response.table_choice === 'Add Department',
    },
    {
        type: 'input',
        message: 'What is the name of the role?',
        name: 'list_table_choice',
        when: (response) => response.table_choice === 'Add Role',
    },  
    {
        type: 'input',
        message: 'What is the name of the employee?',
        name: 'list_table_choice',
        when: (response) => response.table_choice === 'Add Employee',
    },    
    {
        type: 'input',
        message: 'What is the name of the role?',
        name: 'list_table_choice',
        when: (response) => response.table_choice === 'View all Employees',
    },    
    {
        type: 'input',
        message: 'What is the name of the role?',
        name: 'list_table_choice',
        when: (response) => response.table_choice === 'Update Employee Role',
    },    
    {
        type: 'input',
        message: 'What is the name of the role?',
        name: 'list_table_choice',
        when: (response) => response.table_choice === 'View All Roles',
    },    
    {
        type: 'input',
        message: 'What is the name of the role?',
        name: 'list_table_choice',
        when: (response) => response.table_choice === 'View All Departments',
    } 
           
])
.then((response) => {
    if (response.table_choice)
    console.log(results)
}
);
