// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const nav = document.getElementById('header-container');
const buttonMenuElement = document.getElementById('button-menu');
const menuElement = document.getElementById('menu');
const closeMenuElement = document.getElementById('close-menu');

const sliderImageElement = document.getElementById('slider-img');
const sliderTextElement = document.getElementById('slider-text');
const sliderDescriptionElement=document.getElementById('description');
const sliderPlantsElement = document.getElementById('slider-plants');
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

const texts = ['Introducción a la botánica', 'Identificación de plantas nativas', 'Jardinería ecológica', 'Herbolaria urbana', 'Huertos urbanos'];
const moreTexts = ['Aprende los fundamentos de la botánica en este curso introductorio. Exploraremos la anatomía de las plantas, su clasificación y su importancia en el ecosistema urbano.','Aprende a reconocer y clasificar plantas nativas en este curso especializado. Exploraremos sus características distintivas, su ecología y la importancia de conservarlas en sus hábitats naturales.', 'Descubre las prácticas de jardinería sostenible en este curso. Abordaremos técnicas ecológicas para el cuidado del jardín, la conservación del agua y el uso de plantas autóctonas para fomentar la biodiversidad.', 'Sumérgete en el mundo de la herbolaria urbana con este curso completo. Conocerás las propiedades medicinales de diversas plantas, cómo cultivarlas en entornos urbanos y su uso en remedios naturales.', 'Aprende a crear y mantener huertos en entornos urbanos en este curso práctico. Desde la selección de cultivos hasta técnicas de siembra y cosecha, te enseñaremos a producir alimentos frescos y saludables en espacios reducidos.'];

const moreImages = [
  './assets/images/planta-1.png',
  './assets/images/planta.png',
  './assets/images/planta-2.png',
  './assets/images/planta-3.png',
];

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
  sliderPlantsElement.src = moreImages[slideCounter];

};

const changeSlideText = () => {
  sliderTextElement.textContent = texts[slideCounter];
  sliderDescriptionElement.textContent = moreTexts[slideCounter];
};

const prevSlide = () => {
  if (slideCounter <= 0) {
    slideCounter = images.length - 1;
    slideCounter = moreImages.length - 1
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
