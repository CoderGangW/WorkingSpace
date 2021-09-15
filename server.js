const express = require('express');
const app = express();
const dbcon = require('./DBdata.js')

app.use(express.urlencoded({extended: true})) 
app.set('view engine', 'ejs');

dbcon.DBconnector();

var path = require('path');
var db;

var pn = dbcon.Portnum();

app.listen(pn, function(){
    console.log('DataBase Connect Complete!')
    console.log('Server is Operating on Port Number 8080')
});

app.get('/', function(req, res){
    res.render('mainhome.ejs');
});

app.get('/mypet', function(req, res){
    res.render('mypet.ejs');
});

app.get('/signin', function(req, res){
    res.render('signin.ejs');
});

app.get('/signup', function(req, res){
    res.render('signup.ejs');
});

app.get('/accountopt', function(req, res){
    res.render('accountopt.ejs');
});

app.get('/community', function(req, res){
    res.render('community.ejs');
});

app.get('/notice', function(req, res){
    res.render('notice.ejs');
});

app.get('/petsitem', function(req, res){
    res.render('petsitem.ejs');
});

app.get('/pettrip', function(req, res){
    res.render('pettrip.ejs');
});

app.get('/suggest', function(req, res){
    res.render('suggest.ejs');
});