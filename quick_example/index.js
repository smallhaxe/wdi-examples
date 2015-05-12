// requirements
var express = require('express'),
    app = express();

var burgers = [
    'Hamburger',
    'Cheese Burger',
    'Double Cheese Burger',
];

var tacos = [
    'Soft Taco',
    'Crunchy Taco',
    'Super Taco',
];

var ramen = [
    
];

app.get('/burgers', function(req, res) {
    // send all the burgers!
    res.send(burgers.join(', '));
});

app.get('/tacos', function(req, res) {
    // send all the burgers!
    res.send(tacos.join(', '));
});

// a "GET" request to "/" will run the function below
app.get("/", function (req, res) {
    // send back the response: 'Hello, World!'
    res.send('Hello, World!');
});

// start the server
app.listen(3000, function() {
    console.log('Going to localhost:3000/');
})
