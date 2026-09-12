/* =========================================================
   AHMED HASHMI | IT TRAINER
   COMPLETE JAVASCRIPT
   ========================================================= */


/* =========================================================
   MOBILE HAMBURGER MENU
   ========================================================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function (event) {

        event.stopPropagation();

        navLinks.classList.toggle("show");

        if (navLinks.classList.contains("show")) {

            menuBtn.innerHTML = "✕";
            menuBtn.setAttribute("aria-label", "Close Menu");

        } else {

            menuBtn.innerHTML = "☰";
            menuBtn.setAttribute("aria-label", "Open Menu");

        }

    });


    /* Close menu when navigation link is clicked */

    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");

            menuBtn.innerHTML = "☰";
            menuBtn.setAttribute("aria-label", "Open Menu");

        });

    });


    /* Close menu when clicking outside */

    document.addEventListener("click", function (event) {

        if (
            !navLinks.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {

            navLinks.classList.remove("show");

            menuBtn.innerHTML = "☰";
            menuBtn.setAttribute("aria-label", "Open Menu");

        }

    });

}


/* =========================================================
   HEADER SCROLL EFFECT
   ========================================================= */

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


/* =========================================================
   HOME PAGE ANIMATION
   ========================================================= */

const revealElements = document.querySelectorAll(
    ".hero-content, .hero-image, .intro-card, .section-title"
);

if (revealElements.length > 0) {

    const revealObserver = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

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

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        revealObserver.observe(element);

    });

}


/* =========================================================
   GENERAL PAGE ANIMATION
   ========================================================= */

const animatedElements = document.querySelectorAll(
    ".page-hero, .about-image, .about-content, .service-card, .academy-box"
);

if (animatedElements.length > 0) {

    const generalObserver = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    generalObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    animatedElements.forEach(function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        generalObserver.observe(element);

    });

}


/* =========================================================
   SKILLS PAGE ANIMATION
   ========================================================= */

const skillCards = document.querySelectorAll(".skill-card");

if (skillCards.length > 0) {

    const skillObserver = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

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

        card.style.transform =
            "translateY(30px)";

        card.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        card.style.transitionDelay =
            (index * 0.08) + "s";

        skillObserver.observe(card);

    });

}


/* =========================================================
   SKILLS GENERAL ANIMATION
   ========================================================= */

const pageElements = document.querySelectorAll(
    ".skills-hero, .skills-section .section-heading, .focus-box"
);

if (pageElements.length > 0) {

    const pageObserver = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

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

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        pageObserver.observe(element);

    });

}


/* =========================================================
   EXPERIENCE PAGE ANIMATION
   ========================================================= */

const experienceItems =
    document.querySelectorAll(".experience-item");

if (experienceItems.length > 0) {

    const experienceObserver = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    experienceObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    experienceItems.forEach(function (item, index) {

        item.style.opacity = "0";

        item.style.transform =
            "translateY(25px)";

        item.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        item.style.transitionDelay =
            (index * 0.12) + "s";

        experienceObserver.observe(item);

    });

}


/* =========================================================
   FOOTER CURRENT YEAR
   ========================================================= */

const footerText = document.querySelector(".footer p");

if (footerText) {

    footerText.innerHTML =
        "© " +
        new Date().getFullYear() +
        " Ahmed Hashmi. All Rights Reserved.";

}
