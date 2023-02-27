export default function postData() {
	
	const submitElement = document.getElementById('send-data');
	const formElement = document.getElementById('form');
	const resultElement = document.getElementById('result');
	const errorElement = document.getElementById('error');

	formElement.addEventListener('submit', handleSubmit);

	let objectData = {};

	async function handleSubmit(event) {
		event.preventDefault();
		const dataFields = new FormData(formElement);
		dataFields.append('id', 'RR=TTR524')
		for (const array of dataFields) {
			console.log(array); 
		}
		for (const[key, value] of dataFields) {
			objectData[key] = value; 
		}
		console.log(objectData); 
		await postValues(objectData); 
	}

	async function postValues(values) {
		const baseUrl = `https://reqres.in`;
		const endpoint = `/api/users`
		const options = {
			method: "POST",
			body: JSON.stringify(values)	
		}
		const response = await fetch(`${baseUrl}${endpoint}`, options);
		console.log(response);
		try {
			await handleResponse(response);
		} 	catch (error) {
			handleError(error)
		}
	}

	 async function handleResponse(response) {
		if(response.ok) {
			const result = await response.json()
			resultElement.textContent = `Lagret ny bruker
			med id: ${result.id}`;
		}	else if (response.status === 401) {
			throw new Error('Du er ikke autorisert!'); 
		}	else if (response.status === 404) {
			throw new Error('Feil url adresse');
		}	else if (response.status > 499) {
			throw new Error('Server svarer ikke!');
		} 	else {
			throw new Error('Noe gikk galt!');
		}

		function handleError(error) {
			errorElement.textContent = `Beklager: ${error.message}`
		}
	}
}