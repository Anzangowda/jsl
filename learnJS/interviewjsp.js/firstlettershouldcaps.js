//to print the first letter should be capital letter in string in javascript

function caps(str) 
{
    return str.charAt(0).toUpperCase() + str.slice(1);
}
let instr ="nagamani";
let result = caps(instr);
console.log(result);