const {question} = require("readline-sync")
const {displayWordSoFar, isGameWon, wrongGuesses} = require("./gamelogic")
let letter = ""

function game(word, guesses) {
    console.log(displayWordSoFar(word, guesses))
    // alleen als guesses letters bevat wordt onderstaande zin gelogged, vind ik netter
    if (guesses.length) {
        console.log("Dit heb je tot nu toe geraden: " + guesses)
    }
    console.log("Aantal fout geraden letters: " + wrongGuesses(word, guesses))

    // loop om het ingegeven antwoord te controleren
    // pas wanneer het antwoord één letter bevat wordt er uit de loop gesprongen
    while (true) {
        letter = question("Raad een letter: ")
        if (letter.length === 1) {
            break
        } else {
            console.log("Er mag maar één letter tegelijk worden ingegeven!")
        }
    }

    // voeg de geraden letter toe aan de array met guesses
    guesses.push(letter.toLowerCase())


    if (isGameWon(word, guesses)) {
        console.log("Super, gefeliciteerd!")
        return
    }
    if (wrongGuesses(word, guesses) === 7) {
        console.log("Jammer, je hebt er 7 fout!")
        return
    }


    // volgende ronde! we roepen game nog een keer aan
    game(word, guesses)

}

console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`)

game("javascript", [])
