export function getWeekday(isoString) {
    const date = new Date(isoString);
 
    return date.toLocaleDateString('en-US', { weekday: 'long' }); // Outputs weekday name
 }
 

export function formatDate(isoString) {
    const date = new Date(isoString);
 
    const day = date.getDate().toString().padStart(2, '0'); // Day as "01"
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month as "05"
 
    return `${day}-${month}`;
 }
 

 export function filterStartStopTime(start, end){
    return `<ul class="startstoptime-list"><li class="start"><span class="icon" uk-icon="clock"></span></li><li class="start">${start}</li><li class="">-</li><li class="end">${end}</li></ul>`
 }
