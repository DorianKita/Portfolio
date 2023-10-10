// machine typing effect
const typingText = document.querySelector('.hero-paragraph');
const typingCursor = document.querySelector('.cursor');
const txt = "Hi i'm junior web developer with passion for creating inspiring web designs. See my work down below.";

let textIndex = 0;
const time = 40;

//add letter
const addLetter = () => {
    typingText.textContent += txt[textIndex];
    textIndex++;
    if (textIndex === txt.length) clearInterval(intervalIndex);
};

const intervalIndex = setInterval(addLetter, time);

// cursor animation
setInterval(() => {
    typingCursor.classList.toggle('active');
},500);