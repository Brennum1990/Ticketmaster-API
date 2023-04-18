export default function renderList(fetchEvent) {
	const eventsList = document.getElementById('eventsList');
	const searchBar = document.getElementById('searchBar');

	fetchEvent.forEach(events => {
		const liElement = document.createElement('li');
		liElement.textContent = `
			${events.name} - 
			${events.url} 
			${events.dates.start}
			${events.avalbilityDocks}`;
		eventsList.appendChild(searchBar);
	})
}

const eventsList = document.getElementById('eventsList');
const searchBar = document.getElementById('searchBar');
let tmEvents = [];

searchBar.addEventListener('keyup', (e) => {
	const searchString = e.target.value.toLowerCase();

	const filteredEvents = tmEvents.filter((event) => {
		return (
			_embedded.events.name.toLowerCase().includes(searchString)
		);
	});
	displayEvents(filteredEvents);
});

function displayEvents() {
	const htmlString = event
		.map((event) => {
			`<li class="events">
				<h2>${_embedded.events.name}</h2>
				<p>${_embedded.events.url}</p>
				<p>${_embedded.events.dates}</p>
				<img src="${_embedded.events.images}"></img>
			</li>`;
		})
		.join('');
	eventsList.innerHTML = htmlString;
};


             // const eventsList = document.getElementById('eventsList');
        // const searchBar = document.getElementById('searchBar');

        // searchBar.addEventListener('keyup', (e) => {
        //     const searchString = e.target.value.toLowerCase();
        
        //     const filteredEvents = ticketMasterEvents.filter((event) => {
        //         return (
        //             events.name.toLowerCase().includes(searchString) ||
        //             events.url.toLowerCase().includes(searchString) ||
        //             events.dates.toLowerCase().includes(searchString) ||
        //             events.venues.toLowerCase().includes(searchString) 
        //         );
        //     });
        //     displayEvents(filteredEvents);
        // });

        // event.forEach(events => {
        //     const liElement = document.createElement('li');
        //     liElement.textContent = `
        //         ${events.name},
        //         ${events.address}, 
        //         ${events.url},
        //         ${events.dates}`;
        //     eventsList.appendChild(liElement);
        // })

        // const displayEvents = (event) => {
        //     const htmlString = event
        //         .map((events) => {
        //             return `
        //             <li class="events">
        //                 <h2>${events.name}</h2>
        //                 <p>${events.url}</p>
        //                 <p>${events.dates}></p>
        //             </li>
        //         `;
        //         })
        //         .join('');
        //     eventsList.innerHTML = htmlString;
        // };

		  import { apiKey } from "../env.js";

export default async function fetchEvents() {
    const baseUrl = 'https://app.ticketmaster.com/discovery/v2/';
    const size = '200';
    const options = {
        method: 'GET',
    }; 

    const endpoint = `
                    ${baseUrl}events?
                    apikey=${apiKey}
                    &size=${size}
                    `;

    const response = await fetch(endpoint, options);
        console.log(response);
    const result = await response.json();
        console.log(result.data.hash)
    const events = result._embedded.events;
    renderEvents();
    
    let ticketMasterEvents = [];
    
    // const loadEvents = async () => {
    //     .then(data => {
    //         console.log(data.data);
    //         const html = data.data
    //     .map(events => {
    //     return `
    //         <li class="events">
    //         <h1>${events.name}</h1>
    //         <p>${events.url}</p>
    //         <p>${events.dates}</p>
    //         <img src="${events.images}"></img>
    //     </li>`;
    //     })
    //     .join('');
    //     console.log(html);
    //     document.querySelector('eventsList').insertAdjacentHTML('afterbegin', html);
    //     })
    //         try {
    //             ticketMasterEvents = await res.json();
    //             displayEvents(ticketMasterEvents);
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     };
}
