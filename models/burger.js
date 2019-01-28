// Import the ORM to create functions that will interact with the database.
let orm = require("../config/orm");

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burger", res => {
      cb(res);
    });
  },
  createAll: function(cols, vals, cb) {
    orm.createAll("burger", cols, vals, res => {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateAll("burger", objColVals, condition, res => {
      cb(res);
    });
  }
};

module.exports = burger;
