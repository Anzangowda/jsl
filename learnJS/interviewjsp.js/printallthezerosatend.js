//To print the all zero's at the end in array in javascript

var Input = [1,2,0,1,3,0,2,0,1]

var arr1 =[]
var arr2 = []

var arr3 = []

for(let i=0; i<=Input.length-1; i++)
{
    
   if(Input[i] !=0)
   {
  
   	arr1.push(Input[i])

   }
   else
   {
   	arr2.push(Input[i])
   }

}

arr3 = arr1.concat(arr2)

console.log(arr3)

console.log('+++++++++++++++++++++++++++++++++')





