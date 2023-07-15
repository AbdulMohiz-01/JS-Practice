// destructuring is like assigning a multiple varables at the same time it works respectively

let [namee,age,job] = ['Josh', 30, 'teacher'];
console.log(namee);

// +++++++++++++++++++++++++++++++++++++++++
// destructuring an object
let {firstName, lastName} = {firstName: 'John', lastName: 'Doe'};
console.log(firstName+" "+lastName);

// +++++++++++++++++++++++++++++++++++++++++
// destructuring an Object example

// let obj = {
//     namee: "Rusty",
//     room: "kitchen",
//     weapon: "knife",
// }
// let [weapon,room] = [obj.weapon,obj['room']];
// console.log(weapon+" "+room);

let obj = {weapon, room} = {'name': 'john','weapon': 'gun', 'room': 'chamber'};
console.log(weapon+" "+obj.room);


let suspect = [
    {
        name: 'Rusty', 
        color: 'red',
        friends: [
            {
                name: 'Jason',
            },
            {
                name: 'Tim',
            },
        ],
        foe: [
            {
                name: 'Fred',
            },
            {
                name: 'Tom',
            }
        ]
    },
    {
        name: 'Miss Scarlet', 
        color: 'orange',
        foe: [
            {
                name: 'Taha',
            },
            {
                name: 'Talal',
            }
        ]
    }
]

let [,{color}] = suspect;
console.log(color);

let [firstobj,secondobj] = suspect;
console.log(firstobj.color+"___"+secondobj.color);

let [{color: first},{color: second}] = suspect;
console.log(first+" "+second);

let [{foe:[{name: fn},{name:sn}]}] = suspect
console.log(fn+" "+sn);
let [{},{foe:[{name: ssn},{name: ssn2}]}] = suspect;

console.log(ssn+" "+ssn2);