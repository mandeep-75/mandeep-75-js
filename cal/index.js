const input = document.getElementById("input");

function action(user) {
  input.value += user;
}
function calculate() {
  input.value = eval(input.value);
}
function c() {
  input.value = "";
}
