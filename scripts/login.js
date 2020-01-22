//Login system for RSVP'ing
var objPeople = [
	{
		username: "dean",
		password: "de jonge"
	},
	{
		username: "stijn",
		password: "kasius"
	},
	{
		username: "sem",
		password: "bravenboer"
	},
	{
		username: "morris",
		password: "van herwijnen"
	},
	{
		username: "rishi",
		password: "van dongen"
	}
]

function getInfo() {
	var username = document.getElementById('username').value.toLowerCase()
	var password = document.getElementById('password').value.toLowerCase()
	for(var i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			window.location.href='../rsvp2.htm';
			return
		}
	}
	window.alert("Deze naam is niet bij ons bekend, controleer op eventuele spelfouten.")
}

function home() {
    if (window.confirm('Weet u zeker dat u deze pagina wilt verlaten? U RSVP wordt niet opgeslagen!')) 
{
		window.location.href='../index.html';
	};
};
