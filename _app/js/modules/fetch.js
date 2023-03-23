export default async function fetchEvents() {
    const apiKey = 'XvKLJTgjurq3X2HHq16a8PAAGOYs6Dah';
    const baseUrl = 'https://app.ticketmaster.com/discovery/v2/';
    const options = {
        method: "GET",
        headers: {
            "Accept": "*/*"
        }
    }
    const endopointRandom = `${baseUrl}events?apikey=${apiKey}`;
    let response = '';
    if(!response) {
        loading();
    }

    response = await fetch(endopointRandom, options);
}

function loading() {
    console.log('wait');
}