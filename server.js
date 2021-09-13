const express = require('express');
const app = express();
const dbcon = require('./DBdata.js')

app.use(express.urlencoded({extended: true})) 
app.set('view engine', 'ejs');

dbcon.DBconnector();

var pn = dbcon.Portnum();

app.listen(pn, function(){
    console.log('DataBase Connect Complete!')
    console.log('Server is Operating on Port Number 8080')
});

app.get('/', function(요청, 응답){
    응답.sendFile(__dirname + '/html/mainhome.html')
});

app.get('/mypet', function(요청, 응답){
    응답.sendFile(__dirname + '/html/mypet.html')
});

app.get('/signin', function(요청, 응답){
    응답.sendFile(__dirname + '/html/signin.html')
});

app.get('/signup', function(요청, 응답){
    응답.sendFile(__dirname + '/html/signup.html')
})

app.get('/accountopt', function(요청, 응답){
    응답.sendFile(__dirname + '/html/accountopt.html')
})

app.get('/community', function(요청, 응답){
    응답.sendFile(__dirname + '/html/community.html')
})

app.get('/notice', function(요청, 응답){
    응답.sendFile(__dirname + '/html/notice.html')
})

app.get('/petsitem', function(요청, 응답){
    응답.sendFile(__dirname + '/html/petsitem.html')
})

app.get('/pettrip', function(요청, 응답){
    응답.sendFile(__dirname + '/html/pettrip.html')
})

app.get('/suggest', function(요청, 응답){
    응답.sendFile(__dirname + '/html/suggest.html')
})