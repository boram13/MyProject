//express --> web server 
var express = require('express');
var app = express();

//this is the environment variable port, which might be good to develop the local host 
var PORT = process.env.PORT || 1337;

// Path to app directive,adds a middleware for serving static files to our app.jss
app.use(express.static(__dirname + '/src'));

// Path to Node modules
app.use('/node_modules', express.static(__dirname + '/node_modules'));

// Connect to Server
app.listen(PORT, function (err) {
    if (err)
        console.log(err);
    else
        console.log('Server running on: ' + PORT);
});
