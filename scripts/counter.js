const textarea = document.querySelector("textarea");

textarea.addEventListener("input", (event) => {
  const target = event.currentTarget;
  const maxLength = target.getAttribute("maxlength");
  const currentLength = target.value.length;

  if (currentLength >= maxLength) {
    return window.alert("You entered too many characters, please remove some!");
  }

  document.getElementById(
    "charsLeft"
  ).innerHTML = `${currentLength}/${maxLength}`;
});

function home() {
  if (
    window.confirm(
      "Are you sure you want to leave this page, your RSVP will not be saved!"
    )
  ) {
    window.location.href = "../index.html";
  }
}

function backHome() {
  window.location.href = "./index.html";
}
