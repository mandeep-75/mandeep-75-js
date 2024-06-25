function roll() {
  const number = Math.floor(Math.random() * 6) + 1;
  document.getElementById("number").innerHTML = number;
}
