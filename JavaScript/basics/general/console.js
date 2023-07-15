function isPrime(){
    let num = Number(document.getElementById("number").value);
    for(let i = 2; i < num/2; i++){
        if(num % i == 0){
            document.getElementById("result").innerHTML = "Not Prime";
            return false;
        }
    }
    document.getElementById("result").innerHTML = "Prime";
    return true;
}


// Language: javascript



// let cat = new animal("cat", "kitty");
// let dog = new animal("dog", "buddy");
// let bird = new animal("bird", "Tweety");

// let animals = [cat, dog, bird];
// console.log(animals);

// template literal

let namee = "John";
let age = 30;
let job = "teacher";

let myHTML = `<h3> Hello ${namee} you are ${age} years old and you are a ${job}. </h3>`;
// document.body.innerHTML = myHTML;

let a = 10;
console.log(a);

// Arrays in javascript

let marks = [80, 90, 70, 60, 50];
console.log(marks);
marks.push(40); // add to the end of the array
console.log(marks);
marks.unshift(20); // add to the beginning of the array
console.log(marks);
marks.pop(); // remove from the end of the array
console.log(marks);
marks.shift(); // remove from the beginning of the array
console.log(marks);

// function to insert value at a specific index in array
function insertAt(arr, index, value){
    arr.splice(index, 0, value);
    return arr;
}
console.log(insertAt(marks, 2, 99));

// Objects in javascript

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["music", "movies", "sports"],
    address: {
        street: "50 main st",
        city: "Boston",
        state: "MA"
    }
}
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.hobbies);
console.log(person.address.city);
