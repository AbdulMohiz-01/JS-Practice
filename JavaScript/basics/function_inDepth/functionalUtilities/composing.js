/**
 * 
 * compose will run the funtions in right to left order like: compose (fun1, fun2) so first fun2 will be run and then fun1 will be run
 * it is just like a find a compositon of two functions in maths. f(g(x)) <=> f(g(x)) = f(x)
*/

let findName = (name) => {
    return name;
}

let upperCaseName = (name) => {
    return name.toUpperCase();
}

let compose = (fun1, fun2) => {
    return (args) => {
        const result = fun2(args);
        return fun1(result);
    }
}

console.log("Oh look I think I found the name... =>" + compose (upperCaseName, findName)('John'))
