//Menu
const menu = document.querySelector(".navbar__links");
const menuBtn = document.querySelector(".navbar__icon");
const overlay = document.querySelector("#overlay");
menuBtn.addEventListener('click',() =>{
    menu.classList.toggle("navbar__open");
    menuBtn.classList.toggle('open');
    overlay.classList.toggle("show");

});
overlay.addEventListener('click',() =>{
    overlay.classList.toggle("show");
    menu.classList.toggle("navbar__open");
    menuBtn.classList.toggle('open');
})