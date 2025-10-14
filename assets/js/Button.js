// This script toggles the navigation menu on mobile devices
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        // Toggle the dropdown menu when the menu button is clicked
        menuToggle.addEventListener("click", (event) => {
            navLinks.classList.toggle("active");
            event.stopPropagation(); // Prevent the click from propagating to the document
        });

        // Close the dropdown menu when clicking anywhere else on the screen
        document.addEventListener("click", () => {
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
            }
        });

        // Close the dropdown menu when touching anywhere else on the screen
        document.addEventListener("touchstart", () => {
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
            }
        });

        // Prevent clicks or touches inside the dropdown menu from closing it
        navLinks.addEventListener("click", (event) => {
            event.stopPropagation();
        });

        navLinks.addEventListener("touchstart", (event) => {
            event.stopPropagation();
        });

        // Prevent touches on the menu toggle from closing the menu
        menuToggle.addEventListener("touchstart", (event) => {
            event.stopPropagation();
        });
    } else {
        console.error("Menu toggle or nav links not found in the DOM.");
    }
});