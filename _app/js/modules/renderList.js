export default function renderList(stations) {
    const ulElement = document.querySelector('.ul-container');

    stations.forEach(station => {
        const liElement = document.createElement('li');
        liElement.textContent = `
            ${station.station} - 
            ${station.address}, 
            available:  
            ${station.availabilityBikes}/
            ${station.avalbilityDocks}`;
        ulElement.appendChild(liElement);
    })
}