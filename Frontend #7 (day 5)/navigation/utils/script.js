const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

// ketika di klik (open) - buat nambah active
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// ketika di klik (close) - buat hapus active
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))