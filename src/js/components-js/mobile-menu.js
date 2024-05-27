// class Navbar {
//     constructor() {
//       this.navBar = document.getElementById('nav-bar');
//       this.menuTrigger = document.querySelector('.menu-trigger');
//       this.overlayBlur = document.querySelector('.overlay-blur');
//       this.navBarLinks = document.querySelectorAll('.overlay-content .nav-bar-link');
//       this.bindEvents();
//     }
  
//     bindEvents() {
//       this.navBarLinks.forEach((link) => {
//         link.addEventListener('click', () => this.toggleNavbarActive());
//       });
  
//       this.menuTrigger.addEventListener('click', () => this.toggleNavbarActive());
//     }
  
//     toggleNavbarActive() {
//       this.menuTrigger.classList.toggle('active');
//       this.overlayBlur.classList.toggle('active');
  
//       if (this.navBar.style.display === "none" || this.navBar.style.display === "") {
//         this.navBar.style.display = "block";
//         this.navBar.style.opacity = "1";
//       } else {
//         this.navBar.style.display = "none";
//         this.navBar.style.opacity = "0";
//       }
  
//       this.navBar.style.transition = "opacity 2s ease-in";
//     }
//   }
  
//   document.addEventListener('DOMContentLoaded', function () {
//     new Navbar();
//   });
  

class Navbar {
  constructor() {
    this.ukNavBar = document.querySelector('.uk-navbar');  // Верхний navbar
    this.navBar = document.querySelector('.overlay');      // Оверлейное меню
    this.menuTriggerDesktop = document.querySelector('[data-nav-desktop="true"]');
    this.menuTriggerMobile = document.querySelector('[data-nav-mobile="true"]');
    this.bindEvents();
  }

  bindEvents() {
    if (this.menuTriggerDesktop) {
      this.menuTriggerDesktop.addEventListener('click', () => this.toggleNavbar('desktop'));
    }

    if (this.menuTriggerMobile) {
      this.menuTriggerMobile.addEventListener('click', () => this.toggleNavbar('mobile'));
    }
  }

  toggleNavbar(type) {
    if (type === 'desktop') {
      // Переключение класса active только для desktop кнопки и изменение состояния ukNavBar
      this.menuTriggerDesktop.classList.toggle('active');
      if (!this.ukNavBar.classList.contains('active')) {
        this.ukNavBar.classList.add('active');
      } else {
        this.ukNavBar.classList.remove('active');
      }
    } else if (type === 'mobile') {
      // Переключение класса active на кнопке mobile и navBar
      this.menuTriggerMobile.classList.toggle('active');
      this.navBar.classList.toggle('active');  // управление оверлейным navBar, а не ukNavBar
    }

    // Обновление стилей видимости navBar
    this.updateNavbarDisplay();
  }

  updateNavbarDisplay() {
    // Проверка и обновление стилей для оверлейного navBar
    if (this.navBar.classList.contains('active')) {
      this.navBar.style.visibility = "visible";
      this.navBar.style.opacity = "1";
    } else {
      this.navBar.style.visibility = "collapse";
      this.navBar.style.opacity = "0";
      this.navBar.style.transition = "opacity .2s ease-in, visibility .4s ease-in";
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  new Navbar();
});
