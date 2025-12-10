import fs from 'fs';

const input = fs.readFileSync('example_input.txt', 'utf-8').trim().split('\n');

// console.log(input);

function markForRemoval(wall, row, col) {
  //returns true if the roll can be removed or false if not
  //if 
  console.log(wall[row - 1][col - 1]);
  console.log(wall[row - 1][col]);
  console.log(wall[row - 1][col + 1]);
  console.log(wall[row][col - 1]);
  console.log(wall[row][col]);
  console.log(wall[row][col + 1]);
  console.log(wall[row + 1][col - 1]);
  console.log(wall[row + 1][col]);
  console.log(wall[row + 1][col + 1]);
}

function calculateRollAccessNumber(wall) {
  let total = 0;
  wall.forEach((row, rowIdx) => {
    // if (markForRemoval) total++;
    for (let colIdx = 0; colIdx < row.length; colIdx++) {
      markForRemoval(wall, rowIdx, colIdx);
    }
  });
  return total;
}

console.log(calculateRollAccessNumber(input));