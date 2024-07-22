// data types of javascript
// two types of data types
// 1 primitive data types  2 non primitive data types
//  primitive data types
// number
// string
// boolean its gives true or false value
// undefined
//Null
x=10
y=20 // it is number data type
r=x+y

z="40" // it is string data type ,  within the quote compiler understand as string 
var p;
q=10+"20" // here q is return  the string value because number concatinate with the string  

let m=null; // here return type is object

console.log(r)              // // output is number
console.log(typeof(r))     // output is number
console.log(typeof(x))     // output is number
console.log(typeof(z))    // output is string
console.log(p)           // output is undefined
console.log(typeof(p))   // output is undefined
console.log(q)          // output is 1020
console.log(typeof(q))  // output is string
console.log(typeof(m))  // output is object

// 2 non primitive data types
// Array
// Object
// RegExp

stu = [2,3,4,5,6,7] // it is array object and index statrt from 0
stu1 = [2,3,"raju","anji",4,5,6,"kiran",7] // it is collection of number and string array object 

console.log("the value of 4th index of Array :" +stu[4]) // out put is 6
console.log("the value of 3rd index of Array :" +stu1[3]) // out put is anji
console.log(typeof(stu)) // out put is object
console.log(typeof(stu[5])) // out put is number
console.log(typeof(stu1[3])) // out put is string

