var Sequelize = require('sequelize');

// ==================================================
// DB config setup
var dbHost = 'mysql';
// database = 'dockerDemo1' | username = 'root' | password = ''
var db = new Sequelize('dockerDemo', 'root', 'dockerDemo', {
  host: dbHost,
  dialetc: 'mysql'
});

// ==================================================
// define the models
var User = db.define('User', {
  name: Sequelize.STRING,
});

// ==================================================
exports.db = db;
exports.User = User;
