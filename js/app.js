const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".main-menu");
const links = document.querySelectorAll(".main-menu>li");

hamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('open');
})