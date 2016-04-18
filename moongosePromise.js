(() => {
   "use strict"; 
   const util = require("util");
   const mongoose = require("mongoose");
   // Se hace la conexion con la BBDD
   mongoose.connect('mongodb://localhost/data');
   // Definimos el Schema de la BBDD
   const CSVSchema = mongoose.Schema({
      "file" : String,  // Nombre del fichero 
      "data" : String  //  Datos que se almacenan en el fichero
   });
   
});