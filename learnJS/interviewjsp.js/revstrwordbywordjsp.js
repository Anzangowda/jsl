// want to print reverse the string at its own place

str="software testing"
str1=str.split(" ")
console.log(str1)
finalstr=""
for(let i=0;i<=str1.length-1;i++)
{
    str2=str1[i].split("").reverse().join("")
    finalstr=finalstr+""+str2
}
console.log(finalstr)