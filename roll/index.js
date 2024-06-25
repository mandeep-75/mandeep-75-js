function roll() {
  const number = Math.floor(Math.random() * 6) + 1;
  document.getElementById("number").innerHTML = number;
}
function roll2() {
  const number = Math.floor(Math.random() * 6) + 1;
  document.getElementById("number1").innerHTML = number;
}
function roll3() {
  const number = Math.floor(Math.random() * 6) + 1;
  document.getElementById("number2").innerHTML = number;
  var number1 = document.getElementById("number").innerText;
  var number2 = document.getElementById("number1").innerText;
  var number3 = document.getElementById("number2").innerText;
  number1 = Number(number1);
  number2 = Number(number2);
  number3 = Number(number3);
  console.log(typeof number1);
  number123 = number1 + number2 + number3;
  document.getElementById("number123").innerHTML = number123;
}
