function displayWordSoFar(word, guesses) {
    // loop per letter over de string word en kijk of deze letter voorkomt in de array guesses
    // zo ja, plak dan de letter aan de wordToDisplay string
    // zo nee, plak een '_ ' aan de wordToDisplay string
    let wordToDisplay = ""
    for (let i = 0; i < word.length; i++) {
        if (guesses.includes(word.charAt(i))) {
            wordToDisplay += word.charAt(i) + " "
        } else {
            wordToDisplay += "_ "
        }
    }
    return wordToDisplay
}

function isGameWon(word, guesses) {
    // wanneer de displayWordSoFar functie geen streepje bevat is het spel gewonnen en geeft de functie true terug
    return !(displayWordSoFar(word, guesses).indexOf('_') > -1);
}

function wrongGuesses(word, guesses) {
    // om het aantal foute antwoorden makkelijker bij te houden heb ik de functie isGameWon veranderd in wrongGuesses
    // loop over de Array guesses
    // bij elk item die niet in de string word voorkomt moet de teller wrongGuesses worden opgehoogd
    // geef de wrongGuesses terug
    let wrongGuesses = 0
    for (let i = 0; i < guesses.length; i++) {
        if (!word.includes(guesses[i])) {
            wrongGuesses += 1
        }
    }
    return wrongGuesses
}

module.exports = {
    displayWordSoFar: displayWordSoFar,
    isGameWon: isGameWon,
    wrongGuesses: wrongGuesses,
}
