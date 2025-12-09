My initial solution would be a brute force approach that iterates through each row, looking at each adjacent position of each roll. It would count each position occupied by a roll and if that count was fewer than four, add one to the count of rolls that can be accessed.

This would be O(N) for each element plus what? O(N**2)??