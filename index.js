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
    console.log('Message Connect')
});
db.query('SELECT * FROM department', function (err, results) {
     if (err) throw err;
     console.log (results)
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
        message: 'What is your email address',
        name: 'Sediamassaquoi@gmail.com',
    }    
        
])
.then((response) =>
response.confirm === response.input

? console.log('Success!')
: console.log('Correct')
);
