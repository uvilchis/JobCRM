let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');

require('./controllers/recordController.js');
let rec = require('./controllers/recordController.js');
let nlp = require('./controllers/nlpController.js');
// let auth = require('')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let serverPath = path.resolve(__dirname + '//..');
// console.log(serverPath);
app.use(express.static(path.resolve(serverPath + '/react-client/dist/')));

// app.post('/signup', controller.signUp);
// app.post('/login', controller.login);
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
