let obj = {
    namee: "John",
    agee: 30,
    job: "teacher",
    married: false,
};

obj['0'] = "blue";
obj[1] = "red";
obj[2] = "green";
console.log(obj['job']);


// this is called key assignment
let x = 'namee';
let y = 'agee';
let z = 'job';
let w = 'married';
let o = {
    [x]: 'John',
    [y]: 30,
    [z]: 'teacher',
    [w]: false,
}
console.log(o['job']);
console.log(o.agee);
console.log(o.job);
console.log(o.married);
console.log('________________________________');
console.log(o[x]);
console.log(o[y]);
console.log(o[z]);
console.log(o[w]);

// ________________________________________________
// writing function inside an object
let b = {func:function(){return 3}()};
console.log(b);

// +++++++++++++++++++++++++++++++++++++++++
let myob = {
    namee: String,
    agee: Number,
    job: String,
}
myob.namee = 'John';
myob.agee = 30;
myob.job = 'teacher';
console.log(myob);

let g = "namee";
let h = {
    [g]: 'John',
}
console.log(h.namee);

// loop through an object
 myob = {
    namee: String,
    agee: Number,
    job: String,
}
myob.namee = 'John';
myob.agee = 30;
myob.job = 'teacher';
console.log(myob);
for (let key in myob) {
    console.log(key);
    console.log(myob[key]);
}


// +++++++++++++++++++++++++++++++++++++++++
// freezing an object
let obj2 = {
    namee: 'John',
    agee: 30,
    job: 'teacher',
    married: false,
}
Object.freeze(obj2);
// now this will not change the properties of an object just work like a const
obj2.married = true;
console.log(obj2);
