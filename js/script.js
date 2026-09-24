/* Dark and Light Mode */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    if (themeToggle) {
        themeToggle.textContent = "Dark Mode";
    }

}

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            localStorage.setItem("theme", "light");
            themeToggle.textContent = "Dark Mode";

        } else {

            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "Light Mode";

        }

    });

}


/* Mobile Navigation */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("show");

    });

}


/* Today's Date */

const date = document.getElementById("date");

if (date) {

    const today = new Date();

    date.textContent = today.toLocaleDateString();

}


/* Back to Top */

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* Project Filtering */

function filterProjects(category) {

    const projects = document.querySelectorAll(".project-card");

    projects.forEach(function(project) {

        if (category === "all" || project.dataset.category === category) {

            project.style.display = "block";

        } else {

            project.style.display = "none";

        }

    });

}


/* Expandable Project Cards */

function showProjectInfo(button) {

    const projectInfo = button.nextElementSibling;

    projectInfo.classList.toggle("show");

    if (projectInfo.classList.contains("show")) {

        button.textContent = "View Less";

    } else {

        button.textContent = "View More";

    }

}
const clock = document.getElementById("clock");
function updateClock() {
    const now = new Date();
    clock.textContent= now.toLocaleTimeString();
}
updateClock();
setInterval(updateClock,1000)