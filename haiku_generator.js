var fs = require('fs');
var haiku = require('./haiku');

var cmudictfile = haiku.readCmudictFile('./cmudict.txt');
haiku.formatData(cmudictfile);

var syllablesArr = haiku.createArray(cmudictfile);

console.log(haiku.createHaiku([[5],[7],[5]], syllablesArr));