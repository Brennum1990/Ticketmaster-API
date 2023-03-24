export default async function search() {

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
}