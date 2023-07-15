const _ = {};

const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];

// let finalEmpRooms = [];
// let personNotPresent = [];
// let individualPerson = [];



// newDevelopment.forEach((element, index) => {
//     element.rooms.forEach(element => {
//         for(key in element){
//             if(!element[key]){
//                 individualPerson.push(key)
//             }
//         }
//     })
//     personNotPresent.push(individualPerson)
//     individualPerson = [];
// })

// for (let i = 0; i < personNotPresent[0].length; i++) {
//     let notIncludes = true 
//     for (let j = 1; j < personNotPresent.length; j++) {
//         if(!personNotPresent[j].includes(personNotPresent[0][i])){
//             notIncludes = false;
//             break;
//         }
//     }
    
//     if(notIncludes)finalEmpRooms.push(personNotPresent[0][i]);
// }
// console.log(personNotPresent);
// console.log(finalEmpRooms);






// _.each = (arr, callback) => {
//     let storage;
//     for (let index = 0; index < arr.length; index++) {
//         console.log(callback(arr[index], index, arr))
//     }
// }


// // reduce for object


// _.map = (list, callback) => {
//     let storage = [];
//     list.forEach(element => {
//         storage.push(callback(element))
//     });
//     return storage;
// }
let check = function(index, flag, arr){

}
_.intersection = (arr, callback) =>{
    let intersection = [];
    arr.forEach((element, index) => {
    })
}


_.reduce = (list, callback, accumulator) => {
    let memo = [];
    list.forEach(element => {
        memo = callback(accumulator, element)
        if (memo) accumulator.push(memo)
    });
    return accumulator
}
let empRooms = _.reduce(newDevelopment, (accumulator,element) => {
    let empRooms = _.reduce(element.rooms, function(accumulator, item){
        for(key in item){
            if(!item[key])return key
        }
    }, [])

    return empRooms;
},[])

