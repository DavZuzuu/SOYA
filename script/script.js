document.addEventListener("DOMContentLoaded", function() {
    var menu = document.querySelector(".menu");
    var topSection = document.querySelector(".top-page");
    
    window.addEventListener("scroll", function() {
      if (window.scrollY >= topSection.offsetTop + topSection.offsetHeight) {
        menu.classList.add("menu-scrolled");
      } else {
        menu.classList.remove("menu-scrolled");
      }
    });
  });
  