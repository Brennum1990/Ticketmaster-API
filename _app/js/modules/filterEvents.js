import fetchEvents from "./fetchEvents.js";

export default async function filterEvents() {

	const eventsContainer = document.querySelector('.events');
	
	let filteredEvents = [];
	const searchInput = document.getElementById('searchBar');
		console.log(searchBar);
	searchInput.addEventListener('keyup', e => {
		const searchString = e.target.value; 
		if(searchString.length > 2) {
			filteredEvents.filter(events => {
				events.name.contains(searchString) ||
				events._embedded.venues[0].name.contains(searchString);
			});
			eventsContainer.innerText = '';
			fetchEvents('search', searchString);
		}
	})
}

