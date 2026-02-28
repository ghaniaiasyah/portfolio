const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const btn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

if (btn && nav) {
  btn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  // auto close when clicking a link on mobile
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}