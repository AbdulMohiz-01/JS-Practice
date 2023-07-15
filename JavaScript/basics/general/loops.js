let arr = [1, 2, 3, 4, 5];
let sum = 0;
arr.forEach(function(item){
    sum += item;
});
console.log(sum);
console.log("------------------------------");

arr.forEach(element => {
    console.log(element);
});

const game = {
    'suspect' : [
        {
            'name' : 'Rusty',
            'color' : 'red'
        },
        {
            'name' : 'Miss Scarlet',
            'color' : 'orange'
        }
    ]
}
for (let i = 0; i < game.suspect.length; i++) {
    console.log("Name is: "+game.suspect[i].name+" Color is "+game.suspect[i].color);
}
// ++++++++++++++++++++++++++++ printing suspects objects

console.log("++++++++++++++++++++++++++++++");
console.log("printing suspect object using for in loop");
for(let i=0;i<game.suspect.length;i++){
    console.log("outer loop");
    for(let key in game.suspect[i]){
        console.log("inner loop");
        if(game.suspect[i][key] === 'Rusty'){
            console.log('Found him');
        }
        else{
            console.log('Not found');
        }
}
}
console.log("++++++++++++++++++++++++++++++");

// ++++++++++++++++++++++++++++ destructuring the suspects objects

let {red, ornage} = {red: game.suspect[0].color, ornage: game.suspect[1].color};
console.log(red+" "+ornage);

console.log("------------------------------");
// for in loop
for (let key in game) {
    console.log(key);
}

let obj = {
    'namee': 'John',
    'agee': 30,
    'city': 'New York'
}
for (let key in obj) {
    console.log(key);
}
console.log(obj.length);