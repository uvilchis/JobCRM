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
	console.log('serializeUser')
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  console.log('deserializeUser')
  // Users.findById(obj, done); // need to add this.
  done(null, obj);
});


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: REDIRECT_URL,
    scope : ['https://mail.google.com/', 'profile'], 
    // accessType: 'offline',
  },

  function(accessToken, refreshToken, params, profile, done) {
    profile.accessToken = accessToken
    profile.expires_in = params.expires_in
    if (refreshToken !== undefined) profile.refreshToken = refreshToken
    console.log('profile.id', profile.id)
    // send to db
    User.findOne({where : {googleId : profile.id} })
      .then(function(obj) {
        // if that obj exists
        if (obj) {
          return obj.update({
            accessToken : profile.accessToken, 
            expires_in : profile.expires_in, 
            refreshToken : profile.refreshToken,
            profileJSON : profile._json
          })
        } else {
          return User.create({
            googleId : profile.id,
            accessToken : profile.accessToken, 
            expires_in : profile.expires_in, 
            refreshToken : profile.refreshToken,
            profileJSON : profile._json
          })
        }
      })
      .then(done(null, profile))
    }
  )
);

exports.authenticate = passport.authenticate('google', { 
  successRedirect: '/auth/callback', 
  failureRedirect: '/auth/callback',
  scope: ['https://mail.google.com/', 'profile'], 
  accessType: 'offline',
  approvalPrompt: 'force'
})


exports.return = passport.authenticate('google', { 
  accessType: 'offline',
  approvalPrompt: 'force',
  successRedirect: '/', 
  failureRedirect: '/',
	scope: ['https://mail.google.com/', 'profile'], 
})

exports.callback = function(req, res) {
	res.redirect('/');
}




// # dropping tables from the PSQL command line: 
// drop schema public cascade;
// drop schema public cascade;
// create schema public;









