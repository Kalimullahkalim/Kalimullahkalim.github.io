// ============================
// Active Navigation on Scroll
// ============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        // Swapped pageYOffset for window.scrollY
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        
        // If the href matches the current section id, add the active class
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});