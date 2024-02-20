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

  //Alphabet UI

  let buttons = function () {
    myButtons = document.getElementById("buttons");
    letters = document.createElement("ul");

    for (let i = 0; i < alphabet.length; i++) {
      letters.id = "alphabet";
      list = document.createElement("li");
      list.id = "letter";
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  };

  let selectCat = function () {
    if (chosenCategory === categories[0]) {
      categoryName.innerHTML =
        "The chosen category is premier league football teams";
    } else if (chosenCategory === categories[1]) {
      categoryName.innerHTML = "The chosen category is films";
    } else if (chosenCategory === categories[2]) {
      categoryName.innerHTML = "The chosen category is cities";
    }
  };

  //create guesses ul
  result = function () {
    wordHolder = document.getElementById("hold");
    correct = document.createElement("ul");

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute("id", "my-word");
      guess = document.createElement("li");
      guess.setAttribute("class", "guess");
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  };

  //show lives
  let comments = function () {
    showLives.innerHTML = "You have " + lives + "lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (let i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.lenght) {
        showLives.innerHTML = "You Win!";
      }
    }
  };

  let animate = function () {
    let drawMe = lives;
    drawArray[drawMe]();
  };

  //Hangman

  let canvas = function () {
    myStickMan = document.getElementById("stickman");
    context = myStickMan.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };

  let head = function () {
    myStickMan = document.getElementById("stickman");
    context = myStickMan.getContext("2d");
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
  };

  draw = function ($pathFromX, $pathFromY, $pathTox, $pathToy) {
    context.moveTO($pathFromX, $pathFromY);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
  };

  frame1 = function () {
    draw(0, 150, 150, 150);
  };

  frame2 = function () {
    draw(10, 0, 10, 600);
  };
  frame3 = function () {
    draw(0, 5, 70, 5);
  };
  frame4 = function () {
    draw(60, 5, 60, 15);
  };
  torso = function () {
    draw(60, 36, 60, 70);
  };
  rightArm = function () {
    draw(60, 46, 100, 50);
  };
  leftArm = function () {
    draw(60, 46, 20, 50);
  };
  rightLeg = function () {
    draw(60, 46, 20, 50);
  };
  leftLeg = function () {
    draw(60, 70, 20, 100);
  };

  drawArray = [
    rightLeg,
    leftLeg,
    rightArm,
    leftArm,
    torso,
    head,
    frame4,
    frame3,
    frame2,
    frame1,
  ];
};
