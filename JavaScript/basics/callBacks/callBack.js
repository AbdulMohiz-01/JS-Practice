let func = (condition, isTrue, isFalse) => {
    return condition ? isTrue() : isFalse();
}
func(
    true,
    () => {console.log('It is true');},
    () => {console.log('It is false');}
)


// functions are also objects. they can be pass by reference.
func2 = func;
func2(
    false,
    () => {console.log('It is true');},
    () => {console.log('It is false');}
)

let student = function(name, age, isRegistered){
    return age>20 || isRegistered() ? `${name} is registered` : `${name} is not registered`;
}
console.log(student(
    'John',
    19,
    () => {return false}
))

let a = () => 10;
console.log(a);


