let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let passport = require('passport')
let session = require('express-session')

require('./controllers/recordController.js');
let fullContact = require('./controllers/fullContactProxy.js');
let rec = require('./controllers/recordController.js');

let nlp = require('./controllers/nlpController');
let auth = require('./controllers/authController')
let docs = require('./controllers/docController')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// console.log(serverPath);
app.use(express.static(path.resolve(__dirname + '/../react-client/dist/')));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

// for passports and sessions: 
app.use(passport.initialize());
app.use(passport.session());


app.get('/auth', auth.authenticate);
app.get('/auth/callback', auth.return)

// these get information about the session and send it back to app. 
app.get('/session/displayName', auth.getSessionDisplayName)
app.get('/session/all', auth.getSessionAll)


app.get('/logout', auth.destroySession)

// these post to the docs. 

app.post('/docs/coverLetter', docs.addCoverLetter)
app.post('/docs/resume', docs.addResume)

app.get('/contacts', ()=>{return;})//NEEDS A CONTROLLER

app.get('/records', rec.getAllRecords);
app.get('/recentrecords', rec.getAllRecords);

app.post('/docs/coverLetter', docs.addCoverLetter)
app.post('/docs/resume', docs.addResume)
app.post('/update', rec.update);
app.post('/insert', rec.insert);
app.post('/deleteRecord', rec.deleteRecord)
app.post('/search', rec.search);
app.post('/loadAppKeywords', nlp.loadApplicationKeywords);
app.post('/fullContact', fullContact.getContact);
app.get('/*', rec.frontRoute);


app.listen(process.env.PORT || 3000, () => {
  console.log('listening on port 3000')
})

module.exports = {
  app: app,
};
