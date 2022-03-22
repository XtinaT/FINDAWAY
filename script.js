"use strict";
function findAWay(startWord, finishWord) {
  var queue = {};
  var way = {};
  var searched = {};
  var common = [queue, way, searched];
  function findSimilar(startWord, common) {
    if (!(startWord in searched)) {
      searched[startWord] = 0;
      var dictionary = ["ЛУЖА", "МУЗА", "ЛИРА", "МЕХА", "ЛИГА", "ТАРА", "ЛИПА", "ТУРА", "ПАРК", "ЛОЖЬ", "ЛУПА", "ПЛОТ", "МУРА", "ПАУК", "ПАУТ", "ПЛУТ", "ЛОЖА", "СЛОТ", "ПАРА"];
      for (var i = 0; i < dictionary.length; i++) {
        var word = dictionary[i];
        var count = 0;

        for (var j = 0; j < word.length; j++) {
          if (word[j] != startWord[j]) {
            count++;
          }
        }
        if (count == 1 && !(word in queue)) {
          queue[word] = 0;
          way[startWord] = 0;
        }
      }
    }
    return common;
  }

  common = findSimilar(startWord, common);

  var check = false;

  while (check == false) {
    for (var key in queue) {
      var count = 0;
      for (var j = 0; j < key.length; j++) {
        if (key[j] != finishWord[j]) {
          count++;
        }
      }
      if (count == 1) {
        check = true;
        way[key]=0;
      } else {
        findSimilar(key, common);
      }
    }
  }
  var string = ``;
  for (var key in way) {
    string += key + ", ";
  }
  string += `${finishWord}`;
  return string;


}

console.log(findAWay("ЛИСА", "ЛОСЬ"));
console.log(findAWay("МУХА", "СЛОН"));
