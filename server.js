// Server Dependencies
const express = require('express');
const db = require('./models');


// Express App Setup
var app = express();
var PORT = process.env.PORT || 8080;

// Express App Data Parsing Setup
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Static Directory
app.use(express.static('./public'));

// Routes
require('./routes/api-routes.js')(app)
require('./routes/html-routes.js')(app);
require('./routes/breweries-routes.js')(app);

// Starts the Server
db.sequelize.sync({}).then(function(){

    app.listen(PORT, function() {
        console.log('App listening on PORT ' + PORT);
    });

});
