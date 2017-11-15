require('./sequelizeExports.js');
let User = require('./sequelizeExports').User;
let RowEntry = require('./sequelizeExports').RowEntry;
let path = require('path');
let LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
let LINKEDIN_KEY = require('./keys/linkedInData.js').LINKEDIN_KEY
let LINKEDIN_SECRET = require('./keys/linkedInData.js').LINKEDIN_SECRET

// both of these work okay for bcrypt, but will not suffice for passport. 
// exports.signUp = function (req, res) {
//     let username = req.body.user;
//     User.create({user : username})
//     .then((user) => {
//       loggedInUserId = user.id;
//       res.send(`created a user ${username} + ${user.id} + ${loggedInUserId}`)
//     })};
  
// exports.login = function (req, res) {
//     User.findOne({
//       where : {user : req.body.user}
//     }).then(user => {
//         loggedInUserId = user.id;
//       res.send(200, user.id)
//     })
//   }

exports.passportLogin = function (req, res) {

passport.use(new LinkedInStrategy({
  clientID: LINKEDIN_KEY,
  clientSecret: LINKEDIN_SECRET,
  callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback",
  scope: ['r_emailaddress', 'r_basicprofile'],
}, function(accessToken, refreshToken, profile, done) {
  // asynchronous verification, for effect... 
  process.nextTick(function () {
    // To keep the example simple, the user's LinkedIn profile is returned to 
    // represent the logged-in user. In a typical application, you would want 
    // to associate the LinkedIn account with a user record in your database, 
    // and return that user instead. 
    return done(null, profile);
  });
}));



}

  
exports.getAllRecords = function(req, res) {
    RowEntry.findAll({
    })
      .then((records) => {
        res.status(200)
        res.send(records)
      })
  }
  
exports.update = function(req, res) {
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
  }
  
  
exports.insert = function (req, res) {
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
  }
  
 exports.deleteRecord = function(req, res) {
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
  }

exports.search = function(req, res) {
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
  }
  
exports.frontRoute = function (req, res) {
    res.sendFile(path.join(__dirname, '../react-client/dist/', 'index.html'));
};