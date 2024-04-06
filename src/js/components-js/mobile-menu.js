class Navbar {
    constructor() {
      this.navBar = document.getElementById('nav-bar');
      this.menuTrigger = document.querySelector('.menu-trigger');
      this.overlayBlur = document.querySelector('.overlay-blur');
      this.navBarLinks = document.querySelectorAll('.overlay-content .nav-bar-link');
      this.bindEvents();
    }
  
    bindEvents() {
      this.navBarLinks.forEach((link) => {
        link.addEventListener('click', () => this.toggleNavbarActive());
      });
  
      this.menuTrigger.addEventListener('click', () => this.toggleNavbarActive());
    }
  
    toggleNavbarActive() {
      this.menuTrigger.classList.toggle('active');
      this.overlayBlur.classList.toggle('active');
  
      if (this.navBar.style.display === "none" || this.navBar.style.display === "") {
        this.navBar.style.display = "block";
        this.navBar.style.opacity = "1";
      } else {
        this.navBar.style.display = "none";
        this.navBar.style.opacity = "0";
      }
  
      this.navBar.style.transition = "opacity 2s ease-in";
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    new Navbar();
  });
  