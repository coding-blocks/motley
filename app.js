var express = require('express');
var app = express();
var path = require('path');
var hbs = require('hbs');

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'hbs'); // use either jade or ejs		// instruct express to server up static assets
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index');
});

// Set server port
app.listen(4000);
console.log('server is running');