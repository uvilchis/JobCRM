let _ = require('underscore');
let nlp = require('compromise');


let exampleApplication = require('./example_job_app.js');

exports.parseApplicationText = function (text) {
    let keywordsRe = / /gi;
    let javascriptKeywords = require('./termLists/javascripKeywords.js').replace(keywordsRe,'').split('\n').map((x) => x = x.toLowerCase());

    let textRe = /^ /gi;
    let processedNouns = nlp(text).normalize().nouns().data();
    processedNouns = processedNouns.map((x) => x.text.replace(textRe, ''));

    return _.intersection(processedNouns,javascriptKeywords);
} 

