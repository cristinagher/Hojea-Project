// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const nav = document.getElementById('header-container');
const buttonMenuElement = document.getElementById('button-menu');
const menuElement = document.getElementById('menu');
const closeMenuElement = document.getElementById('close-menu');

const sliderImageElement = document.getElementById('slider-img');
const sliderTextElement = document.getElementById('slider-text');
const prevButtonElement = document.getElementById('prev');
const nextButtonElement = document.getElementById('next');
let slideCounter = 0;

const images = [
  './assets/images/curso-1.jpg',
  './assets/images/curso-2.jpg',
  './assets/images/curso-3.jpg',
  './assets/images/curso-4.jpg',
  './assets/images/curso-5.jpg'
];

const texts = ['Hola', 'Cristina', 'Qué', 'Tal'];

const handleMenu = () => {
  if (menuElement.classList.contains('show')) {
    menuElement.classList.remove('show');
  } else {
    menuElement.classList.add('show');
  }
};

const changeMenuStiky = () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const changeSlideImage = () => {
  sliderImageElement.src = images[slideCounter];
};

const changeSlideText = () => {
  sliderTextElement.textContent = texts[slideCounter];
};

const prevSlide = () => {
  if (slideCounter <= 0) {
    slideCounter = images.length - 1;
  } else {
    slideCounter--;
  }
  changeSlideImage();
  changeSlideText();
};

const nextSlide = () => {
  if (slideCounter >= images.length - 1) {
    slideCounter = 0;
  } else {
    slideCounter++;
  }
  changeSlideImage();
  changeSlideText();
};

window.addEventListener('scroll', changeMenuStiky);

buttonMenuElement.addEventListener('click', handleMenu);

closeMenuElement.addEventListener('click', handleMenu);

prevButtonElement.addEventListener('click', prevSlide);
nextButtonElement.addEventListener('click', nextSlide);
