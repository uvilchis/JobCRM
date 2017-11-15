require('../sequelize.js'); // instantiate
let User = require('../sequelize.js').User;
let RowEntry = require('../sequelize.js').RowEntry;
let path = require('path');

  
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

// this is for handling the front end routes. 
exports.frontRoute = function (req, res) {
    res.sendFile(path.join(__dirname, '../../react-client/dist/', 'index.html'));
};


