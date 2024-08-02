// write the program to convert the string to array and reverse the string word by word where it has placed

const str3 = "nammuru bengaluru alla kumbara nagenahalli";

ar = str3.split(" ")
console.log(ar)

finalstr = ''

for (i = 0; i <= ar.length - 1; i++) {

    var str = ar[i].split("").reverse().join("");

    finalstr = finalstr + " " + str
}

console.log(finalstr.trim())