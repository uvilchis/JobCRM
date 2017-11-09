let express = require('express');
let app = express();
let path = require('path');
let pg = require('pg');
let bodyParser = require('body-parser');
// we import sequelize so we have a way to interact with our postgreSQL database
let Sequelize = require('sequelize');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(express.static(__dirname + '/../public'));

let sequelize = new Sequelize ({
dialect: 'postgres',
dialectOptions: {
  ssl: true
},
host: `ec2-23-21-220-23.compute-1.amazonaws.com`,
database: `d9kfc0g85kd1q0`,
username: `rddgghwbqbufnr`,
Port: 5432,
password: `a1a65f57d296c76218ce8910de929fa834823cb5d54a9aa4062f7b1f15db33bf`,
dialect : 'postgres'})

let globe = 0;
// export to outer file for cleanliness

let User = sequelize.define('user', {
  user : {type : Sequelize.STRING, unique : true}
});

let RowEntry = sequelize.define('rowentry', {
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

//User.hasMany(RowEntry, {as : 'userEntry'});

// User.belongsTo(RowEntry, {as : 'mainRowEntry', constraints : false})

// we should have a function that adds entrie to the specified user
// and keeps the information there

//
// app.get('/test', (req, res) => {
//   RowEntry.findAll({
//     include : [User]
//   }).then( entries => {
//     res.send(entries)
//   })
// })

app.post('/login', (req, res) => {
  let username = " " + req.body.user;
  User.create({user : username});
  res.send(`created a user: ${username}`)
})

app.get('/users', (req, res) => {
  User.findAll().then(users => {
    res.send(users);
  }).catch(err => {console.error(err)})
})

app.get('/entries', (req, res) => {
  RowEntry.findAll().then(entries => {
    res.send(entries);
  })
})

app.post('/entries', (req, res) => {
  RowEntry.create({
    company : '',
    location : '',
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


// is it safe to think of express static sending files upon a request to the '/' endpoint?

app.listen(3001, () => {
  console.log('listening on port 3001')
})

module.exports = {
  app: app,
  User: User,
  RowEntry: RowEntry
};
// I'M ADDING A COMMENT AND SAVING IT


// upon a get request to the '/user' endpoint, the sequelize function is called and all the users are sent back
//

/*
app.get('/login' (req, res)=> {
authentication
user puts in a userName
SELECT FROM MAIN where user = input

User.find()

})


*/
