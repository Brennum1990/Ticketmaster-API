export default async function displayEvents(event) {
    const eventContainer = document.querySelector('.events');
    
    // Creating elements
    const eventCard = document.createElement('div');
    const eventImageFrame = document.createElement('div');
    const eventInfo = document.createElement('div');
    const eventName = document.createElement('h1');
    const eventImage = document.createElement('img');
    const eventVenue = document.createElement('h3');
    const eventCity = document.createElement('h3');

    // Rendering elements 
    eventName.innerHTML = event.name; 
    eventImage.innerHTML = event.images[0];
    eventVenue.innerText = event._embedded.venues[0].name;
    eventCity.innerText = event._embedded.venues[0].city.name; 

    // Hierarchy of event info
    eventContainer.appendChild(eventCard);
        eventCard.appendChild(eventImageFrame);
            eventImageFrame.appendChild(eventImage);
        eventCard.appendChild(eventInfo);
            eventInfo.appendChild(eventName);
            eventInfo.appendChild(eventVenue);
            eventInfo.appendChild(eventCity);
    
    // Generating classname
    eventCard.className = 'event__card';
    eventImageFrame.classname = 'event__image-frame';
    eventImage.classname = 'event__image';
    eventInfo.className = 'event__info'; 
    eventName.className = 'event__name';
    eventVenue.classname = 'event__venue';
    eventCity.classname = 'event__city';
}