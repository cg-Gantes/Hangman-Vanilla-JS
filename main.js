window.onload = function () {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let categories; //array of topics
  let chosenCategory; //Selected category
  let getHint; //Word get hint
  let word; //Selected word
  let guess; //guess
  let guesses = []; //stored guesses
  let lives; //lives
  let counter; //count correct guess
  let space; //number of spaces in word '-'

  //Get elements
  let showLives = document.getElementById("myLives");
  let showCategory = document.getElementById("sCategory");
  let hint = document.getElementById("hint");
  let showClue = document.getElementById("clue");
};
