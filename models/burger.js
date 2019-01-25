// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  all: function(cb) {
    orm.all("burger", res => {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("burger", cols, vals, res => {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burger", objColVals, condition, res => {
      cb(res);
    });
  }
};

module.exports = burger;
