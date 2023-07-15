let game = {};

game.characters = ['Miss Scarlet', 'Colonel Mustard', 'Mrs. White', 'Mr. Green', 'Mrs. Peacock', 'Professor Plum'];
game.weapons = [
    {
        type: 'candlestick',
        location: 'library'
    },
    {
        type: 'dagger',
        location: 'billiard room'
    },
    {
        type: 'lead pipe',
        location: 'library'
    }    
]
game.rooms = [
    {
        name: 'library',
        weapons: ['candlestick','lead pipe']
    },
    {
        name: 'billiard room',
        weapons: ['dagger']
    }
]
game.suspects = [
    {
        name: 'Miss Scarlet',
        room: 'library',
        weapon: 'candlestick'
    },
    {
        name: 'Colonel Mustard',
        room: 'billiard room',
        weapon: 'dagger'
    },
    {
        name: 'Mrs. White',
        room: 'library',
        weapon: 'lead pipe'
    }
]
game.solution = {
    character: 'Mrs. White',
    weapon: 'lead pipe',
    room: 'billiard room'
}
game.players = [
    {
        name: 'Miss Scarlet',
        position: 0
    },
    {
        name: 'Colonel Mustard',
        position: 1
    },
    {
        name: 'Mrs. White',
        position: 2
    },
]
game.turn = 0;
game.moves = [
    {
        player: 'Miss Scarlet',
        move: 'suggest',
        target: 'Colonel Mustard',
        weapon: 'candlestick'   
    },
    {
        player: 'Colonel Mustard',
        move: 'suggest',
        target: 'Mrs. White',
        weapon: 'lead pipe'
    }
]
game['moves'][0].player;

let b = {func:function(){return 3}()};
console.log(b);

let myob = {
    namee: String,
    agee: Number,
    job: String,
}
myob.namee = 'John';
myob.agee = 30;
myob.job = 'teacher';
console.log(myob);
