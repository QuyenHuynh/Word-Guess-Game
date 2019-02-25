//create global variables
var correctGuess = [];
var incorrectGuess = [];
var underScores = [];
var wins = 0;
var losses = 0;
var guessesRemaining = 12;

//create array of possible word choices
var dessertsList =
    ["tiramisu", "brownie", "sundae", "cookie", "gelato", "donut", "eclair", "cupcake",
        "chocolate", "cheesecake", "souffle", "crepe", "pudding", "fudge", "tart", "custard", "muffin",
        "praline", "popsicle", "truffle"
    ];

//Randomly selects a word from dessertsList array
function chooseWord() {
    chosenIndex = Math.floor(Math.random() * dessertsList.length);
    chosenWord = dessertsList[chosenIndex];
    return chosenWord;
}
console.log(chooseWord());

//generate underscores based on length of word randomly chosen
function createUnderscores() {
    for (var i = 0; i < chosenWord.length; i++) {
        underScores.push("_");
    }
    document.getElementById("underscores").innerHTML = "Word: " + underScores;
    return underScores;
    
}
console.log(createUnderscores());

// defines user keystrokes as guesses
document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(event);
    //If correct, push userGuess into "correctGuess" array.
    if (chosenWord.indexOf(userGuess) > -1) {
        correctGuess.push(userGuess);
        console.log(correctGuess);
        document.getElementById("guessedLetters").innerHTML = "Letters already guessed: " + correctGuess + incorrectGuess;
        // loop through chosen word and replace underscores with userGuess
        for (i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] == userGuess) {
                underScores.splice(i, 1, userGuess);
                console.log(underScores);
                document.getElementById("underscores").innerHTML = "Word: " + underScores;
            }
        }
    }
    //If incorrect, push userGuess into "incorrectGuess" array.
    if (chosenWord.indexOf(userGuess) === -1) {
        incorrectGuess.push(userGuess);
        console.log(incorrectGuess);
        //decrement number of guesses
        guessesRemaining--;
        console.log(guessesRemaining);
        document.getElementById("guessesRemaining").innerHTML = "Guesses remaining: " + guessesRemaining;
        document.getElementById("guessedLetters").innerHTML = "Letters already guessed: " + correctGuess + incorrectGuess;
    }
    //winning conditions
    if ((guessesRemaining >= 1) && (underScores.join("") == chosenWord)) {
        wins++;
        console.log(wins);
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        resetGame();
    }
    //losing conditions
    if (guessesRemaining == 0) {
        losses++;
        console.log(losses);
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        resetGame();
    }
}
// Function to reset game to initial state
function resetGame() {
    underScores = [];
    chooseWord();
    console.log(chooseWord());
    createUnderscores();
    guessesRemaining = 12;
    correctGuess = [];
    incorrectGuess = [];
}

//DOM manipulation with access to HTML div id
document.getElementById("guessesRemaining").innerHTML = "Guesses remaining: " + guessesRemaining;
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;
document.getElementById("guessedLetters").innerHTML = "Letters already guessed: " + correctGuess + incorrectGuess;
