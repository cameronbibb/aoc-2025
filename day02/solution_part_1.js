import fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf-8').trim().split(',');

function findInvalidIDs(idRanges) {
  let sum = 0;
  idRanges.forEach(range => {
    let [low, high] = range.split('-');
    for (let number = parseInt(low); number <= parseInt(high); number++) {
      let numberString = String(number);
      if (numberString.length % 2 === 0) {
        let start = 0;
        let midpoint = numberString.length / 2;
        while (midpoint < numberString.length && numberString[start] === numberString[midpoint]) {
          start++;
          midpoint++;
          if (midpoint === numberString.length) {
            sum += number;
          }
        }
      }
    };
  });

  return sum;
}

console.log(findInvalidIDs(input));