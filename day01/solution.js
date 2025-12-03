import fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');

function decipherPassword (rotations) {

  let position = 50; //this is the starting position of the dial
  let count = 0; //this is number of times the dial lands on 0

  rotations.forEach(rotation => {
    let direction = rotation[0];
    let rotationNum = parseInt(rotation.slice(1));
    let touchZero = Math.floor(rotationNum / 100);
    let clicks = rotationNum % 100;

    if (direction === "L") {
      position -= clicks;
    } else {
      position += clicks;
    };

    if (position === 0 || position === 100) {
      position = 0;
      count++;
    } else if (position < 0) {
      //if position started at 0 don't add to the count
      if (position + clicks !== 0) {
        count++;
      }
      position += 100;
    } else if (position > 100) {
      //if position started at 0 don't add to the count
      if (position - clicks !== 0) {
        count++;
      }
      position -= 100;
    }

    count += touchZero;

    // console.log(rotation);
    // console.log("direction: ", direction);
    // console.log("clicks: ", clicks);
    // console.log("count: ", count);
    // console.log("position: ", position);
  });

  
  return count;
}

console.log(decipherPassword(input));