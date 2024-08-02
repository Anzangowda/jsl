//Remove the duplicate characters in string in javascript
 
function rem(inpstr) {
    let res = "";
    for (let i = 0; i < inpstr.length; i++) {
        if (res.indexOf(inpstr[i]) === -1) {
            res += inpstr[i];
        }
    }
    return res;
}
let org = "nagamani kumbara nagenahalli";
let str = rem(org);
console.log(str);