$(document).ready(function () {

    var topics = ["Goonies"];

    function displayGifs() {

        $("#giphy-btns").empty();
        var gif = $(this).attr("data-gif");
        var limit = 1;
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&limit=" + limit + "&api_key=21cQoZJfPW8AQIF7N8Zzhk9nf41F9ENi";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {

            for (var j = 0; j < limit; j++) {

                var gifDiv = $("<div>");
                gifDiv.addClass("gifHolder");
                
                var gifImg = $("<img>");
                gifImg.attr("src", response.data[j].images.original_still.url);
                gifImg.attr("data-still", response.data[j].images.original_still.url);
                gifImg.attr("data-animate", response.data[j].images.original.url);
                gifImg.attr("data-state","still");
                gifImg.addClass("gif");
                gifDiv.append(gifImg);

                var gifRating = response.data[j].rating;
                console.log(response);
                
                var domRating = $("<p>").text("Rating: " + gifRating);
                gifDiv.append(domRating);

                $("#giphy-gifs").append(gifDiv);
            }
        })
    }

    function renderButtons() {

        $("#giphy-btns").empty();

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

        var gif = $("#addGif-input").val().trim();
        topics.push(gif);

        renderButtons();
    });

    renderButtons();

    $(document).on("click", "#giphy-btns", displayGifs);
    $(document).on("click", ".gif", gifChangeState);
});