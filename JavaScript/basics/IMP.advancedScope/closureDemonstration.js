let clueCount = () => {
    let count = 0;
    return {
        count : () => {
            count++;
            return count;
        },
        reset : () => {
            count = 0;
        }
    }
}

let counter = clueCount();
counter.count();
counter.count();
counter.count();
console.log(counter.count());
counter.reset();
console.log(counter.count());


// now let's make another execution context

let counter2 = clueCount();
console.log(counter2.count());
console.log(counter2.count());
console.log(counter2.count());
console.log(counter2.count());
counter2.reset();
console.log(counter2.count());

/**
    * Closure is a function that has access to the variables and functions of its outer environment.
    * So both counter1 and counter2 has a different execution context.
*/



// Timer function in closure

let makeTimer = () => {
    let elapsed = 0;
    const stopwatch = () => {
        return elapsed;
    }
    const increment = () => elapsed++;
    setInterval(increment, 1000); // set interval is a built in function that runs a function every [given amount of ms] milliseconds
    return stopwatch;
}
let timer = makeTimer();
console.log(timer());

