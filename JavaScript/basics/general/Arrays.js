let person = [];
person.name = "John";
person.age = 30;
person.job = "teacher";
person.married = false;
person.push("blue");
console.log(person);

let a = 'myName';
let per = [];
per[a] = 'John';
console.log(per);


let subjects = [];
subjects.maths = 90;
subjects["physics"] = 80;
subjects.chemistry = 70;
subjects["biology"] = 60;
console.log(subjects);
subjects.push(300);

let arr = [];
arr[0] = "John";
// console.log(arr.);
let b = new Array();

let array = [2,1,23, 3, 4, 5];
array[100] = 64;
array.sum = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
}
array.print = function () {
    for (let i = 0; i < this.length; i++) {
        console.log(array[i]);
    }
}
array.print();
