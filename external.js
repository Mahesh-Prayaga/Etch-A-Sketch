// let number = 16;
// let line = 1;
// for (i = 0; i < 16 * 16; i++) {
//   let element = document.createElement("div");
//   element.classList.add("element");
//   if (i % 16 == 0) {
//     let con = document.createElement("div");
//     con.classList.add("container" + i);
//     document.getElementById("container").appendChild(con);
//   }
// }

// for (i = 1; i <= 4; i++) {
//   let con = document.createElement("div");
//   con.classList.add("con");
//   con.setAttribute("id", "container" + i);
//   document.getElementById("container").appendChild(con);
// }

// let line = 1;
// for (j = 1; j < 17; j++) {
//   let element = document.createElement("div");
//   element.classList.add("element");
//   document.getElementById("container" + line).appendChild(element);
//   if (j % 4 == 0) line++;
// }
let number = prompt("Enter the number:");
for (i = 1; i <= number; i++) {
  let con = document.createElement("div");
  con.classList.add("con");
  con.setAttribute("id", "container" + i);
  document.getElementById("container").appendChild(con);
}

let line = 1;
let num = number * number;
for (j = 1; j < num + 1; j++) {
  let element = document.createElement("div");
  element.classList.add("element");
  document.getElementById("container" + line).appendChild(element);
  if (j % number == 0) line++;
}
