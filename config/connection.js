var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  database: "burgers_db",
  user: "root",
  password: "1234Asdf!",
  port: 8080
});
connection.connect(function(err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }

  console.log("Connected as id " + connection.threadId);
});

module.exports = connection;
