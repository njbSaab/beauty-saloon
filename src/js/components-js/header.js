// class HeaderMagicMouse {
//     constructor(headerSelector) {
//       this.header = document.querySelector(headerSelector);
//       this.initMagicMouse();
//       this.bindEvents();
//     }
  
//     initMagicMouse() {
//       // Опции MagicMouse
//       this.options = {
//         "cursorOuter": "circle-basic",
//         "hoverEffect": "circle-move",
//         "hoverItemMove": false,
//         "defaultCursor": false,
//         "outerWidth": 30,
//         "outerHeight": 30
//       };
  
//       // Инициализация MagicMouse
//       magicMouse(this.options);
//     }
  
//     bindEvents() {
//         // Включаем MagicMouse только когда курсор находится над .uk-navbar-nav
//         this.header.addEventListener('mouseenter', () => {
//           this.header.classList.add('magic-hover');
//         });
      
//         // Выключаем MagicMouse когда курсор покидает .uk-navbar-nav
//         this.header.addEventListener('mouseleave', () => {
//           this.header.classList.remove('magic-hover');
//         });
//       }
      
//   }
  
//   // Использование класса
// document.addEventListener("DOMContentLoaded", function() {
//     new HeaderMagicMouse('.uk-navbar-nav');
//   });
  