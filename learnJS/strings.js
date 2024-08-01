// we can declare strings as below

let str ="anji"
let str1 =  'anji'
let str2 = `raghu`

// here we combine the string with tthe help of + operator
// example 

finstr= str1+str2
console.log(finstr)

// here we combine the string with tthe help of concat() 
// example 

finstr2 = str1.concat(str2)


// if we want to get a string like this str3 = "first anji second person raghu" we need to embedded strings as given below

str4= `first person ${str1} second person ${str2}`
console.log(str4)

// if we combined with the inegers with strings by using + and - operators will give diffenret outputs 
// example 
// 20+"30"  ,    20-"10"    , 20+"name"  , 20-"name"

str5=20+"30"
console.log(str5) // here number converted as string and result in 2030
console.log(typeof(str5)) // typeof() will print type of variable

str6=20-"30"
console.log(str6) // here we will get number type data like output is 10
console.log(typeof(str6))

str7=20+"anji"
console.log(str7) // here nuumber converted into string
console.log(typeof(str7))

str8=20-"anji"
console.log(str8) // here the out put is NaN (not a number)
console.log(typeof(str8)) // type is number

// to find charecter length of the string we will use length

str9="Anjineyulu T" // here space is also a count as charecter
console.log(str9.length) // here prints charcter are 12

// if we want to find the charcter name by index 

console.log(str9[3]) // here it will print charecter is i

// we can get the charcter name by index by using charAt()

console.log(str9.charAt(2)) // hee it will print j

// we can convert all the charecters to lowercase and uppercase 

str11=str9.toLowerCase()

console.log(str11)

str12=str9.toUpperCase()

console.log(str12)

// if we want to remove the white spaces at begining and at ending we will use trim(), 
//and it will not remove the bw the string space
// example 

str13="     Anjineyulu is very good boy       "

console.log(str13.trim())

// if we want to know thw any charecter or part of the string is present or not we will usw includes()

console.log(str13.includes("z")) // it will retrun boolean value as false 

// if we want to know the substring from index to index

str14="Anjineyulu"

console.log(str14.substr(1,4)) // output is njin

// if we want to remove the charecters at some point from begining
// we will use slice()

console.log(str14.slice(4))// output is neyulu

// if we want to print the string in multiple lines we will use \n bw the strings

str15="anji\ngirish"

console.log(str15)

// if we want to print the space bw the string we will use \t where we need space

str16="anji\tgirish"

console.log(str16)

// we can declare the string is another way like object with the new keyword

const str17 = new String("Anjineyulu")

console.log(typeof(str17))

// if we want to convert this &10,00" to a number and  replace the special charecter values in the string we will use replace()
// example str18="$10,00"

str18="&10,00"

str19=Number(str18.replace("&","").replace(",",""))

console.log(str19) // here we will get 1000

str19="Anjineyulu"

// if we want to split the string we will use split()  it will return array object.

console.log(str19.split()) // it will return array object
console.log(str19.split(""))
console.log(str19.split("ne"))










