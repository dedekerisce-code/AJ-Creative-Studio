
/* ==========================================
   AJ CREATIVE STUDIO
   WEBSITE CONTROL SYSTEM
========================================== */


/* ==========================================
   1. MOBILE NAVIGATION
========================================== */

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        const isOpen = nav.classList.toggle("active");

        menuButton.classList.toggle("active", isOpen);

        menuButton.setAttribute("aria-expanded", isOpen);

    });

    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");
            menuButton.classList.remove("active");

            menuButton.setAttribute("aria-expanded", "false");

        });

    });

}


/* ==========================================
   2. SCROLL REVEAL ANIMATIONS
========================================== */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}


/* ==========================================
   3. AUTOMATIC FOOTER YEAR
========================================== */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* ==========================================
   4. CONTACT FORM
========================================== */

const contactForm = document.getElementById("contactForm");

// Replace this with your actual business email.
const businessEmail = "contact.ajcreativestudio@gmail.com";

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        if (!contactForm.reportValidity()) return;

        const formData = new FormData(contactForm);

        const name = formData.get("name");
        const email = formData.get("email");
        const service = formData.get("service");
        const deadline = formData.get("deadline");
        const message = formData.get("message");

        const subject = encodeURIComponent(
            `New Project Enquiry - ${name}`
        );

        const body = encodeURIComponent(
`Hello AJ Creative Studio,

I would like to enquire about a project.

NAME:
${name}

EMAIL:
${email}

SERVICE:
${service}

DEADLINE:
${deadline || "Not specified"}

PROJECT DETAILS:
${message}

Looking forward to hearing from you.

${name}`
        );

        const mailtoLink =
            `mailto:${businessEmail}?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;

    });

}


/* ==========================================
   5. SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});
