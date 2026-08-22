// Smooth welcome message
window.onload = function () {
    console.log("Welcome to Akhil Portfolio");
};

// Navbar active effect
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});
