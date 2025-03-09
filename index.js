

  document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".info ul");
    const hamburger = document.querySelector(".hamburger");
  
    hamburger.addEventListener("click", function () {
      menu.classList.toggle("show"); // Add or remove "show" class
    });
  });
  