const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("show");

        if (navLinks.classList.contains("show")) {
            menuBtn.innerHTML = "✕";
        } else {
            menuBtn.innerHTML = "☰";
        }
    });

    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("show");
            menuBtn.innerHTML = "☰";
        });
    });
}


const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
    if (!header) return;

    if (window.scrollY > 30) {
        header.style.boxShadow = "0 12px 35px rgba(50, 35, 25, 0.10)";
    } else {
        header.style.boxShadow = "0 12px 35px rgba(50, 35, 25, 0.06)";
    }
});


const revealElements = document.querySelectorAll(
    ".hero-content, .hero-image, .intro-card, .section-title"
);

const revealObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(function (element) {
    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);
});


const yearElement = document.querySelector(".footer p");

if (yearElement) {
    yearElement.innerHTML =
        "© " + new Date().getFullYear() +
        " Ahmed Hashmi. All Rights Reserved.";
}

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        if (navLinks.classList.contains("show")) {
            menuBtn.innerHTML = "✕";
        } else {
            menuBtn.innerHTML = "☰";
        }

    });


    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");

            menuBtn.innerHTML = "☰";

        });

    });

}


/* =========================
   HEADER SCROLL EFFECT
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (!header) return;

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 12px 35px rgba(43, 33, 28, 0.10)";

    } else {

        header.style.boxShadow =
            "0 8px 25px rgba(43, 33, 28, 0.06)";

    }

});


/* =========================
   PAGE ANIMATION
========================= */

const animatedElements = document.querySelectorAll(
    ".page-hero, .about-image, .about-content, .service-card, .academy-box"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach(function (element) {

    element.classList.add("animate");

    observer.observe(element);

});


/* =========================
   CURRENT YEAR
========================= */

const footerText = document.querySelector(".footer p");

if (footerText) {

    footerText.innerHTML =
        "© " +
        new Date().getFullYear() +
        " Ahmed Hashmi. All Rights Reserved.";

}

// =========================================
// MOBILE NAVBAR
// =========================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        if (navLinks.classList.contains("show")) {
            menuBtn.innerHTML = "✕";
        } else {
            menuBtn.innerHTML = "☰";
        }

    });

    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");
            menuBtn.innerHTML = "☰";

        });

    });
}


// =========================================
// HEADER SCROLL EFFECT
// =========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (!header) return;

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 12px 35px rgba(43, 33, 28, 0.12)";

    } else {

        header.style.boxShadow =
            "0 8px 25px rgba(43, 33, 28, 0.06)";

    }

});


// =========================================
// SKILLS PAGE ANIMATION
// =========================================

const skillCards = document.querySelectorAll(".skill-card");

if (skillCards.length > 0) {

    const skillObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    skillObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    skillCards.forEach(function (card, index) {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        card.style.transitionDelay =
            (index * 0.08) + "s";

        skillObserver.observe(card);

    });

}


// =========================================
// GENERAL PAGE ANIMATION
// =========================================

const pageElements = document.querySelectorAll(
    ".skills-hero, .skills-section .section-heading, .focus-box"
);

if (pageElements.length > 0) {

    const pageObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    pageObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    pageElements.forEach(function (element) {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        pageObserver.observe(element);

    });

}


// =========================================
// FOOTER YEAR
// =========================================

const footerText = document.querySelector(".footer p");

if (footerText) {

    footerText.innerHTML =
        "© " +
        new Date().getFullYear() +
        " Ahmed Hashmi. All Rights Reserved.";

}
/* =========================================
   EXPERIENCE PAGE ANIMATION
========================================= */

const experienceItems = document.querySelectorAll(".experience-item");

if (experienceItems.length > 0) {

    const experienceObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    experienceObserver.unobserve(entry.target);
                }

            });

            /* =========================================================
   AHMED HASHMI | IT TRAINER
   MOBILE HAMBURGER MENU
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {

        // Open / Close mobile menu
        menuBtn.addEventListener("click", function () {
            navLinks.classList.toggle("show");

            // Change hamburger icon
            if (navLinks.classList.contains("show")) {
                menuBtn.innerHTML = "✕";
            } else {
                menuBtn.innerHTML = "☰";
            }
        });


        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("show");
                menuBtn.innerHTML = "☰";
            });
        });


        // Close menu if user clicks outside
        document.addEventListener("click", function (event) {

            if (
                !navLinks.contains(event.target) &&
                !menuBtn.contains(event.target)
            ) {
                navLinks.classList.remove("show");
                menuBtn.innerHTML = "☰";
            }

        });

    }

});

        },
        {
            threshold: 0.15
        }
    );


    experienceItems.forEach(function (item, index) {

        item.style.opacity = "0";
        item.style.transform = "translateY(25px)";
        item.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        item.style.transitionDelay =
            (index * 0.12) + "s";

        experienceObserver.observe(item);

    });

}
