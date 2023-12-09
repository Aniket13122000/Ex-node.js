function findOddOccurringElements(arr) {
    let countMap = new Map();
  
    // Count occurrences of each element in the array
    for (let num of arr) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    }
  
    let element1, element2;
  
    // Find the two elements occurring an odd number of times
    for (let [key, value] of countMap.entries()) {
      if (value % 2 !== 0) {
        if (!element1) {
          element1 = key;
        } else {
          element2 = key;
          break;
        }
      }
    }
  
    return [element1, element2];
  }
  
  // Example usage:
  const arr = [5, 3, 8, 2, 4, 2, 3, 4, 3, 3,];
  const [oddElement1, oddElement2] = findOddOccurringElements(arr);
  console.log(`The odd occurring elements are ${oddElement1} and ${oddElement2}`);
  