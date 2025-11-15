/* =====================================================
   SMOOTH SCROLL TO SECTION
===================================================== */
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

/* =====================================================
   FLIP CARD
===================================================== */
function flipCard(card) {
  card.classList.toggle("flipped");
}

/* =====================================================
   CYBER SLIDE REVEAL ANIMATION (Loop on scroll)
===================================================== */

const revealElements = document.querySelectorAll(
  ".reveal-left, .reveal-right, .reveal-up"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // munculkan
      } else {
        entry.target.classList.remove("show"); // sembunyikan lagi agar bisa animasi ulang
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((el) => revealObserver.observe(el));

/* =====================================================
   NAVBAR ACTIVE HIGHLIGHT
===================================================== */
const navButtons = document.querySelectorAll("nav button");

const sections = {
  home: document.getElementById("home"),
  about: document.getElementById("about"),
  project: document.getElementById("project"),
};

function highlightNav() {
  let current = "";

  for (const [key, section] of Object.entries(sections)) {
    const top = section.getBoundingClientRect().top;

    if (top <= 150 && top >= -section.offsetHeight + 150) {
      current = key;
    }
  }

  navButtons.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.textContent.toLowerCase() === current) {
      btn.classList.add("active");
    }
  });
}

window.addEventListener("scroll", highlightNav);
window.addEventListener("load", highlightNav);

/* =====================================================
   NAVBAR FADE-IN AWAL
===================================================== */
navButtons.forEach((btn) => btn.classList.add("show"));
