(() => {
   "use strict"; 
      const util = require("util");
      const mongoose = require("mongoose");
      // Se hace la conexion con la BBDD
      // Definimos el Schema de la BBDD
      const CSVSch = new mongoose.Schema({
         "file" : String,  // Nombre del fichero 
         "data" : String  //  Datos que se almacenan en el fichero
      });
      // Creamos el modelo
    const CSV = mongoose.model("CSV",CSVSch);
    module.exports = CSV;
})();