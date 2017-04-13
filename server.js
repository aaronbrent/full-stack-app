
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var beanRoute = require('./routes/bean-route')
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/coffee-catalog', function(err) {
    if (err) throw err;
    console.log("Connected to db");
}); 

app.use("/bean", beanRoute);

app.listen(8000, function(){
    console.log("server running on 8000");
});

