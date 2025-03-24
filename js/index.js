let emailButton = document.getElementById("emailButton");

emailButton.addEventListener("click", function () {
  changeText();
  changeStyle();
});

function changeText() {
  emailButton.innerHTML = "tehilah.zaman@gmail.com";
}

function changeStyle() {
  emailButton.style.width = "200px";
}
