import { apiKey } from "../env.js";
import displayEvents from "./displayEvents.js";

export default async function fetchEvents() {

    // API-parameters 
    const baseUrl = 'https://app.ticketmaster.com/discovery/v2';
    const size = '50';
    const options = {
        method: 'GET',
    }; 

    // Fetching API
    const endpoint = `${baseUrl}/events?apikey=${apiKey}&size=${size}&countryCode=US`;
    const response = await fetch(endpoint, options)
        try {
            const ticketMasterEvents = await handleResponse(response);
            return ticketMasterEvents;
        }
        catch(error) {
            handleError(error);
        }
    
    // Result
    async function handleResponse(response) {
        if(response.ok) {
            const result = await response.json(); 
            // Extracting result as a JSON Object from the response
            console.log(result)
            const eventList = result._embedded.events;
            eventList.forEach(event => { 
                displayEvents(event)
            });

    // Error         
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

    // Displays a warning containing the error 
    const warningElement = document.querySelector('.warning');

    function handleError(error) {
        warningElement.classList.toggle('hidden');
        warningElement.textContent = error;
    }
}

// function handleSearchInput() {
// const { results } = eventList
// const filteredArray = results
//     .filter(event => event.name)
//     .filter(event => event.city);
// console.log(filteredArray)
// }