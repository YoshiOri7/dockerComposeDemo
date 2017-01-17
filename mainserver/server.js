var axios = require('axios');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!!!')
})

// get users from db
var dbHost = 'http://dbserver:5000';
app.get('/users', function (req, res) {

  axios.get(dbHost)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      res.json(error);
    });
})


var port = 3000;
app.listen(port, function () {
  console.log('server listening on port ' + port);
});
