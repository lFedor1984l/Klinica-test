import * as flsFunctions from './modules/functions.js';
flsFunctions.isWebp();

//Бургер
const headerBurger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__nav-menu');
const navList = document.querySelector('.nav__list');
const navLink = document.querySelectorAll('.nav__link');
const body = document.querySelector('body');

const arrow = document.querySelectorAll('.arrow');

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('active');
    menu.classList.toggle('active');
    //navList.classList.add('active')
    navLink.forEach(elem => {
        elem.classList.add('active');
    });
    body.classList.toggle('lock');
});


//Слайдер
const formSliderItem = document.querySelectorAll('.form__slider-item');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const numLeft = document.querySelector('.form__send-int-l');
const numRight = document.querySelector('.form__send-int-r');

formSliderItem[0].classList.add('slider__active');

let counter = 0;

prev.addEventListener('click', () => {
    
    for(let i = 0; i < formSliderItem.length; i++) {
        formSliderItem[i].classList.remove('slider__active');
    }

    counter--

    if(counter < 0) {
        counter = formSliderItem.length-1;
    }
    formSliderItem[counter].classList.add('slider__active');
    numLeft.innerHTML = counter + 1;
});

next.addEventListener('click', () => {
    
    for(let i = 0; i < formSliderItem.length; i++) {
        formSliderItem[i].classList.remove('slider__active');
    }

    counter++
   
    if(counter >= formSliderItem.length) {
        counter = 0;
    }
    formSliderItem[counter].classList.add('slider__active');
    numLeft.innerHTML = counter + 1;
});


//POPAP окно
const popapLinks = document.querySelectorAll('#btn');
const popap = document.querySelector('.popap');
const popapContent = document.querySelector('.popap__content');
const popapCloseIcon = document.querySelector('.close__popap');

console.log(popapLinks)

if (popapLinks.length > 0) {
    for (let i = 0; i < popapLinks.length; i++) {
        let popapLink = popapLinks[i];
        popapLink.addEventListener('click', function (event) {
            event.preventDefault();
            popap.classList.add('popap__active');
            popapContent.classList.add('popap__content-active');
            body.classList.add('lock');
        });
    }
}

popapCloseIcon.addEventListener('click', function() {
    popapContent.classList.remove('popap__content-active');
    popap.classList.remove('popap__active');
    body.classList.remove('lock');
});
