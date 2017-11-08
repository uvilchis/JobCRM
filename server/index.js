let app = require('./server').app;
let Main = require('./server').Main;
let Entrie = require('./server').Entrie;
let port = 3000;

Main.sync({force: true})
.then(function () {
    console.log('Users table created');
    Main.create({user : 'Christine'});
  })
  .then(function() {
    console.log('Seeded User table');
    app.listen(port, function() {
      console.log('node-express-sequelize listening on ' + port);
    });
});

Entrie.sync({force: true}).then(function() {
  Entrie.create({
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

  Entrie.create({
    company : 'facebook',
    location : 'california?',
    contact : 'm zuckerberg',
    notes : 'sounds like m bison',
    coverLetter : true,
    resume : true,
    firstInterview : true,
    secondInterview : true,
    offer : true,
    rejected : false
  })
})
