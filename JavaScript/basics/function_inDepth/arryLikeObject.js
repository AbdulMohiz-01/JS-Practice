
function abc(a, b, c) {
    console.log(arguments);
    //since argument is an array like object, so let's conver it to real array. using prototype.]
    let realArr = Array.prototype.slice.call(arguments);
    realArr.push('and sunny day');
    return realArr.join(' . ');
    //join is a handy function to join all the elements of an array and convert it into string with the character attach to all element .join('[This Charater]'). 
}

console.log(abc('1st','it','was','a','beautiful','day'));

// ANOTHER WAY TO DO THIS IS TO USE ES6 Array.from() method.

function abc2(a, b, c) {
    console.log(arguments);
    let realArr = Array.from(arguments);
    realArr.push('and sunny day');
    return realArr.join(' . ');
}

console.log(abc2('2nd','it','was','a','beautiful','day'));

// Reminder : arguments can't work in arrow function.

// now let's try with real objects.

let obj = {
    '0': '1st.Obj',
    '1': 'it',
    '2': 'was',
    '3': 'a',
    '4': 'beautiful',
    '5': 'day'

}

function abc3(obj) {
    let realArr = Array.from(obj, (v, k) => k);
    realArr.push('and sunny day');
    return realArr.join(' . ');
}

console.log(abc3(obj)); // it's not working.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// now let's convert Objects into array and vice versa.

let obj2 = {
    name: 'John',
    age: 30,
    city: 'New York'
}

let array = Object.entries(obj2);
console.log(array);
// Output : [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]

let arr = Object.keys(obj2);
console.log(arr);

// Output : [ 'name', 'age', 'city' ]

arr = Object.values(obj2);
console.log(arr);

// Output : [ 'John', 30, 'New York' ]

// now let's convert array into object.

let obj3 = Object.fromEntries(array);
console.log(obj3);
// Output : { name: 'John', age: 30, city: 'New York' }


