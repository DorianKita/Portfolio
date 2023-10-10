// machine typing effect
const typingCursor = document.querySelector('.cursor');
const typingText = document.querySelector('.hero-paragraph');
const txt = ["Web Designer","Creative developer","Passionate","Hi i'm junior web developer with passion for creating inspiring web designs. See my work down below."];

let activeLetter = -25;
let activeText = 0;
const time = 50;

//add letter, change word function
const addLetter = () => {
    if(activeLetter >= 0) {
        typingText.textContent+= txt[activeText][activeLetter];
    }
    activeLetter++;
    if (activeLetter === txt[activeText].length) {
        activeText++;
        if (activeText === txt.length) return

        return setTimeout(() => {
            activeLetter = -10;
            typingText.textContent = '';
            addLetter();
        },1000)
        
    }
    setTimeout(addLetter,time)
};

addLetter();
// cursor animation
setInterval(() => {
    typingCursor.classList.toggle('active');
},500);