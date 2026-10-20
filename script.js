
const menuButton = document.getElementById("menu-button");
const navbar = document.getElementById("navbar");

// Open and close the mobile navigation menu
menuButton.addEventListener("click", function () {
    navbar.classList.toggle("open");

    const isOpen = navbar.classList.contains("open");
    menuButton.setAttribute("aria-expanded", isOpen);
});

// Close the menu after clicking a navigation link
const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
    });
});

// Automatically show the current year
document.getElementById("year").textContent =
    new Date().getFullYear();

    