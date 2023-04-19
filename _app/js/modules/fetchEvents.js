import { apiKey } from "../env.js";

export default async function fetchEvents() {
    const baseUrl = 'https://app.ticketmaster.com/discovery/v2';
    const size = '200';
    const options = {
        method: 'GET',
    }; 

    // Fetching API
    const endpoint = `${baseUrl}/events?apikey=${apiKey}&size=${size}`;
    const response = await fetch(endpoint, options)
        try {
            const ticketMasterEvents = await handleResponse(response);
            return ticketMasterEvents;
        }
        catch(error) {
            handleError(error);
        }
    
    // Response - if ok = result
    async function handleResponse(response) {
        if(response.ok) {
            const result = await response.json();
                console.log(result)

    // Response - if not ok = Error         
            } else if (response.status === 404) {
                throw new Error('Url not existing');
            } else if (response.status === 401) {
                throw new Error('Not authorized user');
            } else if (response.status >= 500) {
                throw new Error('Server not responding');
            } else {
                throw new Error('Something went wrong');
            }
        }

    function handleError(error) {
        warningElement.classList.toggle('hidden');
        warningElement.textContent = error;
    }

        // const eventName = document.createElement('h2');

        // eventName.className = 'event__name';

        // AllEvents.forEach(events => {
        //     const liElement = document.createElement('li');
        //     liElement.textContent = `
        //     <h1>${_embedded.events.name}</h1>
        //     `;
        // // eventContainer.insertAdjacentHTML('afterbegin', html);
        // ulElement.appendChild(liElement);
        // })
   

    // Rendering eventitems to HTML
    // const eventList = document.getElementById('eventList');
    // document.querySelector('eventList').innerText = result
    // result(ticketMasterEvents);
    // let ticketMasterEvents = [];
    
    // const renderEvents = (allEvents) => {
    //     const htmlString = allEvents
    //         .map((events) => {
    //             return `
    //                 <li class="events">
    //                 <h1>${events.name}</h1>
    //                 <img src="${events.images}"></img>
    //                 <p>${events.type}</p>
    //                 <p>${events.dates}</p>
    //                 <p>${events._embedded.venues}</p>
    //                 </li>`;
    //             })
    //             .join('');
    //         eventList.innerHTML = htmlString;
    //     };
    //     renderEvents();
}