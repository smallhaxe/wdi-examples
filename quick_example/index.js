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

var ramens = [
    'Pork',
    'Chicken',
    'Beef',
];

app.get('/burgers', function(req, res) {
    // send all the burgers!
    res.send(burgers.join(', '));
});

app.get('/tacos', function(req, res) {
    // send all the burgers!
    res.send(tacos.join(', '));
});

app.get('/ramen', function(req, res) {
    // send all the ramen!
    res.send(ramens.join(', '));
});

app.get('/greet/:name', function (req, res) {
    res.send('Hello, ' + req.params.name);
});

app.get('/tacos/:index', function (req, res) {
    res.send(tacos[req.params.index]);
});

app.get('/burgers/:index', function (req, res) {
    res.send(burgers[req.params.index]);
});

app.get('/ramen/:index', function (req, res) {
    var id = req.params.index;
    var ramen = ramens[id]; 
    res.send(ramen);
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
