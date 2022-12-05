import { assert } from 'console'
import fs from 'fs'


const getTopThreeCalsTotal = (filePath) => {

    const file = fs.readFileSync(filePath)

    let fileArray = file.toString().split('\n')
    fileArray.push('')
    let elfCals = []
    fileArray.reduce((acc, value) => {
        if (value !== '') {
            acc += Number(value)
        } else {
            elfCals.push(acc)
            acc = 0
        }
        return acc
    },0)
    return elfCals.sort((a,b) => b -a ).slice(0,3).reduce((total, val) => total + val)
}

// Test 2
console.log(getTopThreeCalsTotal('example_input.txt'))
assert(getTopThreeCalsTotal('example_input.txt') === 45000)
// Answer 2
console.log(`Answer 2: ${getTopThreeCalsTotal('input.txt')}`)

