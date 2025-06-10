// Run after the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Handle nav link click animations
  const links = document.querySelectorAll('nav a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", () => {
      const id = link.getAttribute("href").substring(1);
      const section = document.getElementById(id);

      if (id === "footer") {
        section.classList.add("glow");
        setTimeout(() => section.classList.remove("glow"), 1000);
      } else {
        const heading = section.querySelector(".section-title");
        if (heading) {
          heading.classList.add("flash");
          setTimeout(() => heading.classList.remove("flash"), 400);
        }
      }
    });
  });

  // Handle project dropdown toggles
  const toggles = document.querySelectorAll(".project-toggle");
  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const item = toggle.parentElement;
      item.classList.toggle("active");
    });
  });
});
