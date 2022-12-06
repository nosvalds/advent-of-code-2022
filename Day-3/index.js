import { assert } from 'console'
import fs from 'fs'

const priority = 'abcdefghijklmnopqrstuvwxyz'
const allPriority = priority + priority.toUpperCase()

const getPriority = (char) => allPriority.indexOf(char) + 1

const findSimilarChar = (string1, string2, string3) => {
    let res = ''
    string1.split('').every((char) => {
        if (string2.includes(char) && string3.includes(char)) { 
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
    let count = 0
    for (let index = 0; index < fileArray.length; index += 3) {
        const elf1 = fileArray[index];
        const elf2 = fileArray[index + 1];
        const elf3 = fileArray[index + 2];
        const char = findSimilarChar(elf1, elf2, elf3)
        count += getPriority(char)
    }
    return count
}

// Test
console.log(calulateTotalPriority('/Users/nosvalds/Projects/advent-of-code/Day-3/example_input.txt'))
assert(calulateTotalPriority('example_input.txt') === 70)

// Answer 
console.log(`Answer: ${calulateTotalPriority('input.txt')}`)