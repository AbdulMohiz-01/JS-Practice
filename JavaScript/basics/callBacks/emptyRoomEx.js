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
_.each = function(list, callback){
    for(let i=0;i<list.lenght;i++){
        callback(list[i], i, list)
    }
}
_.filter = function (arr, callback){
    let storage = [];
    _.each(arr, function(item, i, list){
        if(callback(item, i, list)) storage.push(item)
    })
    return storage;
}


_.reduce = function(arr, callback, empRoom){
    let room = '';
    arr.forEach((element, index) => {
        room = callback(empRoom, index)
        if(room){
            empRoom.push(room)
            room = '';
        }

    });
    return empRoom;
}

console.log(_.reduce(newDevelopment,function(empRoom, index){
    empRoom =  _.filter(newDevelopment[index].rooms, function(obj){
        for(key in obj){
            if(!obj[key])return obj[key];
        }
    })
},[]))






// for(key in element){
//     if(!element[key] && !empRoom.includes(key)){
//         empRoom.push(key);
//     }
// }


