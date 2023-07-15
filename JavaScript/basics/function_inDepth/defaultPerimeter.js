
// default perimiter is setting up a perimeter in function.

let a = function(a, b=3){
    return a+b;
}
console.log(a(1));

// here argument keyword only care about arguments being passed to the function. not the default value.

// now lets try with arrow function
let b = (a, b=3) => {
    return a+b;
}
console.log(b(1));

// works with both.COOL!

