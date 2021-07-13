const {question} = require("readline-sync")
const {displayWordSoFar, isGameWon, wrongGuesses} = require("./gamelogic")
let letter = ""

function game(word, guesses) {
    console.log(displayWordSoFar(word, guesses))
    console.log("Dit heb je tot nu toe geraden: " + guesses)
    console.log("Aantal foute letters " + wrongGuesses(word, guesses))

    while (true) {
        letter = question("Raad een letter: ")
        if (letter.length === 1) {
            break
        } else {
            console.log("Er mag maar één letter tegelijk worden ingegeven!")
        }
    }       // const letter = question("Raad een letter: ");

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
