function hasTargetSum(array, target) {
  // for (let i=0; i<array.length; i++) {
  //   const complement = target - array[i];
  //   for (let j=i+1; j < array.length; j++) {
  //     if (array[j] === complement) return true;
  //   }
  // }
  // return false;

  const seenNumbers = {};
  for(let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (seenNumbers[complement]) return true;
    seenNumbers[array[i]] = true;
  }
  return false;

}

/* 
  Write the Big O time complexity of your function here
  Runtime: O(n^2)
  Space: O(n)
*/

/* 
  iterate through each number in the array
    for the current number, identify a complement that adds to the target (comp = target -num)
    iterate through the rest of the array
      check if the number is out complement
      if so, return true

    if i reaches the end of the array, return false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
