/*
- Create HTML to hold buttons, search and gifs.
    - Create row and col to hold GIFs under buttons
        - This will be the "front End or HTML"
- On load, buttons populate on DOM
    - How will buttons populate on DOM?
    - Hold button values in array
        - Why an array?
- Click button and associated gifs will appear.
    - How will buttons appear?
    - How will clicking a button show a GIF?
- Clicking on gif will animate. Click again, stands still.
    - GIF will first be still.
    - First click will animate GIF
    - Second click will make GIF stay still.
- API Key: 21cQoZJfPW8AQIF7N8Zzhk9nf41F9ENi
*/

// Document Ready
$(document).ready(function () {
    console.log('ready'); 
    
    showButtons();
});

// Global Variables
var queryURL = 'http://api.giphy.com/v1/gifs/search?q='
var topics = ['King of the Hill','Baseball','Scooby Doo'];
var apiKey = '21cQoZJfPW8AQIF7N8Zzhk9nf41F9ENi';
var numOfGifs = 10;
var rating = 'PG';


// function to create buttons
function showButtons() {
    // first empty the div so we don't stack buttons on each other.
    $('#giphy-gifs').empty();

    // loop through array of gifs
    // for (var i = 0; i < topics.length; i++) {
    //     const element = topics[i];    
    // }
}
