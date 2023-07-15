function calculate(){
    let tnum = Number(document.getElementById('tNum').value);
    let lower = Number(document.getElementById('lower').value);
    let upper = Number(document.getElementById('upper').value);
    let tbody = document.getElementById('tbody');

    for(let i=1;i<=tnum;i++){
        let rnum = getRandomNumber(lower,upper);
        tbody.innerHTML += `<tr><td>${i}</td><td>${rnum}</td></tr>`;
        
    }
}

// function to generate random number
function getRandomNumber(lower,upper){
    return Math.floor(Math.random()*(upper-lower+1))+lower;
}