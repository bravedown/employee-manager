const inquirer = require("inquirer");
const orm = require("./lib/orm");
const connection = require("./lib/connection");
const cTable = require("console.table");
const homeQuestion = {
    message: "What would you like to do?",
    name: "choice",
    type: "list",
    choices: ["Add a department.", "Add a role.", "Add an employee.", "View departments.", "View roles.", "View employees.", "Update an employee's role.", "Quit."]
};

async function init() {
    let keepAsking = true;
    while (keepAsking) {
        let {choice} = await inquirer.prompt(homeQuestion);
        switch(choice) {
            case "Add a department.":
                let {newDepName} = await inquirer.prompt({
                    message: "What is the name of the new department?",
                    name: "newDepName",
                });
                orm.insertIntoTable(newDepName, 'name', 'department');
                break;
            case "Add a role.":
                let {title, salary, depID} = await inquirer.prompt([{
                    message: "What is the name of the new role?",
                    name: "title",
                },
                {
                    message: "What is the salary for this position?",
                    name: "salary"
                },
                {
                    message: "What is the ID of the department?",
                    name: "depID"
                }]);
                connection.query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`, [title, salary, depID], function(err, result) {
                    if (err) throw err;
                    // console.log(`Added ${val} to col ${col} in table ${table}`);
                });
                break;
            case "Add an employee.":
                let {first, last, roleID, managerID} = await inquirer.prompt([{
                    message: "What is the first name of the new employee?",
                    name: "first",
                }, 
                {
                    message: "What is the last name of the new employee?",
                    name: "last",
                },
                {
                    message: "What is the ID of the employee's role?",
                    name: "roleID",
                },
                {
                    message: "What is the ID of the employee's manager?",
                    name: "managerID",
                }]);
                connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [first, last, roleID, managerID], function(err, result) {
                    if (err) throw err;
                    // console.log(`Added ${val} to col ${col} in table ${table}`);
                });
                break;
            case "View departments.":
                connection.query(`SELECT * FROM department`, [], function(err, result) {
                    if (err) throw err;
                    console.table(result);
                });
                break;
            case "View roles.":
                connection.query(`SELECT * FROM role`, [], function(err, result) {
                    if (err) throw err;
                    console.table(result);
                });
                break;
            case "View employees.":
                connection.query(`SELECT * FROM employee`, [], function(err, result) {
                    if (err) throw err;
                    console.table(result);
                });
                break;
            case "Update an employee's role.":
                let {employeeID, newRoleID} = await inquirer.prompt([{
                    message: "What is the employee's ID?",
                    name: "employeeID",
                }, 
                {
                    message: "What is the ID of the employee's new role?",
                    name: "newRoleID",
                }]);
                connection.query(`UPDATE employee SET role_id = ? WHERE id = ?`, [newRoleID, employeeID], function(err, result) {
                    if (err) throw err;
                });
                break;
            case "Quit.":
                keepAsking = false;
        }
    }
}
init();

