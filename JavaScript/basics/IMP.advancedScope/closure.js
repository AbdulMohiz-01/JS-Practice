/**
 * what this function do, it will call alerter function after 5 seconds. But it will not hold the execution of the function.
 * first log then Hello will be printed.
 */

// const myAlert = function() {
//     const x = 'Hello';
//     const alerter = function() {
//         window.alert(x);
//     }
//     setTimeout(alerter, 5000);
//     console.log("I got executed First YEEEHA'");
// }

// myAlert();


// Example 2 - Closure or Advanced Scope

const myAlert = function() {
    const x = 'Hello';
    let count = 0;
    const alerter = function() {
        console.log(`I got executed ${++count} times`);
    }
    return alerter;
};

const func1 = myAlert();
const func2 = myAlert();
func1();
func1();
func2();
func2();

//Output
// I got executed 1 times
// I got executed 2 times
// I got executed 1 times
// I got executed 2 times

/**
    * When func1 is called it will increment the count in it's parent scope and when func2 is called it will increment the count in it's parent scope.
    * Both parent scopes is different and they are not sharing the same count.
    * They both shares the differnet parent scope.
*/