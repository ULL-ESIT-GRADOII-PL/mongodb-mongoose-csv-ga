"use strict";

const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

let port = process.env.PORT || 8080;
//let ip = process.env.IP || '0.0.0.0';
//let addr =  `${ip}:${port}`;
app.set('port', port);
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

// Hacemos la conexion con la base de datos
mongoose.connect('mongodb://localhost/data');

app.param('input', (req,resp,next, input) =>{
   if(input.match(/^[^0-9]\w+\.csv$/))
      req.input =  input; 
      else
         next(new Error(`<${input}: No puede ser un nombre de fichero`));
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
      "data": req.query.data
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
app.get('/file', (req, res) => {
   //console.log(req.params.filename);
   CSV.find({}, (err, data) => {
      if(err)
       return err;
      res.send(data);
   });
});

// Cuando se busca un fichero determinado
app.get('/fileID', function(req, res) {
    CSV.find({
        file: req.query.file
    }, function(err, data) {
        res.send(data);
    });
});

// Mostramos la direccion en la que escucha el servidor
app.listen(app.get('port'), () =>{
   console.log(`App listening at ${port}`);
});  
