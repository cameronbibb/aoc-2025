import fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');

console.log(input);

/* 
iterate through each element in the input array
for each number string
  1.  init pointers: anchor and runner
      init pointers: anchor2 and runner2
  2.  Find the first digit of the number we are creating
        increment the anchor pointer until the next number is smaller than the current number
        increment the runner the pointer
          if it lands on a number larger than anchor, move anchor to runner, increment runner until it reaches the next to last character
  3. Find the second digit of the number we are creating
        init anchor2 to the digit after anchor
        move anchor2 until the next number is smaller than the current number
        init runner2 and increment runner2, if it lands on a number larger than anchor2, move anchor2 to runner2, increment runner2 until it reaches the end of the string
  4. Once you have created the largest number, add it to the sum and move to the next number
  5. return the sum
*/

function findLargestJoltage (batteries) {
  let totalJoltage = 0;
  
  batteries.forEach(bank => {
    
    //find the first digit
    let anchor = 0;
    while (parseInt(bank[anchor]) < parseInt(bank[anchor + 1]) && anchor < bank.length - 1) {
      anchor++;
    }

    let runner = anchor + 1;
    while (runner < bank.length - 1) {
      if (parseInt(bank[runner]) > parseInt(bank[anchor])) {
        anchor = runner;
      }
      runner++;
    }

    //find the second digit
    let anchor2 = anchor + 1;
    while (parseInt(bank[anchor2]) < parseInt(bank[anchor2 + 1]) && anchor2 < bank.length) {
      anchor2++;
    }

    let runner2 = anchor2 + 1;
    while (runner2 < bank.length) {
      if (parseInt(bank[runner2]) > parseInt(bank[anchor2])) {
        anchor2 = runner2;
      }
      runner2++;
    }

    //combine the digits and add them to the sum
    let largestBankJoltage = parseInt(bank[anchor] + bank[anchor2]);
    console.log(largestBankJoltage);
    totalJoltage += largestBankJoltage;

  });

  return totalJoltage;
}

console.log(findLargestJoltage(input));