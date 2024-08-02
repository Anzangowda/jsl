//to print the pairs in given array in javascript

const arr = [2, 4, 3, 5, 6, 9, 7, 6, 8];
function pair(arr, targetSum) {
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
}
const targetSum = 8;
const result = pair(arr, targetSum);
console.log('Pairs with sum', result);