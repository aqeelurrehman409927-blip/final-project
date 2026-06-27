// ===============================
// AI Tech Solutions JavaScript
// ===============================

// Welcome Message
window.addEventListener("load", () => {
    console.log("Welcome to AI Tech Solutions");
});

// ===============================
// Sticky Header Shadow
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    } else {
        header.style.boxShadow = "none";
    }
});

// ===============================
// Scroll Animation
// ===============================

const cards = document.querySelectorAll(".card");

function showCards() {
    cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
}

cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s";
});

window.addEventListener("scroll", showCards);
showCards();

// ===============================
// Contact Form Validation
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let empty = false;

    inputs.forEach((input) => {
        if (input.value.trim() === "") {
            empty = true;
        }
    });

    if (empty) {
        alert("Please fill all fields.");
    } else {
        alert("Message Sent Successfully!");
        form.reset();
    }
});

// ===============================
// Back To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "12px 16px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#2563eb";
topBtn.style.color = "#fff";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.fontSize = "20px";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ===============================
// Active Menu Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// Hero Button Effect
// ===============================

const heroBtn = document.querySelector(".btn");

heroBtn.addEventListener("mouseenter", () => {

    heroBtn.style.transform = "scale(1.05)";

});

heroBtn.addEventListener("mouseleave", () => {

    heroBtn.style.transform = "scale(1)";

});

// ===============================
// Console Message
// ===============================

console.log("AI Tech Solutions Website Loaded Successfully!");