function displayWordSoFar(word, guesses) {
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
    return !(displayWordSoFar(word, guesses).indexOf('_') > -1);
}

function wrongGuesses(word, guesses) {
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
