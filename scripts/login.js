//Login system for RSVP'ing
var objPeople = [
	{
		username: "Dean",
		password: "de Jonge"
	},
	{
		username: "dean",
		password: "de jonge"
	},
	{
		username: "Dean",
		password: "de jonge"
    },
    {
        username: "dean",
        password: "de Jonge"
    }
]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value
	for(var i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			window.alert(username + " is logged in!!!")
			return
		}
	}
	window.alert("Incorrect username or password")
}

function home() {
    if (window.confirm('Weet u zeker dat u deze pagina wilt verlaten? U RSVP wordt niet opgeslagen ')) 
{
	window.location.href='../index.html';
	};
};