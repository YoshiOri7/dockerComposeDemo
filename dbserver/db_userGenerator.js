var Promise = require('bluebird');

var db = require('./db.js').db;
var User = require('./db.js').User;
// ========================================================
// Use this file to initialize DB with predefined 'User' table
// ========================================================
var user1 = {
  name: 'user1',
};
var user2 = {
  name: 'user2',
};
var initialUsers= [user1, user2];

// ===============================================
// This block of codes will initailizes the database with the data above
// {force:true} will drop table first before creating them
User.sync({ force: true })
  // create tables using initial users above
  // (use Promise.all for an array of users)
  .then(function() {
    return Promise.all(initialUsers.map(function(user){
      return User.create({
        name:  user.name,
      })
    }));
  })
  .catch(function(err) {
    // Handle any error in the chain
    console.error(err);
  });
// ===============================================
// Check data in mySQL workbench
