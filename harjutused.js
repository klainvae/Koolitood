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

// Function that takes seconds for input and gives you minutes, hours and days using remainders.

function secondsToFullTime(totalSeconds) {
    const remainderOfSeconds = totalSeconds % 60; // take away all minutes
    const remainderOfMinutesInSeconds = totalSeconds % 3600; // take away all hours
    const remainderOfHoursInSeconds = totalSeconds % (3600 * 24); // take away all days
    const seconds = Math.floor(remainderOfSeconds);
    const minutes = Math.floor((remainderOfMinutesInSeconds) / 60);
    const hours = Math.floor((remainderOfHoursInSeconds) / 3600);
    const days = Math.floor(totalSeconds / (3600 * 24));
    
    
    return ('Day: ' + days + ' Hour: ' + hours + ' Minute: ' + minutes + ' Second: ' + seconds);
    }
    
    console.log(secondsToFullTime(7582));

// Output: Day: 0 Hour: 2 Minute: 6 Second: 22
