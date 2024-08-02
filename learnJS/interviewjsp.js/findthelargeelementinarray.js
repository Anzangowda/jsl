//Find the largest number in array in javascript 
function largest(arr) { 
    let i; 
    let max = arr[0];
    for (i = 1; i < arr.length; i++) { 
        if (arr[i] > max) 
            max = arr[i]; 
    } 
    return max; 
} 
let arr = [22, 65, 1, 39]; 
console.log(largest(arr));