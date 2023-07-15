let square = (n) => n*n;
let increment = (n) => n+1;

/**
 * here we are passing the function as an argument to another function.
 * so the function passed as an argument is called a callback function.
 * when function is passed it will return the result of the function being invoked.
 */
let doMath = (n, func) => func(n);

console.log(doMath(2, square));
console.log(doMath(2, increment));
