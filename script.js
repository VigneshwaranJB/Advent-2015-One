//  '(' means up by one floor
//  ')' means down by one floor



// what floor do the instructions take Santa?
const fs = require('fs');

function questionOne() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc, currentValue) => {
            if (currentValue === '(') {
                return acc += 1
            } else if (currentValue === ')') {
                return acc -= 1
            }
        }, 0)
        console.log('floor:', answer);

    })
}

questionOne();



// the position of the character that causes Santa to first enter the basement

function questionTwo() {
    fs.readFile('./santa.txt', (err, data) => {
        const directions = data.toString();
        const directionsArray = directions.split('');
        let accumulator = 0;
        let counter = 0;
        const answer = directionsArray.some(currentItem => {
            if (accumulator < 0) {
                console.log(answer);
            }
            if (currentItem === '(') {
                accumulator += 1
            } else if (currentItem === ')') {
                accumulator -= 1
            }
            counter++;
            return accumulator < 0;
        })
        console.timeEnd('santa-time');
        console.log('basement entered at', counter);
    })
}

questionTwo();