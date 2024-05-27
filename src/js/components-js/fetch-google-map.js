const placeId = 'ChIJS2eodnfP1EARSl_xuDj2Lx8'; // Place ID вашего салона!N
const apiKey = 'AIzaSyCfd3kVKqNIA7aEi80yKJh6FjS-C???-PsBs'; // Ваш API ключ
const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`;


document.addEventListener('DOMContentLoaded', function() {
        // Using the data attribute to select the element
        const displayDiv = document.querySelector('[data-display="server-data"]');
        fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayDiv.textContent = JSON.stringify(data, null, 2);
        // Здесь вы можете обрабатывать полученные данные, например, выводить их на веб-странице
        // Убедитесь, что вы обрабатываете ответ API соответствующим образом
    })
    .catch(error => {
        console.error('Ошибка при запросе к Google Places API:', error);
        displayDiv.textContent = 'Failed to load data.';
    });
});