var express = require('express');
var path = require('path');
var request = require('request');
var app = new express();

var port = 3000;

app.set('views',path.join(__dirname,'views'));
app.set('view engine','jade');

app.use(express.static(path.join(__dirname,'/public')));

app.get('/',function(req,res){
    res.render('welcome');
});

app.get('/home',function(req,res){
    res.render('home',{id: 'Express', title: 'Hacker World!!!'});
});

app.get('/about',function(req,res){
    res.render('about',{id: req.params.id, title: 'Purab'});
});

app.get('/colorpicker',function(req,res){
    res.render('colorpicker',{colors: ['red','blue','green','aqua','aquamarine','pink','maroon','lime','blueviolet','steelblue','brown','yellow','teal','grey','white','coral','orange','darkblue','firebrick','royalblue']});
});

app.get('/:searchText',function(req,res){
    request.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0957af6905a1a4d282fe06719c872ca2&text='+req.params.searchText+'&format=json&nojsoncallback=1', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var responseData=JSON.parse(body);
            res.render('image',{photoData: responseData.photos.photo});
        }
    });
});

var server = app.listen(port, function(){
    console.log('Started on 3000');
});
