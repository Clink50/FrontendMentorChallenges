const hamburger = document.getElementById("hamburger");
const navItems = document.getElementById("nav-items");

hamburger.addEventListener("click", () => {
    navItems.classList.toggle("show");
});