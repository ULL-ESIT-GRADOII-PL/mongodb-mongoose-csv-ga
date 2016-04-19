"use strict";

const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
let port = process.env.PORT || 8080;
let ip = process.env.IP || '127.0.0.1';
let addr =  `${ip}:${port}`;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static(__dirname + '/public'));

const calculate = require('./models/calculate');

app.get('/', (request, response) => {
  response.render('index', {title : 'CSV'});
});

app.get('/csv', (request, response) => {
	response.send({"rows" : calculate(request.query.input)});
});

app.get('data/:filename', (request,response) => {
    console.log("Se ha solicitado: " + request.params);
    response.send(request.params.data);
});

app.listen(port,ip, () =>{
   console.log('App listening at ${addr}'); 
});

