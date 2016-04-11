var fs = require('fs');

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

var cmudictfile = readCmudictFile('./cmudict.txt');

function formatData(data){
  var lines = data.toString().split("\n");
  lines.forEach(function(line){
    lineSplit = line.split(" ");
    //console.log("The word " + lineSplit[0] + " has this phoneme layout: " + lineSplit[1]);
  });
}

//formatData(cmudictfile);

function createArray(txt){
  var arr = [];
  var lines = txt.split("\n");
  // create array with format [[#syllables, word], [#syllables, word]]
  for (var line in lines){
    var tempLine = lines[line];
    var tempArr = [];
    var tempWord = "";
    var syllables = 0;
    for (i = 0; i < tempLine.length; i++){
      if (tempLine[i].match(/[0-9]/) !== null){
        syllables++;
      }
    }
    var word = tempLine.split(' ');
    tempWord = word[0].toString();
    tempArr.push(syllables);
    tempArr.push(tempWord);
    arr.push(tempArr);
  }
  // create/return final array where each index (+1) corresponds to the number of syllabe
  var finalArr = [];
  for (k = 1; k < 11; k++){
    var tempArr1 = [];
    for (j = 0; j < arr.length; j++){
      if (arr[j][0] === k){
        tempArr1.push(arr[j][1]);
      }
    }
    finalArr.push(tempArr1);
  }
  return finalArr;
}

//var syllablesArr = createArray(cmudictfile);

function createHaiku(structure, syllablesArr){
  return structure.map(function(lines){
    return lines.map(function(syls){
      var arr = syllablesArr[syls - 1];
      return arr[Math.floor(Math.random() * arr.length)];
    }).join(' ');
  }).join('\n');
}

module.exports = {
  createHaiku: createHaiku,
  createArray: createArray,
  formatData: formatData,
  readCmudictFile: readCmudictFile
};
