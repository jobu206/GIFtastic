/*
- Create HTML to hold buttons, search and gifs.
- Create row and col to hold GIFs under buttons
- On load, buttons populate on DOM
- hold button values in array
- Click button and associated gifs will appear via GET
- Clicking on gif will animate. Click again, stands still.

- API Key: 21cQoZJfPW8AQIF7N8Zzhk9nf41F9ENi
*/

// Document Ready
$(document).ready(function () {
    console.log('ready'); 
    
    showButtons();
});

// Global Variables
var topics = ['King of the Hill','Baseball','Scooby Doo'];

var numOfGifs = 10;

var rating = 'PG';


// function to create buttons
function showButtons() {
    // first empty the div so we don't stack buttons on each other.
    $('#giphy-gifs').empty();

    // loop through array of gifs
}
