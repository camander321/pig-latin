
/*function translateWord(word) {
  if (/[aeiou]/.test(word.charAt(0))) {
    word += "way";
  } else {

  }

  return "the word is " + word;
};*/

function translateWord(word) {
  if (word.length === 0) {
    return "";
  }
  var startOfWord = "";
  var restOfWord = "";
  var start = true;

  for (var i = 0; i < word.length; i++) {
    if (start) {
      if (/[aeiou]/.test(word.charAt(i))) {
        restOfWord += word.charAt(i);
        start = false;
      } else {
        startOfWord += word.charAt(i);
      };
    } else {
      restOfWord += word.charAt(i);
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
    if (/[a-zA-Z]/.test(sentence.charAt(i))) {
      console.log("alphanum " + sentence.charAt(i));
      word += sentence.charAt(i);
    } else {
      console.log(processedSentence + " " + word);
      processedSentence += translateWord(word);
      word = "";
      processedSentence += sentence.charAt(i);
      console.log(processedSentence);
    };
  };
  processedSentence += translateWord(word);

  return processedSentence;
};



$(document).ready(function() {

  var sentence = prompt("enter a sentence");
  alert(processSentence(sentence));

});
