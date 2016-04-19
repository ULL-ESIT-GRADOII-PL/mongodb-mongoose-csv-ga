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
   // Creamos el modelo
   const CSV = mongoose.model("CSV",CSVSchema);
   // Borramos toda la base de datos cuando se inicia la conexion
   CSV.remove({}).then(() =>{
      console.log("Se han eliminado todas las colecciones");
   });
   
})();