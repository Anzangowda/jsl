// To count the frequency of each character in javascript

function input1(str)
{
    const newstring={};
    for(let char of str)
    {
        if(newstring[char])
        {
            newstring[char]++;
        }
        else
        {
            newstring[char]=1;
        }
    }
    return newstring;
}
const input="anantapur"
const fre=input1(input);
console.log(fre);