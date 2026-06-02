// script.js 전체 교체

document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll("a[href^='#']");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                const nav = document.querySelector(".nav");
                if (nav && nav.classList.contains("nav-open")) {
                    nav.classList.remove("nav-open");
                }
            }
        });
    });

    const toggleBtn = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".top-bar-right");

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener("click", () => {
            navMenu.classList.toggle("nav-open");
        });
    }

    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thanks! We'll get back to you soon.");
        });
    }
});