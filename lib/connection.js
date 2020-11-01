const mysql = require("mysql");
module.exports = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "test_user",
  password: "password",
  database: "employee_tracker_db"
});

