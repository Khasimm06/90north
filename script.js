// script.js
document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burger-menu");
    const navbar = document.getElementById("navbar");

    burgerMenu.addEventListener("click", () => {
        navbar.style.display = navbar.style.display === "flex" ? "none" : "flex";
    });
});
