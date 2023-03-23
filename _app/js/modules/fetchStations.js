export default async function fetchStations() {
	const endpointStations = 'https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json';
	const endpointStatus = 'https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json';

	const responses = await Promise.all([fetch(endpointStations), fetch(endpointStatus)]);
	const results = await Promise.all(responses.map(response => response.json()));

	return results[0].data.stations.map(station => {
		 
		 const availability = results[1].data.stations.find(stationID => {
			  return stationID.station_id === station.station_id;
		 });
		 return {
			  station: station.name,
			  address: station.address,
			  capacity: station.capacity,
			  availabilityBikes: availability.num_bikes_available,
			  avalbilityDocks: availability.num_docks_available
		 }
	});
}