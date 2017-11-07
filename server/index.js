let express = require('express');
let app = express();
let path = require('path');

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(express.static(__dirname + '/../public'))
// is it safe to think of express static sending files upon a request to the '/' endpoint?

app.listen(3000, () => {
  console.log('listening on port 3000')
})
