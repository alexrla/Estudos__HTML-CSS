const hamburger = document.querySelector(".hamburger");

const navBar = document.querySelector(".navbar-items");

console.log(navBar);

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
});