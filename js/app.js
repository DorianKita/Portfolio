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



//sliding in function

const slideInSections = document.querySelectorAll('.slider')

const sectionSlider = () => {
    const slideTrigger = window.innerHeight / 6*3;

    slideInSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < slideTrigger){
            section.classList.add('show');
        }
    })
}

window.addEventListener('scroll', sectionSlider);


// projects modals
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal);
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal);
    })
})

function openModal(modal){
    if(modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal){
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

// slide gallery in modal

const slideList = [
'./img/projects_pics/portfolio/1.png','./img/projects_pics/portfolio/2.png',
'./img/projects_pics/portfolio/3.png']

const image = document.querySelector('img.slide');
const forwardBtn = document.querySelector('.next');
const backBtn = document.querySelector('.previous');

// slider interface
let active = 0;

const changeSlideForward = () => { 
    active++;
     if(active > slideList.length -1){
        active = 0;
    };
    image.src = slideList[active];
}

const changeSlideBackward = () => { 
    active--;
     if(active <= -1){
        active = slideList.length -1;
    };
    image.src = slideList[active];
}

forwardBtn.addEventListener('click',changeSlideForward);
backBtn.addEventListener('click',changeSlideBackward);
