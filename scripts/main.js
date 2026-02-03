/*
    File: main.js
    Purpose: Demonstrates DOM manipulation and event handling
    Course: IST 256 Programming for the Web | Mr. Ri 
*/

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       IMAGE HOVER EFFECT (mouseover / mouseout)
       ========================================= */
    const projectImage = document.getElementById("project-image");

    projectImage.addEventListener("mouseover", function () {
        projectImage.style.transform = "scale(1.08)";
    });

    projectImage.addEventListener("mouseout", function () {
        projectImage.style.transform = "scale(1)";
    });

    /* =========================================
       SECTION TOGGLE BUTTONS
       ========================================= */

    function setupToggle(buttonId, sectionId, label) {
        const button = document.getElementById(buttonId);
        const section = document.getElementById(sectionId);

        button.addEventListener("click", function () {
            if (section.style.display === "none") {
                section.style.display = "block";
                button.textContent = "Hide " + label;
            } else {
                section.style.display = "none";
                button.textContent = "Show " + label;
            }
        });
    }

    setupToggle("toggle-about", "about", "About");
    setupToggle("toggle-skills", "skills", "Skills");
    setupToggle("toggle-projects", "projects", "Featured Project");
    setupToggle("toggle-contact", "contact", "Contact");

    /* =========================================
       FORM SUBMISSION HANDLING
       ========================================= */
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you! Your message has been sent.");
        form.reset();
    });

});
