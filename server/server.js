let express = require('express');
let app = express();
let path = require('path');

// we import sequelize so we have a way to interact with our postgreSQL database
let Sequelize = require('sequelize');

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(express.static(__dirname + '/../public'))

let sequelize = new Sequelize ('attempt', 'postgres', 'irule6302', {dialect : 'postgres'})
let globe = 0;
// export to outer file for cleanliness
let Main = sequelize.define('main', {
  user : {type : Sequelize.STRING, unique : true}
});

let Entrie = sequelize.define('entry', {
  company : {type: Sequelize.STRING, defaultValue: "Enter Company Name"},
  location : {type: Sequelize.STRING, defaultValue: "Enter Location"},
  contact : {type: Sequelize.STRING, defaultValue: "Enter Contact Name"},
  notes : {type: Sequelize.TEXT, defaultValue: "Notes Go Here"},
  coverLetter : {type: Sequelize.BOOLEAN, defaultValue: false},
  resume : {type: Sequelize.BOOLEAN, defaultValue: false},
  firstInterview : {type: Sequelize.BOOLEAN, defaultValue: false},
  secondInterview : {type: Sequelize.BOOLEAN, defaultValue: false},
  offer : {type: Sequelize.BOOLEAN, defaultValue: false},
  rejected : {type: Sequelize.BOOLEAN, defaultValue: false}
});
//
// Main.hasMany(Entrie, {foreignKey : 'id_main');

// Main.belongsTo(Entrie, {as : 'mainEntrie', constraints : false})

// we should have a function that adds entrie to the specified user
// and keeps the information there

//
// app.get('/test', (req, res) => {
//   Entrie.findAll({
//     include : [Main]
//   }).then( entries => {
//     res.send(entries)
//   })
// })

app.get('/users', (req, res) =>{
  Main.findAll().then(users => {
    res.send(users);
  })
})

app.get('/entries', (req, res) => {
  Entrie.findAll().then(entries => {
    res.send(entries);
  })
})


// is it safe to think of express static sending files upon a request to the '/' endpoint?

app.listen(3001, () => {
  console.log('listening on port 3001')
})

module.exports = {
  app: app,
  Main: Main,
  Entrie: Entrie
};


// upon a get request to the '/user' endpoint, the sequelize function is called and all the users are sent back
//

/*
app.get('/login' (req, res)=> {
authentication
user puts in a userName
SELECT FROM MAIN where user = input

Main.find()

})


*/
