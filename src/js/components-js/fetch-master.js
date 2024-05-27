// specialistsService.js

export async function getSpecialists() {
    try {
       const response = await fetch('https://my.binotel.ua/b/bocrm/web-widget/Cys9yKZPYyvOnAEUweXU/get-specialist-list?branchId=1631');
       if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
       }
 
       const data = await response.json();
      //  console.log(data);
       const specialists = data.specialistsList || []; 
 
       return specialists.map(specialist => {
          const { id, name, position, avatar, averageRate, feedbackCount, freeTimes } = specialist;
          const positionName = position?.name || 'Не указано';
          const avatarUrl = avatar ? `https://path.to/images/${avatar}` : 'https://via.placeholder.com/150'; 

          return {
             id,
             name,
             positionName,
             freeTimes,
             avatarUrl,
             averageRate: averageRate || 'Не указан',
             feedbackCount: feedbackCount || 0,
          };
       });
    } catch (error) {
       console.error('Ошибка:', error);
       return []; 
    }
 }
 