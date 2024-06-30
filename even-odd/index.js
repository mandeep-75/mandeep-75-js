var number = document.getElementById("number");
var display = document.getElementById("display");

document.getElementById("submit").addEventListener("click", () => {
  if (number.value % 2 === 0) {
    document.getElementById("display").innerText = "true";
  } else {
    document.getElementById("display").innerText = "false";
  }
});
