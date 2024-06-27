var username = document.getElementById("username");
var gmail = document.getElementById("gmail");
var text = document.getElementById("text");

document.getElementById("button").addEventListener("click", (evt) => {
  username.innerText = text.innerText;
});
