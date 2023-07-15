const _ = {};

let students = ['taha', 'Talal','zain', 'moiz'];

_.each = function(list, callback){
    for(let i=0;i<list.lenght;i++){
        callback(list[i], i, list)
    }
}

_.each(students, function(item, i, list){
    
    if(list[i+1]) console.log(item+" is younger than "+list[i+1]);
    else console.log(item+" is the oldest one")
})

let storage = []
// now lets do map
_.map = function(list, callback){
    _.each(list, function(item, i, list){
        storage.push(callback(item, i, list))
    })
    
    return storage;
}
let st = _.map(students, function(item, i, list){
    return item+" is "+i+" in the best list";
})
console.log(st);

// now lets do filter
_.filter = function(list, callback){
    _.each(list, function(item, i, list){
        if(callback(item, i, list)) storage.push(item)
    })
    return storage;
}
let st2 = _.filter(students, function(item, i, list){
    return item.length > 4;
}
)
console.log(st2);
// output: ['taha', 'zain', 'moiz']



