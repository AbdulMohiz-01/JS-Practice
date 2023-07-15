let str = ['a','b','c','d','e']

let myfunction = (a,b,c, ...d) => {
    return [a,b,c,d]
}

console.log(myfunction('a','b','c','d','e','f','g'));

// so basically what happen here, we have extra arguments and we are passing them to the function which have less perameters. so we are doing this by using spread operator (...d). This will basically write all the extra argument to the d array.

// let's try this out with some addition function

let add = (a,b,c, ...d) => {
    return a+''+b+''+c+''+d;
}

console.log(add(1,2,3,4,5,6,7,8,9,10));

// argument keyword is used to pass the extra arguments to the function.

// argument keyword works different with arrow function. But if we use arrow function, we can't use argument keyword.
// it only works with normal function. and return or print sudo array of arguments. what mean my sudo array it shows like an array but not actually an array its object. like we can't access array's handy function e.g push pop etc.
let subtract = function(a,b,c, ...d){
    console.log(Array.isArray(arguments));
    return a+''+b+''+c+''+d;
}

console.log(subtract('a','b','c','d','e','f','g'));


