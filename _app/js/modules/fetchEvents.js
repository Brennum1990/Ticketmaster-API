import { apiKey } from "../env.js";
import displayEvents from "./displayEvents.js";

const warningElement = document.querySelector('.warning');

export default async function fetchEvents() {
    const baseUrl = 'https://app.ticketmaster.com/discovery/v2';
    const size = '20';
    const options = {
        method: 'GET',
    }; 

    // Fetching API
    const endpoint = `${baseUrl}/events?apikey=${apiKey}&size=${size}&city=Denver`;
    const response = await fetch(endpoint, options)
        console.log(response);
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
            const result = await response.json(); // Extracting result as a JSON Object from the response
                console.log(result)
            const eventList = result._embedded.events;
            eventList.forEach(event => { 
                displayEvents(event)   // Import list 
            });

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
}