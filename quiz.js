console.log("Begin Program");

var prince // symbol used to create the tree, specified by the user

var willisT // height of the tree, specified by the user

var space = " "; // var for space to left of symbol chose

var planet // planet will be equal to the number of spaces needed

var numP // numP will be equal to the number of symbols needed

var cave // empty variable

var tree = ""; // the tree

var buttonPress = document.getElementById("buttonID").addEventListener("click", middle);

var princeField = document.getElementById("bSymbol");

var willisTField = document.getElementById("bHeight");

princeField.addEventListener("keypress", enterKey);

willisTField.addEventListener("keypress", enterKey);

function enterKey (e) {
  var pressKey = e.keyCode;
  if (pressKey==13) {
    middle();
  }
}

cave = {};

function middle () {
  cave.prince = princeField.value;
  cave.willisT = willisTField.value;
  submitB(cave);
}

function submitB (peyton) {

  if (peyton.prince === "" || peyton.willisT === "") {
    alert("Please enter a valid input");
    return;
  }

  for (var i = 1; i <= peyton.willisT; i++) {

    // assigning a value to planet, height of tree - i
    planet = peyton.willisT - i;

    // assigning a value to numP, proportional to i, always odd for symmetry
    numP = (2 * i) - 1;

    tree += space.repeat(planet) + peyton.prince.repeat(numP) + "\n";
  }
  console.log(tree);

  console.log("End Program");
}

