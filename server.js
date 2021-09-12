const express = require('express');
const app = express();
const dbcon = require('./DBdata.js')

app.use(express.urlencoded({extended: true})) 
app.set('view engine', 'ejs');

dbcon.DBconnector();

app.get('/', function(요청,응답){
    응답.sendFile(__dirname+'/index.html')
});