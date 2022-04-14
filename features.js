const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
    hamburger.classList.toggle('show');
})

document.querySelectorAll(".h-bttn").forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove("show");
    navUl.classList.remove("show"); 
}))