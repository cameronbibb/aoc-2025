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

    console.log(rotation);
    console.log("direction: ", direction);
    console.log("clicks: ", clicks);
    console.log("count: ", count);
    console.log("position: ", position);
  });

  
  return count;
}

console.log(decipherPassword(input));



/*

Part 1:

Parse txt file into an array of rotations.

Parse each string in the array and process the rotation.
  To get the direction use the 0 index of the string.
  To get the number use the 1 and 2 index. (In JS slice(1) will get you from the second element to the last.)

  "L" will be subtraction
  "R" will be addition
  The number will need to be converted to an integer. (Note: There's not an zeroes after the direction letter.)

  If direction is "L" then subract the clicks from the position.
  If the direction is "R" the add the clicks to the position.

  If the position is less than 0
    reset by adding 100
  If the position is equal to 100 OR 0
    set position to 0
    add 1 to the count
  If the position is greater than 0
    reset by subtracting 100



What is the max clicks that will be given?
  -looks like it's only in the hundreds


Part 2:

Any time the rotation passes zero or lands on zero, add 1 to the count.

If you have 100-199 clicks, that's going to hit zero once. So add 1 to the count.
If you have 200-299 clicks, that's going to hit zero twice. So add 2 to the count.

Divide the number of clicks by 100 and that will give you the extra times the rotation passes 0. Take the floor of this number and add it to the count.

Still need to account for whenever a number goes below zero or over 100. Add 1 to the count if this happens.


*/