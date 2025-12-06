import fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf-8').trim().split(',');

function findInvalidIDs(idRanges) {
  let sum = 0;
  idRanges.forEach(range => { // iterate through each range
    let [low, high] = range.split('-');
    for (let number = parseInt(low); number <= parseInt(high); number++) {
      let numberString = String(number);

      let start = 0;
      let end = 1;
      while (end <= Math.floor(numberString.length / 2)) {
        let substring = numberString.slice(start, end);
        
        if (numberString.length % substring.length === 0) {
          let times = numberString.length / substring.length;
          if (substring.repeat(times) === numberString) {
            sum += parseInt(numberString);
            break;
          }
        }

        end++;
      }
    };
  });

  return sum;
}

console.log(findInvalidIDs(input));