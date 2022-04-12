const buttonb = document.querySelector(".button-b")
const navbar = document.querySelector(".nav-bar");

buttonb.addEventListener("click", () => {
buttonb.classList.toggle("active");
navbar.classList.toggle("active");
})
