let express = require('express');
let app = express();
let path = require('path');
//let pg = require('pg');

// we'll want to use body.req and etc.
// solid middleware
let bodyParser = require('body-parser');

// we import sequelize so we have a way to interact with our postgreSQL database
let Sequelize = require('sequelize');

// middleware for the cookies
//var session = require('express-session')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// static routes
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(express.static(__dirname + '/../public'));

// want to set up sample cookies
// even to use as a user tracking
// authentication feature
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }))
// eventually you'll access users as
// req.session.user;

// if you run into problems with the following,
// either ask tommy, or generate a new
// postgres instance somewhere. We used
// postgres on tommy's heroku
// hobby-dev instance. The way to access
// this with psql is:
// psql postgres://rddgghwbqbufnr:a1a65f57d296c76218ce8910de929fa834823cb5d54a9aa4062f7b1f15db33bf@ec2-23-21-220-23.compute-1.amazonaws.com:5432/d9kfc0g85kd1q0
// sorry for the non-line wrap ;)

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
  dialect : 'postgres'
})

// confirm that we're connected to postgres. Log the result
// to the server console. (probably your nodemon.)
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// define our schema.

let User = sequelize.define('user', {
  username : {type : Sequelize.STRING, unique : true}
});

let RowEntry = sequelize.define('rowentry', {
  company: { type: Sequelize.STRING, defaultValue: "Enter Company Name" },
  location: { type: Sequelize.STRING, defaultValue: "Enter Location" },
  contact: { type: Sequelize.STRING, defaultValue: "Enter Contact Name" },
  notes: { type: Sequelize.TEXT, defaultValue: "Notes Go Here" },
  coverLetter: { type: Sequelize.BOOLEAN, defaultValue: false },
  resume: { type: Sequelize.BOOLEAN, defaultValue: false },
  firstInterview: { type: Sequelize.BOOLEAN, defaultValue: false },
  secondInterview: { type: Sequelize.BOOLEAN, defaultValue: false },
  offer: { type: Sequelize.BOOLEAN, defaultValue: false },
  rejected: { type: Sequelize.BOOLEAN, defaultValue: false },
  // userId: { type: Sequelize.NUMBER, defaultValue: 0, foreignKey: true}
});

// RowEntry.belongsTo(User);
// User.hasMany(RowEntry);

// RowEntry.hasMany(User, {as : 'user_id', constraints : false})

// here, force: true forces the server
// to drop the tables, then insert our
// entries below (in bulkCreate)
User.sync({ force: true }).then(() => {
  // Table created
  User.bulkCreate([{
    user: 'example user'
  },
  {
    user: 'Christine Ma'
  }]);
});


RowEntry.sync({ force: true }).then(() => {
  // create table - you need bulkCreate
  // to create multiple rows at a time.
  RowEntry.bulkCreate([{
    company: 'example company',
    location: 'New York, NY',
    contact: 'tommy.york@gmail.com',
    notes: 'example info',
    coverLetter: true,
    resume: true,
    firstInterview: true,
    secondInterview: false,
    offer: false,
    rejected: false,
  },{
    company: 'another example',
    location: 'Brooklyn, NY',
    contact: 'hipsterland@gmail.com',
    notes: 'more example info',
    coverLetter: false,
    resume: false,
    firstInterview: true,
    secondInterview: true,
    offer: true,
    rejected: false,

  }]);
});

/* =========== ROUTES =============

!!! note that currently, our authentication
routes do NOT work correctly, we have yet to
fully implement express session !!!

DESC.ROUTE     METHOD    SQL ACTION
=======================================================
SIGN UP     /signup   post      authentication / signup (currently just creates users, no signup)
LOGIN       /login    post      authentication / should allow us to set the user for all the records and such
RECORDS     /records  get       find all
UPDATE      /update   post      update / should update checkbox (true/false) fields on a row
INSERT      /input   post      insert / should insert a new entries row
REC/SEARCH  /records  post      find some

!! also, a delete route would be chill !!!
!!! no logout route yet!!!

==================================*/

app.post('/signup', (req, res)=> {
  let username = req.body.user;
  User.create({user : username})
  .then((user) => {
    loggedInUserId = user.id;
    res.send(`created a user ${username} + ${user.id} + ${loggedInUserId}`)
  })});

app.post('/login', (req, res) => {
  User.findOne({
    where : {user : req.body.user}
  }).then(user => {
      loggedInUserId = user.id;
    res.send(200, user.id)
  })
})

//There shouldn't be an app.get('/login'... path
// app.get('/login', (req, res) => {
//   res.send('app')
// })

app.get('/records', (req, res) => {
  RowEntry.findAll({
    // include: [{model: User, as: 'username'}]
  })
    .then((records) => {
      res.status(200)
      res.send(records)
    })
  // should return all records for an ID
})

app.post('/update', (req, res) => {
  console.log(req.body);

  RowEntry.findOne({
    where: {
      id: req.body.id
    }
  }).then(results => {
    let stateUpdate = {};
    stateUpdate[req.body.stateName] = req.body.value;
    console.log(stateUpdate);
    results.update(stateUpdate)
    .then(() => {
      res.status(200)
      res.send(results)
    })
  })
})


app.post('/insert', (req, res) => {
  //console.log(req.body);
  console.log(req.body.coverLetter);
  RowEntry.create({
    company : req.body.companyValue,
    location : req.body.locationValue,
    contact : req.body.contactValue,
    notes : req.body.notesValue,
    coverLetter : req.body.coverLetter,
    resume : req.body.resume,
    firstInterview : req.body.firstInterview,
    secondInterview : req.body.secondInterview,
    offer : req.body.offer,
    rejected : req.body.rejected
  })
})

///////////////////
app.post('/deleteRecord', (req, res) => {
  console.log(req.body)
  RowEntry.findOne({
    where: {
      id: req.body.id
    }
  }).then(id => {
    console.log(id)
    id.destroy();
    res.status(201)
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })
})
//////////////////

app.post('/search', (req, res) => {
  console.log(req.body);
  RowEntry.findAll({
    where: {
      $or: [
        // check out all string fields
        {company: {like: '%' + req.body.searchValue + '%'}},
        {location: { like: '%' + req.body.searchValue + '%'}},
        {contact: { like: '%' + req.body.searchValue + '%'}},
        {notes: {like: '%' + req.body.searchValue + '%'}}
      ]
    }
  })
  .then(results => {
    res.status(200)
    console.log(results);
    res.send(results)
  })
})

// Believe we need this for front-end routing
app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, '../react-client/dist/', 'index.html'));
 });

// for a while, we were listening on port 3001,
// but we said we were listening to 3000. D:
app.listen(3000, () => {
  console.log('listening on port 3000')
})

module.exports = {
  app: app,
  User: User,
  RowEntry: RowEntry
};
