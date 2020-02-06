// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) { 
      res.redirect("/dashboard");
    }
    //homepage is login page
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/dashboard", function(req, res) {

    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  });

  app.get("/brewery", function(req, res) {

    res.sendFile(path.join(__dirname, "../public/brewery.html"));
  });

  app.get("/beer", function(req, res) {

    res.sendFile(path.join(__dirname, "../public/beer.html"));
  });

};
