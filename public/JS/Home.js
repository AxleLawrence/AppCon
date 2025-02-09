document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const mobileLinks = document.querySelectorAll(".mobile-nav-link");

    function activateLink(links, clickedLink) {
        links.forEach(link => link.classList.remove("active"));
        clickedLink.classList.add("active");
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            activateLink(navLinks, this);
        });
    });

    mobileLinks.forEach(link => {
        link.addEventListener("click", function () {
            activateLink(mobileLinks, this);
        });
    });
});
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});