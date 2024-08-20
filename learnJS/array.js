// array is an object its holds any type of data
// array index start with 0,1,2,3,4,5......


const arr=[1,2,3,4,5,9,7,6]
// if we want to get the data of index 2
console.log(arr[2])
// if we want to get the length of the array
console.log(arr.length)
// if we want to get the 2nd element from end of array
console.log(arr[arr.length-2])
// if we want to add the element at the end of an array we will use push method
// example
var arr1=["anji","gowda","sumanth"]
console.log("before push")
console.log(arr1)
arr1.push('lokesh')
console.log("after push ")
console.log(arr1)
// if we want to add the element at begining of an arraywe will use unshift method
console.log("before unshift")
console.log(arr1)
arr1.unshift("shiva")
console.log("after unshift")
console.log(arr1)
// if we want to remove the element at end of the array we will use pop method
console.log("before pop")
console.log(arr1)
arr1.pop()
console.log("after pop")
console.log(arr1)
// if we want to remove the element at begining of the array we will use shift method
console.log("before shift")
console.log(arr1)
arr1.shift()
console.log("after after shift")
console.log(arr1)
// if we want to sort the array we will use sort(), it will sort  by assending order
// example 
arr2=[35,76,89,56,36,74,92,64,23,25,34,12,1.0]
console.log("before sort")
console.log(arr2)
arr3=arr2.sort()
console.log("after sort")
console.log(arr3)
// if we want to reverse the array we will use reverse ()
console.log("before reverse")
console.log(arr3)
arr4=arr3.reverse()
console.log("after reverse")
console.log(arr4)
// if we want to replace the value of prticular index
// example 
var arr5=["anji","gowda","sumanth","satish","nagendra","raghu"]

console.log("before replaced")
console.log(arr5)
// here i replace the name gowda with bharath at index 1
arr5[1]="bharath"
console.log("after replaced")
console.log(arr5)
// if we want to know the whether the element is present or not we will use includes()
// its will return true or false value

arr5.includes("sumanth")

console.log(arr5.includes("sumanth")) // returns the true value

// if we want to know the indexof element we will use indexOf()
// it will print the index numer of particular element
// example var arr5=["anji","gowda","sumanth","satish","nagendra","raghu"]
// want to know the index of satish

arr5.indexOf("satish")
console.log(arr5.indexOf("satish"))

// if we want to concatinate with the one another we will use concat()
// example 

var arr6 = [3,4,7,5,6]
var arr7=["anji","gowda","sumanth","satish","nagendra","raghu"]

var arr8=arr6.concat(arr7)
console.log("after concat")
console.log(arr8)

// if we want to get or remove the part of arrray we will use slice()

// example arr7=["anji","gowda","sumanth","satish","nagendra","raghu"]


var arr9=["anji","gowda","sumanth","satish","nagendra","raghu"]

console.log("before slice")

console.log(arr9)

console.log("after slice")

console.log(arr9.slice(2)) // here it will remvove the first two elements remaing part will be printed

//if we want removew or replace existing elements we will use splice()
var arr13=["anji","gowda","sumanth","satish","nagendra","raghu"]
console.log("before splice")
console.log(arr13)
console.log("after splice")
arr10=arr13.splice(2,4)
console.log(arr10)

// if we want to get the string from array elements we will use join()
// join () will join the array elements

var arr11=["anji","gowda","sumanth","satish","nagendra","raghu"]

str=arr11.join("")

console.log(str)

// if we want to convert string as a arrry we will use split()
// and split() will spilt the string

let str1 = "Anjineyulu"
console.log(str1.split(""))

// if we want to split the based on space, we need give space bw thw double quote ex. split(" ")

console.log(str1.split(" ")) // str value has no space it will print as same and give the array obj

let str2="padma bushan"

console.log(str2.split("")) // here not given space inside the split() . so split the charecters along with the space 

console.log(str2.split(" ")) // here given space inside the split() so split the words where it has space

// if we want to print the based on charecter wise means if we pass the any charecter in the split()
// for example str="harikrishna" , then split("i")

let str3 = "harikrishna"

console.log(str3.split("i"))






