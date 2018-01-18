
function translateWord(word) {
  if (word.length === 0) {
    return "";
  }
  var startOfWord = "";
  var restOfWord = "";
  var start = true;

  for (var i = 0; i < word.length; i++) {
    var char = word.charAt(i);

    if (start) {
      if (/[aeiou]/i.test(char) || (/[y]/i.test(char) && i>0)) {
        if (/[u]/i.test(char) && /[q]/i.test(startOfWord.charAt(i - 1))) {
          startOfWord += char;
        } else {
          restOfWord += char;
        }
        start = false;

      } else {
        startOfWord += char;
      };
    } else {
      restOfWord += char;
    };
  };

  if (startOfWord.length === 0) {
    startOfWord = "w";
  }
  return restOfWord + startOfWord + "ay";
};

function processSentence(sentence) {
  var processedSentence = "";
  var word = "";

  for (var i = 0; i < sentence.length; i++) {
    var char = sentence.charAt(i);
    if (/[a-z]/i.test(char)) {
      word += char;
    } else {
      processedSentence += translateWord(word);
      word = "";
      processedSentence += char;
    };
  };
  processedSentence += translateWord(word);

  return processedSentence;
};



$(document).ready(function() {

  var sentence = prompt("enter a sentence");
  alert(processSentence(sentence));

});
