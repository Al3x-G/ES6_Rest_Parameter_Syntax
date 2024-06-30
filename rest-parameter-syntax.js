/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

/***************************************************** */
// Regular function call 
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log("Sum:", sum);


/***************************************************** */
// Extra arguments are ignored
/*Only a b c arguments are used so 4 5 6 is ignored leading to the same result as above */
let sum2 = sumAll(1,2,3,4,5,6);
console.log("Sum2:", sum2)


/***************************************************** */
// Function using ...rest
/*create a new arrow function called sumRest, this time it will take four parameters,
a, b, and c, and a new parameter called rest. Using the three dots syntax here again, 
but this time it's going to squash any extra parameters passed into the function  
into a new parameter called rest, which will be an array within the function.
This parameter can technically be called anything you want, but I'm calling it rest here
to demonstrate that it signifies the rest of the parameters. We can sum the first three 
variables easily enough. Just let sum = a + b + c. Now use a  for...of loop to iterate 
through the rest array and add each additional number to the existing sum. 

Now if I create a new variable called sum3, set  it equal to sum rest of the numbers 1 through 6,  
and log it to the console, I get the expected output of 21. */
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log("Sum3:", sum3);