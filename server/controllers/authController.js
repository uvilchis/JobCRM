// possibly needs schema
let User = require('../sequelize').User;
let RowEntry = require('../sequelize').RowEntry;
let path = require('path');

var GOOGLE_CLIENT_ID = require('../keys/googleOAuth.js').GOOGLE_CLIENT_ID
var GOOGLE_CLIENT_SECRET = require('../keys/googleOAuth.js').GOOGLE_CLIENT_SECRET
var REDIRECT_URL = require('../keys/googleOAuth.js').REDIRECT_URL;

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var passport = require('passport')

// Passport session setup.
//
//   For persistent logins with sessions, Passport needs to serialize users into
//   and deserialize users out of the session. Typically, this is as simple as
//   storing the user ID when serializing, and finding the user by ID when
//   deserializing.

passport.serializeUser(function(user, done) {
	console.log('user', user)
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  // Users.findById(obj, done); // need to add this.
  done(null, obj);
});


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: REDIRECT_URL,
    scope : ['https://mail.google.com/']
  },

  function(accessToken, refreshToken, profile, done) {
  	console.log('profile', profile.access)
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
    	console.log('this is the user', user)
      return done(err, profile);
    });
  }

));

exports.authenticate = passport.authenticate('google', { scope: ['https://mail.google.com/']}, {failureRedirect: '/input', successRedirect : '/'})


exports.return = passport.authenticate('google', { 
  failureRedirect: '/input',
	scope: ['https://mail.google.com/'], 
})

exports.callback = function(req, res) {
	// console.log('this is the req from callback', req)	
	console.log('req.user', req)
	// at the end of what
	res.redirect('/')
  // make new user, populate with response. 
}

exports.callback = function(req, res) {
    res.redirect('/')
}











// this was the oauth strategy using google directly.
// var readline = require('readline'); // google's sample code was using this, but I am not sure that we actually need it.
// var google = require('googleapis');
// var OAuth2Client = google.auth.OAuth2;



// var oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // this just gets AccessToken to be later
// var getAccessToken = function(oauth2Client, callback, req, res) {
//   // generate consent page url
//   var url = oauth2Client.generateAuthUrl({
//     access_type: 'offline', // will return a refresh token
//     // these are 'painting with a wide brush'. Once we figure out what we
//     // actually need, we should change our scopes to be more specific.
//     scope: [
//     	'https://mail.google.com/',
//     	'https://www.googleapis.com/auth/drive',
//     ]
//   });
//   // redirect user to this url
//   console.log('Visit the url: ', url);

//   // the user is redirected and signs in.
//   res.redirect(url, (response) => {
//   	console.log(response)
//   })
// 	// google should make a get request to /auth that contains the token.
// 	// when they make this get request


//     // request access token
//     // oauth2Client.getToken(code, function (err, tokens) {
//     //   if (err) {
//     //     return callback(err);
//     //   }
//     //   // set tokens to the client
//     //   // TODO: tokens should be set by OAuth2 client.
//     //   oauth2Client.setCredentials(tokens);
//     //   callback();
//     // });

// }

// // retrieve an access token
// getAccessToken(oauth2Client, function () {
//   // retrieve user profile
//   // plus.people.get({ userId: 'me', auth: oauth2Client }, function (err, profile) {
//   //   if (err) {
//   //     return console.log('An error occured', err);
//   //   }
//   //   console.log(profile.displayName, ':', profile.tagline);
//   // });
// });
















// both of these could be built out to work okay for bcrypt, but will not suffice for passport.
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
// }

