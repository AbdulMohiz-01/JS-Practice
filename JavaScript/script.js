// const a1=10;
// {
//     const a1=20;
//     console.log(a1);
// }
// console.log(a1);


// implement quaretic equation
// ax^2 + bx + c = 0
// x = (-b +- sqrt(b^2 - 4ac)) / 2a
// x = (-b +- sqrt(b^2 - 4ac)) / 2a

let a = Number(prompt("Enter a"));
let b = Number(prompt("Enter b"));
let c = Number(prompt("Enter c"));
let x1 = (-b + Math.sqrt(b*b - 4*a*c)) / (2*a);
let x2 = (-b - Math.sqrt(b*b - 4*a*c)) / (2*a);
document.write("x1 = " + x1 + "<br>");
document.write("x2 = " + x2 + "<br>");

//generate math random number between 10 and 20
let x = Math.random() * 10 + 10;
//generate math random number between 20 and 30


let another = document.getElementById("me");
another.style.color = "red";


