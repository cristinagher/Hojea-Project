// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';


const nav = document.getElementById('header-container');
window.addEventListener("scroll",function(){
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
  }
  else{
    nav.classList.remove("sticky");
  }
})


const buttonMenuElement = document.getElementById('button-menu');
const menuElement = document.getElementById('menu');

function handleMenu() {
if (menuElement.classList.contains('show')) {
    menuElement.classList.remove('show')
}
else {
    menuElement.classList.add('show');
}
}

buttonMenuElement.addEventListener('click', handleMenu);