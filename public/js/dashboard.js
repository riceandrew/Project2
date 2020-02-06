
$(document).ready(function() {

    var addBreweryOne = $("#addBreweryOne");
    var numberOneBreweryInput = $("#numberOneBreweryInput");
    var numberOneBrewery = $("#numberOneBrewery");
    var beerOne = $("#beerOne");
    var beerTwo = $("#beerTwo");
    var beerThree = $("#beerThree");
    var addBeerOne = $("#addBeerOne");
    var addBeerTwo = $("#addBeerTwo");
    var addBeerThree = $("#addBeerThree");
    var beerOneInput = $("#beerOneInput");
    var beerTwoInput = $("#beerTwoInput");
    var beerThreeInput = $("#beerThreeInput");
    var dashboardFirstName = $("#dashboardFirstName");
    var dashboardLastName = $("#dashboardLastName");
    var findBreweryButton = $("#findBreweryButton");
    var findBreweryInput = $("#findBreweryInput");

// THIS IS THE ONCLICK FUNCTION AND GET REQUEST FOR FINDING A SPECIFIC BREWERY. THIS NEEDS TO BE STORED IN A VARIABLE AND SENT TO THE BREWERY PAGE.
    findBreweryButton.on("click", function(event) {

      event.preventDefault();

      var userData = {
        findBreweryKey: findBreweryInput.val().trim(),
      };
  
      searchBrewery(userData.findBreweryKey);

    });

    function searchBrewery(dynamicBrewery) {
      $.get("/api/breweries", {
        brewery_name: Placeholder
      });
    }

// FUNCTION TO GENERATE THE FIRST NAME OF THE USER ON THE PAGE
    function generateFirstName(dynamicFirstName) {

      $.get("/api/users", {
        first_name: Placeholder
      });
    }

    generateFirstName();


// FUNCTION TO GENERATE THE LAST NAME OF THE USER ON THE PAGE
    function generateLastName(dynamicLastName) {

      $.get("/api/users", {
        last_name: Placeholder
      });
    }

    generateLastName();

// ON CLICK FUNCTIONS TO CHANGE FAVORITE BREWERY AND BEERS ON THE PAGE
    addBreweryOne.on("click", function(event) {
      event.preventDefault();

      var userData = {
        numberOneBreweryKey: numberOneBreweryInput.val().trim(),
      };
  
      updateBreweryOne(userData.numberOneBreweryKey);

    });

    addBeerOne.on("click", function(event) {
      event.preventDefault();

      var userData = {
        numberOneBeerKey: beerOneInput.val().trim(),
      };

      updateBeerOne(userData.numberOneBeerKey);
    });

    addBeerTwo.on("click", function(event) {
      event.preventDefault();

      var userData = {
        numberTwoBeerKey: beerTwoInput.val().trim(),
      };

      updateBeerTwo(userData.numberTwoBeerKey);
      
    });

    addBeerThree.on("click", function(event) {
      event.preventDefault();

      var userData = {
        numberThreeBeerKey: beerThreeInput.val().trim(),
      };

      updateBeerThree(userData.numberThreeBeerKey);

    });
  
// UPDATE FUNCTIONS TO GRAB THE INFORMATION FROM THE USER TABLE FOR THE ONCLICK FUNCTIONS
    function updateBreweryOne(breweryOne) {

      $.put("/api/users", 
      {
        favoirte_brewery: breweryOne
      },
      {
        where: {id}
      });

    };

    function updateBeerOne(beerOne) {
      
      $.put("/api/users", 
      {
        beer_one: beerOne
      },
      {
        where: {id}
      });
    };

    function updateBeerTwo(beerTwo) {
  
      $.put("/api/users", 
      {
        beer_two: beerTwo
      },
      {
        where: {id}
      });
    };

    function updateBreweryOne(beerThree) {

      $.put("/api/users", 
      {
        beer_three: beerThree
      },
      {
        where: id
      });
    };



});
  
  