import renderImage from "./renderImg.js";
import { clientId } from "../env.js";
const warningElement = document.querySelector('.warning');

export default async function fetchImage() {
    const baseUrl = 'https://api.unsplash.com/';
    const options = {
        method: "GET",
        headers: {
            "Accept-Version": "v1"
        }
    }
    const endopointRandom = `${baseUrl}photos/random?client_id=${clientId}`;
    let response = '';
    if(!response) {
        loading();
    }

    response = await fetch(endopointRandom, options);

    try {
        await handleResponse(response);
    } catch (error) {
        handleError(error);
    }
}

async function handleResponse(response) {
    if(response.ok) {
        const output = await response.json();
        renderImage(output.urls.regular, output.alt_description);
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

function loading() {
    console.log('wait');
}

function handleError(error) {
    warningElement.classList.toggle('hidden');
    warningElement.textContent = error;
}
