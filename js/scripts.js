
function translateWord(word) {
  return "the word is " + word;
};

$(document).ready(function() {

  var word = prompt("enter a word");
  alert(translateWord(word));

});
