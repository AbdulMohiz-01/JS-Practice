let weapons = ['sword', 'knife', 'axe', 'spear'];
let weaponsLength = weapons.map(function(weapon){
    return {
        weapon: weapon,
        length: weapon.length
    }
});
console.log(weaponsLength);


let a = [1,2,3,4,5];
let sum =0;
let b = a.map(function(x){
    return sum+=x;
});

// solving exercise
weapons = ['sword', 'knife', 'axe', 'spear'];

const makeBroken = function(item){
    return `Broken ${item}`;
}

let brokenWeapons = weapons.map(function(weapon){
    return makeBroken(weapon);
})
console.log(brokenWeapons);

/* _.map vs _.each

 . You can search for underscore js library to access all these fucntions .
 . Here only map is available.
 . Code will be written, you can run this in console of library.

*/

let suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
let createSuspectObeject = function(name){
   return{ 
        name:name,
        color:name.split(' ')[1],
        speak(){
            console.log(`${this.name} says "Shriek!"`);
        }
    }
}
_.each(suspects, function(suspect){
    suspect.speak();
})

let suspectObjects = suspects.map(createSuspectObeject);

let videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]

    }
];

// use filter to find the first suspect who is not present
let present = _.filter(videoData, function(suspect){
    return suspect.present;
});
