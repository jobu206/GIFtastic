$(document).ready(function () {

    // array of choices
    var topics = ["The Natural", "Miracle", "Rudy", "Major League", "Field of Dreams", "Karate Kid", "Glory Road", "Rocky", "Talladega Nights", "The Rookie", "Hoop Dreams", "Remember the Titans", "Friday Night Lights"];

    // display images
    function displayGifs() {

        $("#giphy-btns").empty();

        var gif = $(this).attr("data-gif");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&limit=" + limit + rating + "&api_key=21cQoZJfPW8AQIF7N8Zzhk9nf41F9ENi";
        var rating = "&rating=PG";
        var limit = 10;

        // AJAX call for "getting" the GIF
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {

            for (var j = 0; j < limit; j++) {
                var gifDiv = $("<div>");
                gifDiv.addClass("gifHolder");
                var img = $("<img>");
                img.attr("src", data[j].images.original_still.url);
                img.attr("data-still", data[j].images.original_still.url);
                img.attr("data-animate", data[j].images.original_still.url);
                gifDiv.append(img);

                var gifRating = response.data[j].rating;
                var domRating = $("<p>").text("Rating: " + gifRating);
                gifDiv.append(domRating);

                $("#giphy-gifs").append(gifDiv);
            }
        })
    }

    // render buttons
    function renderButtons() {
        $("#giphy-btns").empty();

        // Looping through the array of movies
        for (var i = 0; i < topics.length; i++) {
            var a = $("<button>");
            a.addClass("btn btn-dark");
            a.attr("data-gif", topics[i]);
            a.text(topics[i]);
            $("#giphy-btns").append(a);
        }
    }

    // change img state
    function gifChangeState() {

        var state = $(this).attr("data-state");
        var animateImage = $(this).attr("data-animate");
        var stillImage = $(this).attr("data-still");

        if (state === "still") {
            $(this).attr("src", animateImage);
            $(this).attr("data-state", "animate");
        }

        else if (state === "animate") {
            $(this).attr("src", stillImage);
            $(this).attr("data-state", "still");
        }
    }

    // Function for NEW buttons based on search criteria
    $("#addGif-btn").on("click", function () {
        event.preventDefault();
        var gif = $("#addGif-input").val().trim();
        topics.push(gif);

        renderButtons();
        // return false;
    });

    renderButtons();

    $(document).on("click", "#giphy-btns", displayGifs);
    $(document).on("click", ".gif", gifChangeState);
});