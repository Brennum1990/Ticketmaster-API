export default async function fetchEvents() {
    const baseUrl = 'https://app.ticketmaster.com/discovery/v2/';
    const apiKey = 'XvKLJTgjurq3X2HHq16a8PAAGOYs6Dah';
    const options = {
        method: 'GET'
    };

    fetch(`${baseUrl}events?apikey=${apiKey}`, options)
        .then((response) => response.json())
        .then((json) => console.log(json))
        
        const eventsList = document.getElementById('eventsList');
        const searchBar = document.getElementById('searchBar');
        let ticketMasterEvents = [];

        searchBar.addEventListener('keyup', (e) => {
            const searchString = e.target.value.toLowerCase();
        
            const filteredEvents = ticketMasterEvents.filter((event) => {
                return (
                    events.name.toLowerCase().includes(searchString) ||
                    events.url.toLowerCase().includes(searchString) ||
                    events.dates.toLowerCase().includes(searchString) ||
                    events.venues.toLowerCase().includes(searchString) 
                );
            });
            displayEvents(filteredEvents);
        });

        const loadEvents = async () => {
            try {
                ticketMasterEvents = await res.json();
                displayEvents(ticketMasterEvents);
            } catch (err) {
                console.error(err);
            }
        };
        loadEvents();

        // event.forEach(events => {
        //     const liElement = document.createElement('li');
        //     liElement.textContent = `
        //         ${events.name},
        //         ${events.address}, 
        //         ${events.url},
        //         ${events.dates}`;
        //     eventsList.appendChild(liElement);
        // })

        const displayEvents = (event) => {
            const htmlString = event
                .map((events) => {
                    return `
                    <li class="events">
                        <h2>${events.name}</h2>
                        <p>${events.url}</p>
                        <p>${events.dates}></p>
                    </li>
                `;
                })
                .join('');
            eventsList.innerHTML = htmlString;
        };

}