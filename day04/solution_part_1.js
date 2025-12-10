import fs from 'fs';

const input = fs.readFileSync('example_input.txt', 'utf-8').trim().split('\n');

//REMINDER!!! ONLY COUNT THE ROLLS '@' NOT THE '.', AS THE ROLLS ARE BEING REMOVED!!!

function markForRemoval(wall, row, col) {
  let rollCount = 0;
  //returns true if the roll can be removed or false if not
  const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

  for (const [dr, dc] of dirs) {
    const nr = row + dr;
    const nc = col + dc;

    if (nr < 0 || nr >= wall.length) continue;
    if (nc < 0 || nc >= wall[nr].length) continue;

    if (wall[nr][nc] === '@') rollCount++;
  }
  return rollCount < 4;
}

function calculateRollAccessNumber(wall) {
  let total = 0;
  wall.forEach((row, rowIdx) => {
    // if (markForRemoval) total++;
    for (let colIdx = 0; colIdx < row.length; colIdx++) {
      console.log(markForRemoval(wall, rowIdx, colIdx));
    }
  });
  return total;
}

console.log(calculateRollAccessNumber(input));