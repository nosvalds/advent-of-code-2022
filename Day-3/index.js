import { assert } from 'console'
import fs from 'fs'

const priority = 'abcdefghijklmnopqrstuvwxyz'
const allPriority = priority + priority.toUpperCase()

const findSimilarChar = (string1, string2) => {
    let res = ''
    string1.split('').every((char) => {
        if (string2.includes(char)) { 
            res = char
            return false
        }
        return true
    })
    return res
}



const calulateTotalPriority = (filePath) => {

    const file = fs.readFileSync(filePath)

    let fileArray = file.toString().split('\n')
    const matches = fileArray.reduce((total, val) => total + allPriority.indexOf(findSimilarChar(val.slice(0, val.length/2), val.slice(val.length/2))) + 1
    , 0)
    return matches
}

// Test
console.log(calulateTotalPriority('/Users/nosvalds/Projects/advent-of-code/Day-3/example_input.txt'))
assert(calulateTotalPriority('example_input.txt') === 157)

// Answer 
console.log(`Answer: ${calulateTotalPriority('input.txt')}`)