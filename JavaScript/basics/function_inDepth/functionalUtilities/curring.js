// Curry will run the function in different phases. Or it will run the function when all the arguments will be passed 

let myfun = (a, b) => a + b;

let curried = function(a){
    return function(b){
        return myfun(a, b);
    }
}

console.log(curried(1)(2))


// basically curried(1) will run first and return whatever it is holding valur to curried(2) and then curried(2) will return the result of myfun(1, 2)
