// Run the script after the page has fully loaded
document.addEventListener("DOMContentLoaded", function () {

  // Select all nav links that point to page sections (e.g., #about, #skills)
  const links = document.querySelectorAll('nav a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", () => {

      // Get the target section ID (removing the '#' from href)
      const id = link.getAttribute("href").substring(1);
      const section = document.getElementById(id);

      // If it's the footer (Contact section), apply glow effect
      if (id === "footer") {
        section.classList.add("glow");
        setTimeout(() => section.classList.remove("glow"), 1000);
      } 
      // Otherwise, apply zoom animation to section heading
      else {
        const heading = section.querySelector(".section-title");
        if (heading) {
          heading.classList.add("flash");
          setTimeout(() => heading.classList.remove("flash"), 400);
        }
      }
    });
  });
});
