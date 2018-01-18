
function translateWord(word) {
  if (/[aeiou]/.test(word.charAt(0))) {
    word += "way"
  }

  return "the word is " + word;
};

$(document).ready(function() {

  var word = prompt("enter a word");
  alert(translateWord(word));

});
