let btn = document.querySelector("button[type=submit]");
let tb = document.getElementById("tbody");

btn.addEventListener("click", clicked);

let marks = [];

function clicked() {
  let totalStd = Number(document.getElementById("tNum").value);
  let lowerRanger = Number(document.getElementById("lower").value);
  let upperRanger = Number(document.getElementById("upper").value);

  for (i = 1; i <= totalStd; i++) {
    let random = getRandomNumber(lowerRanger, upperRanger);
    marks.push(random);
    tb.innerHTML += `<tr>
            <td> ${i} </td>
            <td> ${random} </td>
        </tr>
    `;
  }

  let max = Math.max(...marks);
  let maxIndex = marks.indexOf(max);


  console.log(marks);
  console.log(maxIndex);
  let rows = document.querySelectorAll("tr");
  console.log(rows);
  rows[maxIndex + 1].classList.add('max');





}

function getRandomNumber(lower, upper) {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
