var express = require('express')
var User = require('./db.js').User;

// generate fake userData
require('./db_userGenerator.js').User;

var app = express()

app.get('/', function (req, res) {
  User.findAll({raw: true})
  .then(function(users) {
    res.json(users);
  })
  .catch(function(err) {
    console.error(err);
    res.json(users);
  });
});

var port = 5000;
app.listen(port, function () {
  console.log('server listening on port ' + port);
});
