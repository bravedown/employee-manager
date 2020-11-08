const connection = require("./connection");
module.exports = {
    insertIntoTable(val, col, table) {
        var queryString = "INSERT INTO ?? (??) VALUE (?)";
        connection.query(queryString, [table, col, val], function(err, result) {
            if (err) throw err;
            console.log(`Added ${val} to col ${col} in table ${table}`);
        });
    }
};