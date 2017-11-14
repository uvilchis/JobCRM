let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');

require('./sequelizeExports.js');
let User = require('./sequelizeExports').User;
let RowEntry = require('./sequelizeExports').RowEntry;

require('./controller.js');
let controller = require('./controller.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(express.static(__dirname + '/../public'));

app.post('/signup', controller.signUp);
app.post('/login', controller.login);
app.get('/records', controller.getAllRecords);
app.post('/update', controller.update);
app.post('/insert', controller.insert);
app.post('/deleteRecord', controller.deleteRecord)
app.post('/search', controller.search);
app.get('/*', controller.frontRoute);

app.listen(3000, () => {
  console.log('listening on port 3000')
})

module.exports = {
  app: app,
  User: User,
  RowEntry: RowEntry
};
