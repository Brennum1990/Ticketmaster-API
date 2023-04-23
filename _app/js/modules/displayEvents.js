export default async function displayEvents(events) {
    const eventContainer = document.querySelector('.events');
    
    // Creating elements
    const eventCard = document.createElement('div');
        const eventImageFrame = document.createElement('div');
            const eventImage = document.createElement('img');
    const eventInfo = document.createElement('div');
        const eventName = document.createElement('h1');
        const eventVenue = document.createElement('h3');
        const eventCity = document.createElement('h3');
        const eventStartDate = document.createElement('p'); 
        const eventStartTime = document.createElement('p');

    // Rendering elements 
    eventName.innerText = events.name;
    eventImageFrame.innerHTML = '';
    eventImage.src = events?.images[0].url;
    eventImage.setAttribute('alt', `'${events.name}'`);
    eventVenue.innerText = events._embedded.venues[0].name;
    eventCity.innerText = events._embedded.venues[0].city.name;
    eventStartDate.innerText = events.dates.start.localDate;
    eventStartTime.innerText = events.dates.start.localTime;

    // Hierarchy of event info
    eventContainer.appendChild(eventCard);
        eventCard.appendChild(eventImageFrame);
            eventImageFrame.appendChild(eventImage);
        eventCard.appendChild(eventInfo);
            eventInfo.appendChild(eventName);
            eventInfo.appendChild(eventVenue);
            eventInfo.appendChild(eventCity);
            eventInfo.appendChild(eventStartDate);
            eventInfo.appendChild(eventStartTime);
    
    // Generating classnames
    eventCard.className = 'event__card';
    eventImageFrame.className = 'event__image-frame';
    eventImage.className = 'event__image';
    eventInfo.className = 'event__info'; 
    eventName.className = 'event__name';
    eventVenue.className = 'event__venue';
    eventCity.className = 'event__city';
    eventStartDate.className = 'event__start-date';
    eventStartTime.className = 'event__start-time';
}