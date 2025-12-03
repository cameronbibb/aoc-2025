import fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf-8').trim().split(',');

function findInvalidIDs(idRanges) {
  let sum = 0;
  idRanges.forEach(range => {
    let [low, high] = range.split('-');
    for (let i = parseInt(low); i <= parseInt(high); i++) {
      
    }
  });

  return sum;
}

findInvalidIDs(input);