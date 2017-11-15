let User = require('../sequelize.js').User;
let RowEntry = require('../sequelize.js').RowEntry;
let path = require('path');

let textract = require('textract');
let parseApplicationText = require('./nlpResources/nlp_demo.js').parseApplicationText;

exports.loadApplicationKeywords = function(req, res) {
  textract.fromUrl(req.body.url, (error, text) => {
    // console.log(parseApplicationText(text));
    // console.log(typeof parseApplicationText(text));
    res.send(parseApplicationText(text));
  });
}