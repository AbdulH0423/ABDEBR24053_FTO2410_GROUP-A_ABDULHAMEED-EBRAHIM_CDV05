const navToggle = document.querySelector(".nav_toggle");
const body = document.body;
const navBackdrop = document.querySelector(".nav-backdrop");

// Toggle Nav Open/Close
navToggle.addEventListener("click", () => {
    body.classList.toggle("nav-open");
});

// Close Nav when Clicking Backdrop
navBackdrop.addEventListener("click", () => {
    body.classList.remove("nav-open");
});
