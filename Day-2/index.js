import { assert } from 'console'
import fs from 'fs'

const scoreMap = { 
                A: 1, // Rock 
                B: 2, // Paper
                C: 3, // Scissors
                X: 1, // Rock 
                Y: 2, // Paper
                Z: 3  // Scissors
                }

const scores = [ 3, 0 , 6]

const scoreMatch = (player1, player2) => {
    const outcome = scoreMap[player1] - scoreMap[player2]
    if (outcome >= 0) {
        return scores[outcome] + scoreMap[player2]
    }
    return scores[outcome + 3] + scoreMap[player2]
}

const calulateScore = (filePath) => {

    const file = fs.readFileSync(filePath)

    let fileArray = file.toString().split('\n')
    const matches = fileArray.map((val) => val.split(' '))
    return matches.reduce((totalScore, match) => {
        return totalScore + scoreMatch(match[0], match[1])
    },0)
}

// Test
console.log(calulateScore('example_input.txt'))
assert(calulateScore('example_input.txt') === 15)

// Answer 
console.log(`Answer: ${calulateScore('input.txt')}`)