/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton = document.querySelector(".menu");
const navigation = document.querySelector(".nav");

if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

        navigation.classList.toggle("show");

    });

}


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICK
========================================================= */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navigation) {
            navigation.classList.remove("show");
        }

    });

});


/* =========================================================
   HEADER ON SCROLL
========================================================= */

const header = document.querySelector(".header");

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (formMessage) {

            formMessage.textContent =
                "Thank you! Your message has been received.";

            formMessage.classList.add("success");

        }

        contactForm.reset();

    });

}


/* =========================================================
   SCROLL ANIMATION
========================================================= */

const animatedElements = document.querySelectorAll(
    ".section, .card, .two-col"
);

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);

animatedElements.forEach(function (element) {

    observer.observe(element);

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElements = document.querySelectorAll(".copyright");

yearElements.forEach(function (element) {

    element.innerHTML =
        "© " +
        new Date().getFullYear() +
        " Zaya Grand Reserve";

});


console.log("Zaya Grand Reserve website loaded successfully.");