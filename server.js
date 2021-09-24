const express = require('express');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const MongoClient = require('mongodb').MongoClient;

require('dotenv').config()

app.use(session({secret : 'secret', resave : true, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session()); 
app.use(express.urlencoded({extended: true})) 
app.set('view engine', 'ejs');


var db;
    
MongoClient.connect(process.env.DB_URL, function(err, client){
    if(err) return console.log(err)
    db = client.db('GaeulsWorld');
    app.listen(process.env.PORTNUM, function() {
        console.log('DB connection complete!\n Server is Operating!')
    });
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

app.post('/login', function(req, res){
    
})

app.get('/signup', function(req, res){
    res.render('signup.ejs');
});

app.post('/signuptoDB', function(req, res){
    dabe.collection('account').insertOne({ID : req.body.idname, PW : req.body.idpw, NAME : req.body.name}, function(A,B){
        console.log(A)
        console.log(B)
    });
    
    res.render('mainhome.ejs')
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