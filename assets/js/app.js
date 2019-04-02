/*
- Create HTML to hold buttons, search and gifs.
    - Create row and col to hold GIFs under buttons
        - This will be the "front End or HTML"
- On load, buttons populate on DOM
    - How will buttons populate on DOM?
        - On document load buttons will appear.
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
var topics = ['Hoosiers', 'The Natural', 'Miracle', 'Rudy', 'Major League', 'Field of Dreams', 'Karate Kid', 'Glory Road', 'Rocky', 'Talladega Nights', 'The Rookie', 'Hoop Dreams', 'Remember the Titans', 'Friday Night Lights', 'Moneyball', 'Creed'];
var apiKey = '21cQoZJfPW8AQIF7N8Zzhk9nf41F9ENi';
var numOfGifs = 10;
var rating = 'PG';

// Function for displaying movie data
function showButtons() {
    $("#giphy-btns").empty();

    // Looping through the array of movies
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("btn btn-dark");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#giphy-btns").append(a);
    }
}

// do stuff based on button click
$(document).on('click')

// Function for NEW buttons based on search criteria
$('#addGif-btn').on('click', function (event) {
    event.preventDefault();
    var gif = $('#addGif-input').val().trim();
    topics.push(gif);
    showButtons();
});

// call GIFs from API
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    $("#movie-view").text(JSON.stringify(response));
});