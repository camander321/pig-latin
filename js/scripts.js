
/*function translateWord(word) {
  if (/[aeiou]/.test(word.charAt(0))) {
    word += "way";
  } else {

  }

  return "the word is " + word;
};*/

function translateWord(word) {
  startOfWord = "";
  restOfWord = "";
  start = true;

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
    }

  };
  if (startOfWord.length === 0) {
    startOfWord = "w";
  }
  return restOfWord + startOfWord + "ay";
};

$(document).ready(function() {

  var word = prompt("enter a word");
  alert(translateWord(word));

});
