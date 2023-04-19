export default async function displayEvents() {
        const eventContainer = document.querySelector('.events__container');
        eventContainer.innerHTML = [];
        
        const eventList = result._embedded.events;
        eventList.forEach(event => {
            const html = event
            .map((events) => {
                return `
                <h1 class="event__name">${events.name}</h1>
                `;
            })
            .join('');
            eventList.innerHTML = html;
        })
}