import { getSpecialists } from './components-js/fetch-master.js';
import {filterStartStopTime} from './services/tools.js'


async function displaySpecialists() {
    const specialists = await getSpecialists() || [];

    if (!Array.isArray(specialists)) {
        console.error("specialists is not an array");
        return;
    }


      specialists.sort((a, b) => {
      const rateA = parseFloat(a.averageRate) || 0;
      const rateB = parseFloat(b.averageRate) || 0;

      // If either rating is NaN or invalid, treat it as 0 for comparison
      if (isNaN(rateA) && isNaN(rateB)) return 0; // Both are invalid
      if (isNaN(rateA)) return 1; // a is invalid, b is valid
      if (isNaN(rateB)) return -1; // a is valid, b is invalid

      return rateB - rateA; // Compare numeric ratings in descending order
   });

    const container = document.querySelector('.specialists-grid');
    container.innerHTML = ''; 

    specialists.forEach((specialist, i) => {
        const { name, positionName, freeTimes, averageRate, feedbackCount, id } = specialist;

        const localImageUrl = `../img/masters/${id}.jpg`;


        const specialistElement = document.createElement('div');
        specialistElement.classList.add('uk-card', 'uk-card-default', 'uk-card-hover', 'master-card');

        specialistElement.setAttribute('uk-scrollspy', `cls: uk-animation-right; repeat: false; delay: ${(i + 2) * 100};`);


        const dateKey = Object.keys(freeTimes)[0];
        const timeslots = freeTimes[dateKey];


    const workDay = dateKey.split('-').slice(1).reverse().join('.');

    const timeIntervals = timeslots.map(slot => {
        const startTime = slot.startTime.slice(11, 16);
        const stopTime = slot.stopTime.slice(11, 16);
        return filterStartStopTime(startTime, stopTime); // Формирование строки для каждого слота
    }).join(' ');

        specialistElement.innerHTML = `
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="img-wrapper-card">
                        <img class="specialist-avatar" src="${localImageUrl}" alt="${name}'s avatar">
                    </div>
                    <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">${name}</h3>
                        <p class="uk-text-meta uk-margin-remove-top">${positionName}</p>
                        <p class="rate">
                        <span class="rate-text">Рейтинг:</span>
                        <span class="rate-num">${averageRate || '-'}</span>
                        <span uk-icon="heart"></span>
                        </p>
                    </div>                    
                </div>
            </div>
            
            <div class="uk-card-body master_card_body">
                <ul сlass="worked open-binotel-modal open-binotel">
                    <li class="worked-title">
                        <span class="icon" uk-icon="home"></span> 
                        <span class="work-text">Працюю - </span> 
                    </li>
                    <li class="worked-title">
                        <span class="work-text"> ${workDay} </span>
                        <span class="icon" uk-icon="calendar"></span>
                    </li>
                </ul>
                <span class="startstoptime-text">Вільний час для запису:</span> 
               <div class="work-time">
                 ${timeIntervals}             
              </div>    
            </div>
            <div class="uk-card-footer">
                <p class="open-binotel"><span uk-icon="commenting open-binotel"></span> Відгуки:${feedbackCount || 0} </p>
                <div class="btn-wrapp">
                  <a class="uk-button-link btn-danger open-binotel-modal" href="https://bookon.ua/lite/Cys9yKZPYyvOnAEUweXU">Записатись</a>
                </div>
            </div>
        `;

        container.appendChild(specialistElement);

        const img = specialistElement.querySelector('.specialist-avatar');

        img.onerror = () => {
            img.classList.add('placeholder-img');
            img.removeAttribute('src');
        };
    });
}

displaySpecialists();



function startAnimation(element) {
    element.style.animation = 'none';
    element.offsetHeight; // Триггер reflow
    element.style.animation = 'lds-circle 2.5s cubic-bezier(0, 0.1, 0, 1) 1';
}

window.startAnimation = startAnimation;


document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.open-binotel');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Предотвратим действие по умолчанию, если это ссылка
            window.location.href = 'https://bookon.ua/lite/Cys9yKZPYyvOnAEUweXU'; // Перенаправление на URL
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const footerLogo = document.querySelector('.footer-logo img'); // Предполагаем, что ваш логотип в футере - это img в .footer-logo
    if (!footerLogo) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footerLogo.classList.add('animate');
                observer.unobserve(entry.target); // Отключить наблюдение после активации анимации
            }
        });
    }, {
        threshold: 0.5 // Запуск анимации, когда футер на 50% видим на экране
    });

    observer.observe(footerLogo);
});


