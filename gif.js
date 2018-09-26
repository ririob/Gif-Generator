$(document).ready(function() {

  // JS for Gif-Generator.
  // Creating Variables
  // Initial Array for topics to use
  var topics = ["Drake", "Nicki Minaj"];

  // function to display contents in our HTML
//   function displayGifContents () {

    // var gifs= $(this).attr("data-type");
    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifs + "&api_key=9oQvRPi6s7AzEMcHRHx2Xnc9imoT9oTC";
    // cosole.log(queryURL);
    // Creating an AJAX call for the button being clicked
    // $.ajax({
        // url: queryURL,
        // method: "GET"
    // }).then(function(response) {
        // console.log(response);
    //   var results = response.data;

    //   Looping through the data gotten from our api
    // for (var i = 0; i < results.length; i++) {
        //   creating a div to hold the gif image
        // var gifDiv = $("<div class='gif-div'>");

        // Storing the rating data
        // var rating = results[i].rating;

        // Creating an element to have the rating displayed
        // var p = $("<p>").text("Rating: " + rating);

        // gifDiv.append(p);
        // $("#dcard").append(gifDiv);
    // }
    // displayGifContents();
    // });
//   }

  // Function to create buttons and add them to the page
  function createButtons() {

    //   Deleting the gif buttons prior to new buttons
    // This is necessary so as not to have repeat buttons
      $("#scard").empty();

    //   Looping through the array of gif topics
    for (var i = 0; i < topics.length; i++) {

        // Then we use jquery to generate buttons for each gif topic in the array
        var a = $("<button>");
        // Adding a class
        a.addClass("btn btn-dark");
        // Trying to add an ID
        // a.addId("gif-button");
        // Adding a data-attribute with a value of the gif topic at index i
        a.attr("data-name", topics[i]);
        // Giving the button text values of gif topics at index i
        a.text(topics[i]);
        // Adding the button to the HTML
        $("#scard").append(a);
    }
  }

  // This function handles when the "add button" is clicked to add more buttons
  // First we create an onclick event
  $("#add-button").on("click", function(event) {
    //   This line allows users tohit the enter button if they want
    event.preventDefault();

    // This line will grab the text from the textbo
    var newTopic = $("#button-input").val().trim();
    // This line takes the text from the textbox and adds it to our array
    topics.push(newTopic);

    // Calling createButtons which handles processing of our topics array
    createButtons();
  });

  //   Function so when a button is clicked returns API call
  topics.forEach(function(topic) {
      console.log(topic);
    $(document).on("click", "button", function() {
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=9oQvRPi6s7AzEMcHRHx2Xnc9imoT9oTC";
      $.ajax({
          url: queryURL,
          method: "GET"
      }).then(function(response) {
          console.log(response);
          var results = response.data;

        //   Looping through our data gotten from the api call
        for (var i =0; i < results.length; i++) {
             //   creating a div to hold the gif data
             var gifDiv = $("<div class='gif-div'>");

            //  storing the gif image
            var gifImg = $("<img src=" + results[i].images.fixed_height.url + ">");

              // Storing the rating data
              var rating = results[i].rating;

              // Creating an element to have the rating displayed
              var p = $("<p>").text("Rating: " + rating);


              gifDiv.append(p);
              gifDiv.append(gifImg);
              $("#dcard").append(gifDiv);
            //  $('#dcard').append("<img src=" + results[i].images.fixed_height.url + ">");
        }
      });
    });
  });

 createButtons();
//  displayGifContents();
});