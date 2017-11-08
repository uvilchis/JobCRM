let app = require('./server').app;
let User = require('./server').User;
let RowEntry = require('./server').RowEntry;
let port = 3000;

User.sync({force: true})
.then(function () {
    console.log('Users table created');
    User.create({user : 'Christine'});

  })
  .then(function() {
    console.log('Seeded User table');
    app.listen(port, function() {
      console.log('node-express-sequelize listening on ' + port);
    });
});

RowEntry.sync({force: true})
.then(function() {
  console.log('RowEntry table created');
  RowEntry.create({
    company : 'google',
    location : 'googleLand',
    contact : 'google CEO',
    notes : 'look up the actual info',
    coverLetter : true,
    resume : true,
    firstInterview : true,
    secondInterview : true,
    offer : true,
    rejected : false
  })
})


//
// RowEntry.create({
//   company : 'google',
//   location : 'googleLand',
//   contact : 'google CEO',
//   notes : 'look up the actual info',
//   coverLetter : true,
//   resume : true,
//   firstInterview : true,
//   secondInterview : true,
//   offer : true,
//   rejected : false
// })
// RowEntry.create({
//   company : 'facebook',
//   location : 'california?',
//   contact : 'm zuckerberg',
//   notes : 'sounds like m bison',
//   coverLetter : true,
//   resume : true,
//   firstInterview : true,
//   secondInterview : true,
//   offer : true,
//   rejected : false
