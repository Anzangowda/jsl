//to print the first letter should be small letter in string in javascript
function small(inputString) 
{
    return inputString.charAt(0).toLowerCase() + inputString.slice(1);
}
let str = "Anjineyulu";
let str1 = small(str);
console.log(str1);