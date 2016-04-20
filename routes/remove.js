(() => {
   "use strict";
   const connect = require("connect");
    //  Funcion para eliminar un fichero
    let remove = (name) => {
      CSV.remove(name).then(() =>{
         console.log("Remove: ${name} "); 
      }).then(function() {
          mongoose.connection.close();
      }); 
    };
    module.exports = remove;
})();