let User = require('../sequelize.js').User;
let RowEntry = require('../sequelize.js').RowEntry;
let path = require('path');

let textract = require('textract');

exports.loadApplicationKeywords = function(req, res) {
  textract.fromUrl(req.body.url, (error, text) => res.send(text));
}