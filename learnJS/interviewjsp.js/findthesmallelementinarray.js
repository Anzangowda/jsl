//Find the smallest number in array in javascript 
function largest(arr) { 
    let i; 
    let min = arr[0];
    for (i = 1; i < arr.length; i++) { 
        if (arr[i] < min) 
            min = arr[i]; 
    } 
    return min; 
} 
let arr = [22, 65, 1, 39]; 
console.log(largest(arr));