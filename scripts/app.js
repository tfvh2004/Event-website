//Making the slding animation depending on the section you're on
const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const  gradients = [
    'linear-gradient(to right top, #91afc4, #91afc4)',
    'linear-gradient(to right top, #897da6, #756fa8)',
    'linear-gradient(to right top, #ff416c, #ff4b2b)',
    'linear-gradient(to right top, #8f94fb, #4e54c8)',
    'linear-gradient(to right top, #dce35b, #45b649)'
];

const options = {
    threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        if(entry.isIntersecting){
            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.setProperty('height', `${directions.height}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
            bubble.style.background = gradients[gradientIndex];
        }
    })
};

sections.forEach(section => {
    observer.observe(section);
});

let countDownDate = new Date("Aug 6, 2020").getTime()
let x = setInterval(function(){
	let now = new Date().getTime();
	let distance = countDownDate - now;
	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	document.getElementById('countdown').innerHTML = days + " Days"
})

//Making the text animation
const text = document.querySelector('.tanimation');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(let i = 0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
};

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}
