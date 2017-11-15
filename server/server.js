let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let passport = require('passport')
let session = require('express-session')

require('./controllers/recordController.js');
let rec = require('./controllers/recordController.js');
let nlp = require('./controllers/nlpController');
let auth = require('./controllers/authController')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(express.static(__dirname + '/../public'));

// for passports and sessions: 
app.use(passport.initialize());
app.use(passport.session());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));



app.get('/auth', auth.authenticate);
app.get('/auth/callback', auth.callback)

app.get('/records', rec.getAllRecords);
app.post('/update', rec.update);
app.post('/insert', rec.insert);
app.post('/deleteRecord', rec.deleteRecord)
app.post('/search', rec.search);
app.post('/loadAppKeywords', nlp.loadApplicationKeywords);
app.get('/*', rec.frontRoute);

app.listen(3000, () => {
  console.log('listening on port 3000')
})

module.exports = {
  app: app,
};
