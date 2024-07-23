let display = document.getElementById("display");

document.getElementById("inc").addEventListener("click", () => {
  display.innerText = Number(display.innerText) + 1;
});
document.getElementById("dec").addEventListener("click", () => {
  display.innerText = Number(display.innerText) - 1;
});
document.getElementById("reset").addEventListener("click", () => {
  display.innerText = 0;
});
