const textarea = document.querySelector("textarea");

textarea.addEventListener("input", event => {
    const target = event.currentTarget;
    const maxLength = target.getAttribute("maxlength");
    const currentLength = target.value.length;

    if (currentLength >= maxLength) {
        return window.alert('U heeft te veel characters.')
    }


    document.getElementById("charsLeft").innerHTML = (`${currentLength}/${maxLength}`);
});

function home() {
    if (window.confirm('Weet u zeker dat u deze pagina wilt verlaten? U RSVP wordt niet opgeslagen!')) 
{
		window.location.href='../index.html';
	};
};
