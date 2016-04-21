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

//  Incluimos los modulos que necesitamos 
const calculate = require('./models/calculate');

app.get('/', (request, response) => {
  response.render('index', {title : 'CSV'});
});

app.get('/csv', (request, response) => {
	response.send({"rows" : calculate(request.query.input)});
});

// Incluimos Mongoose como ODM
const mongoose = require("mongoose");
const CSV = require('./routes/database');

app.param('input', (req,resp,next, input) =>{
   if(input.match(/^[a-z_]\w*\.csv$/i))
      req.input =  input; 
      else
         next(new Error(`<${input} no find`));
      next();
});

app.get('/mongo/:input',(req, resp) =>{
   CSV.find({}, (err, data) =>{
      if(err)
         return err;
      if(data.length >= 4)
         CSV.find({ file: data[0].file }).remove().exec();
   });
   let input = new CSV({
      "file": req.input,
      "data": req.query.content
   });
   input.save((err) => {
      if(err){
         console.log(`Something goes wrong: ${err}`);
         return err;
      }
      console.log(`File saved: ${input}`);
   });
});

//  Definimos las rutas que sirve la bd
app.get('/data', (req, res) => {
   console.log(req.params.filename);
   CSV.find({}, (err, data) => {
      if(err)
      return err;
      res.send(data);
   });
});


// Mostramos la direccion en la que escucha el servidor
app.listen(port,ip, () =>{
   console.log(`App listening at ${addr}`);
});  
