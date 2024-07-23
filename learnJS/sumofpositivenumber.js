let sum =0;

// get input from the user

let number =parseInt(prompt('enter a positive number: '));
while(number>=0){

    sum+= number;

    // again take input if number is positive

    number =parseInt(prompt('enter a positive number: '));
   
}

    console.log('the sum is ${sum}.')