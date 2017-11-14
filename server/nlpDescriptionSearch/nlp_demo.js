let _ = require('underscore');
let nlp = require('compromise');

let exampleApplicationsRe = /^ /gi;
let exampleApplication = require('./example_job_app.js');

let keywordsRe = / /gi;
let javascriptKeywords = require('./termLists/javascripKeywords.js').replace(keywordsRe,'').split('\n').map((x) => x = x.toLowerCase());

let processedNouns = nlp(exampleApplication).normalize().nouns().data();
processedNouns = processedNouns.map((x) => x.text.replace(exampleApplicationsRe, ''));

console.log(_.intersection(processedNouns,javascriptKeywords));

