(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function m(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=m(e);fetch(e.href,s)}})();const i=document.getElementById("header-container"),p=document.getElementById("button-menu"),o=document.getElementById("menu"),g=document.getElementById("close-menu"),f=document.getElementById("slider-img"),y=document.getElementById("slider-text"),E=document.getElementById("description"),b=document.getElementById("slider-plants"),h=document.getElementById("prev"),v=document.getElementById("next");let t=0;const r=["./assets/images/curso-1.jpg","./assets/images/curso-2.jpg","./assets/images/curso-3.jpg","./assets/images/curso-4.jpg","./assets/images/curso-5.jpg"],I=["Introducción a la botánica","Identificación de plantas nativas","Jardinería ecológica","Herbolaria urbana","Huertos urbanos"],L=["Aprende los fundamentos de la botánica en este curso introductorio. Exploraremos la anatomía de las plantas, su clasificación y su importancia en el ecosistema urbano.","Aprende a reconocer y clasificar plantas nativas en este curso especializado. Exploraremos sus características distintivas, su ecología y la importancia de conservarlas en sus hábitats naturales.","Descubre las prácticas de jardinería sostenible en este curso. Abordaremos técnicas ecológicas para el cuidado del jardín, la conservación del agua y el uso de plantas autóctonas para fomentar la biodiversidad.","Sumérgete en el mundo de la herbolaria urbana con este curso completo. Conocerás las propiedades medicinales de diversas plantas, cómo cultivarlas en entornos urbanos y su uso en remedios naturales.","Aprende a crear y mantener huertos en entornos urbanos en este curso práctico. Desde la selección de cultivos hasta técnicas de siembra y cosecha, te enseñaremos a producir alimentos frescos y saludables en espacios reducidos."],x=["./assets/images/planta-1.png","./assets/images/planta.png","./assets/images/planta-2.png","./assets/images/planta-3.png"],l=()=>{o.classList.contains("show")?o.classList.remove("show"):o.classList.add("show")},B=()=>{document.documentElement.scrollTop>20?i.classList.add("sticky"):i.classList.remove("sticky")},d=()=>{f.src=r[t],b.src=x[t]},u=()=>{y.textContent=I[t],E.textContent=L[t]},j=()=>{t<=0?t=r.length-1:t--,d(),u()},S=()=>{t>=r.length-1?t=0:t++,d(),u()};window.addEventListener("scroll",B);p.addEventListener("click",l);g.addEventListener("click",l);h.addEventListener("click",j);v.addEventListener("click",S);
