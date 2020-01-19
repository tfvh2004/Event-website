const textarea = document.querySelector("textarea");

textarea.addEventListener("input", event => {
    const target = event.currentTarget;
    const maxLength = target.getAttribute("maxlength");
    const currentLength = target.value.length;

    if (currentLength >= maxLength) {
        return document.getElementById('U heeft te veel characters.')
    }


    document.getElementById("charsLeft").innerHTML = (`${currentLength}/${maxLength}`);
});