// Sum of numbers in string

let num = '3 7 2 5 8'
let splitNum = num.split(' ').map(Number)
let sum = 0
for (let i = 0; i < splitNum.length; i++) 
     sum += splitNum[i]

console.log(sum)

// Output: 25


// Sum of odd numbers in string

let num = '2 6 3 9 7'
let splitNum = num.split(' ').map(Number)
let sum = 0
    for (let i = 0; i < splitNum.length; i++) {
        if (splitNum[i] % 2 !== 0) {
            sum += splitNum[i]
        }
    }
console.log(sum)

// Output: 19

// Function that takes seconds for input and gives you minutes, hours and days.

function secondsTo(seconds) {
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    return ('Minutes: ' + minutes + ' Hours: ' + hours + ' Days: ' + days)
}
console.log(secondsTo(86400))

// Output: Minutes: 1440 Hours: 24 Days: 1

