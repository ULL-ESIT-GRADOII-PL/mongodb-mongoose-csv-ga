(() => {
   "use strict"; 
   const util = require("util");
   const mongoose = require("mongoose");
   // Se hace la conexion con la BBDD
   mongoose.connect('mongodb://localhost/data');
   // Definimos el Schema de la BBDD
   const CSVSchema = new mongoose.Schema({
      "file" : String,  // Nombre del fichero 
      "data" : String  //  Datos que se almacenan en el fichero
   });
   // Creamos el modelo
   const CSV = mongoose.model("CSV",CSVSchema);

   // Insertamos una cadena de prueba
   let f1 = new CSV({ "file" : "file1", "data": "esto es una cadena"});
   let p1 = f1.save(function(err){
       if(err){
           console.log(`Se produjo un error: \n${err}`);
           return err;
       }
   });
   
   Promise.all([f1]).then((value) => {
      console.log(util.inspect(value, {depth: null}));
      mongoose.connection.close();
   });
   
//   //  Funcion para crear un fichero en la DB
//     let create = (original) => {
//       new CSV({
//           "file": "filename",
//           "data": original
//       }).save((err) => {
//           if(err)
//           return handleError(err);
//           console.log("Almacenado un nuevo fichero");
//       }).then(function(){
//           mongoose.connection.close();
//       }); 
//     };
    
//     //  Funcion para eliminar un fichero
//     let remove = (name) => {
//       CSV.remove(name).then(() =>{
//          console.log("Remove: ${name} "); 
//       }).then(function() {
//           mongoose.connection.close();
//       }); 
//     };
})();