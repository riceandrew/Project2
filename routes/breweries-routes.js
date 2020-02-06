const db = require('../models');

// Routes
module.exports = function(app) {

// Add a Brewery
app.post("/api/breweries", function(req, res) {

    db.Brewery.create({
        brewery_name: req.body.brewery_name,
        address: req.body.address,
        website: req.body.website
    }).then( function(newBrewery) {

        res.json(newBrewery);

    });

});

// Get all Breweries
app.get("/api/breweries", function(req, res) {

    db.Brewery.findAll({}).then( function(allBreweries) {

        res.json(allBreweries);
    });

});

// Update a Brewery Name
app.put("/api/breweries", function(req, res) {

    db.Brewery.update({
        brewery_name: req.body.brewery_name,
        address: req.body.address,
        website: req.body.website
    }, {
        where: {
            id: req.body.id
        }
    }).then( function(updateBrewery){
        res.json(updateBrewery);
    });

});

//******************************************************************************

// Add a Beer
app.post("/api/beers", function(req, res){

    db.Beer.create({
      beer_name: req.body.beer_name,
      beer_style: req.body.beer_style,
      beer_cost: req.body.beer_cost,
      beer_ranking: req.body.beer_ranking,
    });

});

// Get all beers
app.get("/api/beers", function(req, res){

    db.Beer.findAll({}).then(function (allBeers){
        res.json(allBeers);
    });

});

// Update a beer
app.put("/api/beers", function(req, res){

    db.Beer.update({
        beer_name: req.body.beer_name,
        beer_style: req.body.beer_style, 
        beer_cost: req.body.beer_cost, 
        beer_ranking: req.body.beer_ranking,
    }, 
    {where:{
        id: req.body.id
    }
    }).then( function(updateBeer){
        res.json(updateBeer);
    });

});

// *******************************************************************************

// Add a User
app.post("/api/users", function(req, res){

    db.User.create({
        username: req.body.username,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        beer_one: req.body.beer_one,
        beer_two: req.body.beer_two,
        beer_three: req.body.beer_three,
        beer_four: req.body.beer_four,
        beer_five: req.body.beer_five,
        favorite_brewery: req.body.favorite_brewery,
        breweries_visited: req.body.breweries_visited
    });

});

// Get all Users
app.get("/api/users", function(req, res){

    db.User.findAll({}).then(function (allUsers) {
        res.json(allUsers);
    });

});

// Update a User
app.put("/api/users", function(req, res){

    db.User.update({
        username: req.body.username,
        password: req.body.password, 
        first_name: req.body.first_name, 
        last_name: req.body.last_name,
        beer_one: req.body.beer_one,
        beer_two: req.body.beer_two,
        beer_three: req.body.beer_three,
        beer_four: req.body.beer_four,
        beer_five: req.body.beer_five,
        favorite_brewery: req.body.favorite_brewery,
        breweries_visited: req.body.breweries_visited
    }, 
    {where:{
        id: req.body.id
    }
    }).then( function(updateUser){

        res.json(updateUser);

    });
});

// Delete a User
app.delete("/api/users", function (req, res) {

    db.User.destroy({
      where: {
        id: req.params.id
      }
    });
    
});


};