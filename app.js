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
app.get('/overview', function(req,res){
    res.render('overview');
})

app.get('/accordian', function(req,res){
    res.render('accordian');
})

app.get('/star', function(req,res) {
    res.render('star');
});

app.get('/classroom', function(req,res) {
    res.render('classroom-layout');
});

app.get('/tab-nav', function(req,res) {
    res.render('tab-nav');
});

app.get('/announcements', function(req,res) {
    res.render('announcements');
});

app.get('/profile', function(req,res) {
    res.render('profile-page');
})

app.get('/search', function(req,res){
   res.render('search.hbs');

});

app.get('/timeline', function(req,res) {
    res.render('timeline');
});

app.get('/buy-top', function(req,res) {
    res.render('buy-top');
});

// Set server port
app.listen(4000);
console.log('server is running');