
// declare variables
var win = 0;
var lose = 0;
var remain = 10;
var list = [
    { q: "nirvana", d: "_ _ _ _ _ _ _" },
    { q: "bush", d: "_ _ _ _ " },
    { q: "candlebox", d: "_ _ _ _ _ _ _ _ _" },
    { q: "mudhoney", d: "_ _ _ _ _ _ _ _" },
    { q: "soundgarden", d: "_ _ _ _ _ _ _ _ _ _ _" },
    { q: "melvins", d: "_ _ _ _ _ _ _ " },
    { q: "silverchair", d: "_ _ _ _ _ _ _ _ _ _ _" },
    { q: "pearl jam", d: "_ _ _ _ _   _ _ _" },
    { q: "stone temple pilots", d: "_ _ _ _ _   _ _ _ _ _ _   _ _ _ _ _ _" },
    { q: "alice in chains", d: "_ _ _ _ _   _ _   _ _ _ _ _ _" },
    { q: "meat puppets", d: "_ _ _ _   _ _ _ _ _ _ _" }
]

var counter = [Math.floor(Math.random() * list.length)];
var cPick = list.q[counter];
var band = cPick;
var blanks = list.a[counter];

// open page w/ start button



// click button to start



// game

document.onkeyup = function (_event) {

    var uPick = _event.key;

    if (/^[A-Za-z]+$/.test(userGuess) === true) {

        
    }

    else {
        alert("Invalid Input");
    }

}