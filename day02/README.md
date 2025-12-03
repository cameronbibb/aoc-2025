Given an input of a string of ranges, like this:

11-22,95-115,998-1012,1188511880-1188511890,222220-222224,
1698522-1698528,446443-446449,38593856-38593862,565653-565659,
824824821-824824827,2121212118-2121212124

We are looking for invalid numbers.
An invalid number is one that consists of repeated digits, such as 55, 1010, or 1185511855.

Only even length digits can contain doubles.

Parse the string of ranges into an array:
  [[11, 22],[95, 115], [998, 1012]...]

Brute force approach would be to iterate through each number in each range checking if it is invalid.

Output: Add up all of the invalid ids and return that number.



1. Parse the string of ranges into an array:
  [[11, 22],[95, 115], [998, 1012]...]

2. Iterate through the array.
  On each iteration, iterate from the low to the high number inclusively.
    For each number...
      1. check if it's even in length, if not then move to the next number
      2. init start and midpoint pointers (divide the length by 2 to get the midpoint pointer)
      3. move the pointers along, comparing the digits
      4. if you reach the end of the string then you've found and invalid number
      5. add the number to the sum

3. Return the sum after each range has been iterated through.