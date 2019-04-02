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
var topics = ['King of the Hill','Beavis and Butthead','Scooby Doo','Justice League'];
var apiKey = '21cQoZJfPW8AQIF7N8Zzhk9nf41F9ENi';
var numOfGifs = 10;
var rating = 'PG';

      // Function for displaying movie data
      function showButtons() {

        // Deleting the movie buttons prior to adding new movie buttons
        // (this is necessary otherwise we will have repeat buttons)
        $("#giphy-btns").empty();

        // Looping through the array of movies
        for (var i = 0; i < topics.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array.
          var a = $("<button>");
          // Adding a class
          a.addClass("btn btn-dark");
          // Adding a data-attribute with a value of the movie at index i
          a.attr("data-name", topics[i]);
          // Providing the button's text with a value of the movie at index i
          a.text(topics[i]);
          // Adding the button to the HTML
          $("#giphy-btns").append(a);
        }
      }

      $()
