import fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf-8').trim().split('\n');

console.log(input);

function findNextBattery(location, bank, batteriesInBank, batteriesNeeded) {
  let checker = location;
  let batteriesRemaining = batteriesInBank - (location + 1);
  while (batteriesRemaining >= batteriesNeeded) {
        checker++;
        batteriesRemaining--;
        let checkedBatteryJoltage = parseInt(bank[checker]);
        let selectedBatteryJoltage = parseInt(bank[location]);
        if (checkedBatteryJoltage > selectedBatteryJoltage) {
          location = checker;         //if a higher number is found put the anchor at the runner
        }
  }
  return location;
}


function findLargestJoltage (batteries) {
  let totalJoltage = 0;
  
  batteries.forEach(bank => { //iterating through list of battery banks
    
    let bankJoltage = '';
    let batteriesInBank = bank.length;
    let batteriesNeeded = 12;

    //FIND BATTERY
    let location = 0; //initialize anchor here because it will move forward and we don't want to keep setting it to zero

    while (batteriesNeeded > 0) { //Moving through each battery bank selecting batteries
      //find next battery joltage
      //keep moving the anchor forward until it reaches the largest joltage amount while batteries remaining is greater than batteriesNeeded
      
      location = findNextBattery(location, bank, batteriesInBank, batteriesNeeded);

      bankJoltage += bank[location];
      batteriesNeeded--;
      location++;
    }

    //convert bankJoltage to number and add it to the totalJoltage
    console.log(bankJoltage);
    totalJoltage += parseInt(bankJoltage);

  });

  return totalJoltage;
}

console.log(findLargestJoltage(input));