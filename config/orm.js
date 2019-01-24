const connection = require("./connection");

module.exports = {
  selctAll: function(tableInput) {
    connection.query("SELECT * FROM ?", [tableInput]);
  },
  insertOne: (tableInput, userInput) => {
    let query = "INSERT INTO ? (burger_name, devoured) VALUES ??";
    connection.query(query, [tableInput, userInput]);
  },
  updateOne: (tableInput, userInput,)
};
