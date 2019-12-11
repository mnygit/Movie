const apiKey = '5d576382955ff5829fc3844390db4427';
const baseAPIUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;



$(function() {
  // After the DOM has loaded, call afterGoClicked after any time the button is clicked
  $("#getMovies").click(afterGoClicked);

});  

function afterGoClicked() {
    // Read the selected genre id from the select boxes and save it to a variable
    var pickGenre = $("#genre").val();
    
    // Hint: use the JQuery .val() function on the element
    // Documentation: http://api.jquery.com/val/
    // Read the entered year from the text box and save it to a variable
    var movieYear = $("#year").val(); 

    // Create a variable and assign it to function buildQueryString to handle building a completeUrl
    var compeleteUrl = buildQueryString(baseAPIUrl, pickGenre, movieYear); 
    
    // Load the JSON from the API with completeUrl, and then call the afterDataLoaded function
    $.getJSON(compeleteUrl, afterDataLoaded);   
}
 
   /* Combine the baseUrl, genre, and year together to create a complete url with the
  right query parameters. Then return the url.

  Check out examples query params at https://www.themoviedb.org/documentation/api/discover

  HINT: you will need to use with_genres in your query string
  */ 

function buildQueryString(baseUrl, genre, year){
    return baseUrl + `&with_genres=${genre}&year=${year}`;
}   

    // Call this function with the data object that comes back from getJSON
function afterDataLoaded(dataObject){
    // All images have this base URL
    var movies = dataObject.results;
    var posterBaseUrl = "https://image.tmdb.org/t/p/w500";

    //Loop over the results in the dataObject. 
    //HINT: console log dataObject to find the name of the property that includes 
    //the array of results. 

    //For each result (inside your loop):
    //- Look up a corresponding img element (in order)
    //- Set the img element's src tag to posterBaseUrl + the poster_path from the result movie
  
     for(var i =0; i<14; i++) {
        var imgId = "#movieImg"+i
        var currentMovieObj = movies[i]
        var posterUrl = posterBaseUrl + currentMovieObj.poster_path
        $(imgId).attr("src", posterUrl)

    }
    
           
}

