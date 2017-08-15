//Create variables and populate letter list array
var totalWins;
var totalLosses;
var guessesLeft;
var userGuess;
var computerGuess;
var yourGuessesSoFar = [];
var letterList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Establishing initial values
if (guessesLeft === undefined) {
    guessesLeft = 9;
}

if (totalWins === undefined) {
    totalWins = 0;
}

if (totalLosses === undefined) {
    totalLosses = 0;
}

//Text at the Start
document.getElementById("totalWins").innerHTML = "Total Wins:  " + totalWins;
document.getElementById("totalLosses").innerHTML = "Total Losses:  " + totalLosses;
document.getElementById("guessesLeft").innerHTML = "Guesses Left:  " + guessesLeft;
document.getElementById("yourGuessesSoFar").innerHTML = "Your Guesses So Far:  " + yourGuessesSoFar;

//Random Letter Selector
if (guessesLeft = 9) {
    computerGuess = letterList[Math.floor(Math.random() * letterList.length)];
    yourGuessesSoFar = [];
}

//Waiting for Key Up
document.onkeyup = function(event) {

    // Determines which key was pressed.
    userGuess = event.key;

    //Store Guesses in Array
    yourGuessesSoFar.push(userGuess);

    // Compare userGuess to computerGuess = true
    if (userGuess === computerGuess) {
        totalWins ++;
        guessesLeft = 9;
    }
 
    // Compare userGuess to computerGuess = false
    if (userGuess !== computerGuess) {
        guessesLeft --;
    }

    if (guessesLeft === 0) {
        totalLosses ++;
        guessesLeft = 9;
    }

    //Text as Game Proceeds
    document.getElementById("totalWins").innerHTML = "Total Wins:  " + totalWins;
    document.getElementById("totalLosses").innerHTML = "Total Losses:  " + totalLosses;
    document.getElementById("guessesLeft").innerHTML = "Guesses Left:  " + guessesLeft;
    document.getElementById("yourGuessesSoFar").innerHTML = "Your Guesses So Far:  " + yourGuessesSoFar;

};