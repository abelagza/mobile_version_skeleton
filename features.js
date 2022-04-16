const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");
const blur = document.getElementById("body");
const blur1 = document.getElementById("projects");
const blur2 = document.getElementById("about");
const blur3 = document.getElementById("contact");
const aLogo = document.getElementById("logo");


hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
    hamburger.classList.toggle('show');
    blur.classList.toggle('show');
    blur1.classList.toggle('show');
    blur2.classList.toggle('show');
    blur3.classList.toggle('show');
    aLogo.classList.toggle('show');
})

document.querySelectorAll(".h-bttn").forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove("show");
    navUl.classList.remove("show"); 
    blur.classList.remove("show");
    blur1.classList.remove('show');
    blur2.classList.remove('show');
    blur3.classList.remove('show');
    aLogo.classList.remove('show');
}))