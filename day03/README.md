Here are the actions teased out:

Moving through the list battery banks.
Moving through each battery bank selecting batteries.
  -Going to move through the battery bank until we find all the batteries we need, which is 12.
Concatenating selected digits to a total.


Find Next Battery
  1. Input needed
    a. starting point of search
    b. how many batteries are left in bank
    c. how many batteries we still need
  2. Send runner forward to check for a larger battery size
  3. If it finds it then that's our new selection for a battery
  4. Keep checking for a larger battery until batteries remaining to check are less than the batteries we still needed
  5. Once found, return the battery (location in the bank)

  if you need 10 batteries
  if there are 9 batteries remaining and you're on the 10th, then you can't move forward any more. You must use the current battery selected or the one runner is on.

