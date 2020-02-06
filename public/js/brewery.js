$(document).ready(function() {

    var findBreweryInputBreweryPage = $("#findBreweryInputBreweryPage");
    var findBreweryButtonBreweryPage = $("#findBreweryButtonBreweryPage");
    var breweryName = $("#breweryName");
  
// THIS IS THE ONCLICK FUNCTION AND GET REQUEST FOR FINDING A SPECIFIC BREWERY. THIS NEEDS TO BE STORED IN A VARIABLE AND SENT TO THE BREWERY PAGE.
    findBreweryButtonBreweryPage.on("click", function(event) {

      event.preventDefault();

      var userData = {
        findBreweryKey: findBreweryInputBreweryPage.val().trim(),
      };
  
      searchBrewery(userData.findBreweryKey);

    });

    function searchBrewery(dynamicBrewery) {
      $.get("/api/breweries", {
        brewery_name: Placeholder
      });
    }

// THIS IS THE FUNCTION THAT PUTS THE BREWERY NAME ON THE PAGE
     function breweryName(dynamicBreweryName) {
       $.get("/api/breweries", {
         brewery_name: Placeholder
       });
     }

     breweryName();


  });
  