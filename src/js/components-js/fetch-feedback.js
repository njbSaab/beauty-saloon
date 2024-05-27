// feedbackService.js

export async function getSpecialistFeedback(specialistId) {
    try {
       const response = await fetch(`https://my.binotel.ua/b/bocrm/web-widget/Cys9yKZPYyvOnAEUweXU/get-specialist-feedback?specialistId=${specialistId}`);
       if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
       }
 
       const data = await response.json();
       return data.feedback || []; // Вернем массив отзывов
    } catch (error) {
       console.error('Ошибка:', error);
       return []; // Вернем пустой массив в случае ошибки
    }
 }
 