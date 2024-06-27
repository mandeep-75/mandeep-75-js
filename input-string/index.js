var mycheckbox = document.getElementById("mycheckbox");
var myp = document.getElementById("myp");
var my1 = document.getElementById("1");
var my2 = document.getElementById("2");
var my3 = document.getElementById("3");
var mysubmit = document.getElementById("mysubmit");

mysubmit.onclick = function () {
  if (mycheckbox.checked) {
    if (my1.checked) {
      myp.textContent = "you selected 1";
    } else if (my2.checked) {
      myp.textContent = "you selected 2";
    } else if (my3.checked) {
      myp.textContent = "you selected 3";
    } else {
      myp.textContent = "select radio button ";
    }
  } else {
    myp.textContent = "select checkox toggle ";
  }
};
