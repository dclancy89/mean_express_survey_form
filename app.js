var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: 'jkf;dsau9few',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    
    response.render('index');
})

app.post('/result', function(request, response) {
    console.log(request.body);
    response.render('result', {
        name: request.body.your_name,
        location: request.body.dojo_location,
        language: request.body.favorite_language,
        comments: request.body.comments
    });
})



app.listen(8000, function() {
    console.log("listening on port 8000");
})