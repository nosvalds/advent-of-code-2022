import { assert } from 'console'
import fs from 'fs'

const map = {
    A: 'X', B: 'Y', C: 'Z'
}

const loseMap = {
    A: 'Z', B: 'X', C: 'Y'
}

const winMap = {
    A: 'Y', B: 'Z', C: 'X'
}
const scoreMap = { 
                A: 1, // Rock 
                B: 2, // Paper
                C: 3, // Scissors
                X: 1, // Lose
                Y: 2, // Draw
                Z: 3  // Win
                }

const scores = [ 3, 0 , 6]

const scoreMatch = (player1, player2) => {
    const outcome = scoreMap[player1] - scoreMap[player2]
    if (outcome >= 0) {
        return scores[outcome] + scoreMap[player2]
    }
    return scores[outcome + 3] + scoreMap[player2]
}

const getPlayer2 = (player1, outcome) => {
    if (outcome === 'Y') {
        return map[player1]
    }
    if (outcome === 'X') {
        return loseMap[player1]
    }
    if (outcome === 'Z') {
        return winMap[player1]
    }
}

const calulateScore = (filePath) => {

    const file = fs.readFileSync(filePath)

    let fileArray = file.toString().split('\n')
    const matches = fileArray.map((val) => val.split(' '))
    return matches.reduce((totalScore, match) => {
        const player2 = getPlayer2(match[0], match[1])
        return totalScore + scoreMatch(match[0], player2)
    },0)
}

// Test
console.log(calulateScore('example_input.txt'))
assert(calulateScore('example_input.txt') === 12)

// Answer 
console.log(`Answer: ${calulateScore('input.txt')}`)