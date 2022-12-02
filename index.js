import { assert } from 'console'
import fs from 'fs'


const getMaxCalories = (filePath) => {

    const file = fs.readFileSync(filePath)

    const fileArray = file.toString().split('\n')

    let maxCals = 0
    fileArray.reduce((acc, value) => {
        if (value !== '') {
            acc += Number(value)
        } else {
            maxCals = maxCals > acc ? maxCals : acc
            acc = 0
        }
        return acc
    },0)
    return maxCals
}

// Test 1
assert(getMaxCalories('example_input.txt') === 24000)
// Answer 1
console.log(`Answer 1: ${getMaxCalories('input.txt')}`)
