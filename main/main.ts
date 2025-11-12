// ts/main.ts

// ===============================
// 🧭 Smooth Scroll to Sections
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a[href^='#']");
  const heroButtons = document.querySelectorAll(".hero-buttons a[href^='#']");

  // รวมลิงก์ทั้งหมดที่มี href เป็น #
  const allScrollLinks = [...navLinks, ...heroButtons];

  allScrollLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = (link as HTMLAnchorElement).getAttribute("href")!;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// ===============================
// 🔗 Highlight Active Navbar Link
// ===============================

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll<HTMLElement>("section[id]");
  const scrollY = window.scrollY + 150;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);

    if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink?.classList.add("active");
    } else {
      navLink?.classList.remove("active");
    }
  });
});

