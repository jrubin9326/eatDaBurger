// Import the ORM to create functions that will interact with the database.
let orm = require("../config/orm");

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", res => {
      cb(res);
    });
  },
  createAll: function(cols, vals, cb) {
    orm.createAll("burgers", cols, vals, res => {
      cb(res);
    });
  },
  updateAll: function(objColVals, condition, cb) {
    orm.updateAll("burgers", objColVals, condition, res => {
      cb(res);
    });
  }
};

module.exports = burger;
