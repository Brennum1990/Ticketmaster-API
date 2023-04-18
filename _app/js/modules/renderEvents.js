export default async function renderEvents() {

    const eventList = document.getElementById('eventList');
    result(ticketMasterEvents);
    let ticketMasterEvents = [];

    const renderEvents = (allEvents) => {
            const htmlString = allEvents
                .map((events) => {
                    return `
                    <li class="events">
                    <h1>${events.name}</h1>
                    <img src="${events.images}"></img>
                    <p>${events.type}</p>
                    <p>${events.dates}</p>
                    <p>${events._embedded.venues}</p>
                    </li>`;
                })
                .join('');
            eventList.innerHTML = htmlString;
        };
        renderEvents();
}