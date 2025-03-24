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

emailButton.addEventListener("contextmenu", (event) => {
  event.preventDefault;

  const copyText = document.getElementById("emailButton");
  navigator.clipboard
    .writeText(copyText.value)
    .then(() => {
      alert("Copied: " + copyText.value);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
});
