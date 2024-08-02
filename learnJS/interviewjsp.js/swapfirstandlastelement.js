//to Swap First and Last elements in Array
let arr1 = [10, 20, 30, 40, 50]; 
let temp = arr1[0];
console.log("before swapping",arr1)
arr1[0] = arr1[arr1.length - 1]; 
arr1[arr1.length - 1] = temp; 
console.log("After swapping:", arr1);