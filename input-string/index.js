var username = document.getElementById("username");
var email = document.getElementById("email");
var text = document.getElementById("text");

document.getElementById("submit").addEventListener("click", () => {
  username.innerText = text.value;
  email.innerText = text.value + "@gmail.com";
});
