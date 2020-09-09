//Login system for RSVP'ing
var objPeople = [
  {
    username: "First name",
    password: "Last name",
  },
  {
    username: "First name",
    password: "Last name",
  },
  {
    username: "First name",
    password: "Last name",
  },
  {
    username: "First name",
    password: "Last name",
  },
  {
    username: "First name",
    password: "Last name",
  },
];

function getInfo() {
  var username = document.getElementById("username").value.toLowerCase();
  var password = document.getElementById("password").value.toLowerCase();
  for (var i = 0; i < objPeople.length; i++) {
    if (
      username == objPeople[i].username &&
      password == objPeople[i].password
    ) {
      window.location.href = "../rsvp2.htm";
      return;
    }
  }
  window.alert("This name is not registered in our system, check for typoes.");
}

function home() {
  if (
    window.confirm(
      "Are you sure you want to leave this page, your RSVP will not be saved!"
    )
  ) {
    window.location.href = "../index.html";
  }
}
