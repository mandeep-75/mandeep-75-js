var username = document.getElementById("username");
var email = document.getElementById("email");
var text = document.getElementById("text");

document.getElementById("submit").addEventListener("click", () => {
  username.innerText = text.value.slice(0, text.value.indexOf("@"));
  console.log();
  email.innerText = text.value;
});
