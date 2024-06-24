let username;
document.getElementById("button").onclick = function () {
  username = document.getElementById("input").value;
  document.getElementById("myh1").textContent = `HELLO ${username}`;
};
let radious;
let cir;
const PI = Number(3.14159);
radious = window.prompt("enter radious of circle");
cir = 2 * PI * radious;
console.log(cir);
