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
    응답.sendFile(__dirname+ '/mainhome.html')
});