// import { fetchEvents } from "./fetchEvents";

// const searchInput = document.getElementById('searchBar');
// const searchButton = document.getElementById('submitBtn');
// let allEvents = [];

// searchInput.addEventListener('input', handleSearchInput);
// searchButton.addEventListener('click', handleSearchButtonClick);

// function handleSearchInput() {
//     const fetchEvents = search.value.toLowerCase(); 
//     allEvents = allEvents.filter(events => {
//         const eventTitle = events.name.toLowerCase();

//         return eventTitle.includes(searchValue);
//     })
// }
        // const searchString = e.target.value;
        // AllEvents.filter(events => {
        // return events.name.contains(searchString);

        // });
        // console.log(AllEvents);
export default async function searchBar() {
   const searchInput = document.getElementById('searchBar');
   searchInput.addEventListener('keyup', handleSearchInput());
   let newarray = [];
   
   function handleSearchInput() {
        const search = this.searchValue.toLowerCase();
        newarray = array.filter(function(event) {
                if(event.name.includes(search) || 
                event.venue.includes(search) || 
                event.city.includes(search));
                return newarray;
                })
            console.log(newarray);

    const searchButton = document.getElementById('submitBtn');
    searchButton.addEventListener('click', handleSearchButton);
    
    function handleSearchButton() {
        let buttons = document.querySelector('searchValue');
                buttons.forEach((button) => {
        if (value.toUppercase() == button.innerText.toUppercase()) {
                button.classList.add('active');
                    }
        else {
                button.classList.remove('active'); 
                    }
                })
        }}
}