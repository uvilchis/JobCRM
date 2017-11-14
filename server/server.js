let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');

require('./sequelizeExports.js');
let User = require('./sequelizeExports').User;
let RowEntry = require('./sequelizeExports').RowEntry;
console.log(User);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(express.static(__dirname + '/../public'));

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
