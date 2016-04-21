(() => {
   "use strict"; 
      const util = require("util");
      const mongoose = require("mongoose");
      // Se hace la conexion con la BBDD
      mongoose.connect('mongodb://localhost/data');
      // Definimos el Schema de la BBDD
      const CSVSch = new mongoose.Schema({
         "file" : String,  // Nombre del fichero 
         "data" : String  //  Datos que se almacenan en el fichero
      });
      // Creamos el modelo
    const CSV = mongoose.model("CSV",CSVSch);

   //  Funcion para crear un fichero en la DB
    let create = (name, original) => {
      new CSV({
          "file": name,
          "data": original
      }).save((err) => {
          if(err)
          return handleError(err);
          console.log("Almacenado un nuevo fichero");
      }).then(function(){
          mongoose.connection.close();
      }); 
    };
    
    module.exports = CSV;
})();