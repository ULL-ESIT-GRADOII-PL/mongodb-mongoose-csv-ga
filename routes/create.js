(() => {
   "use strict";
   const connect = require("connect");
    //  Funcion para crear un fichero en la DB
    let create = (original) => {
      new CSV({
          "file": "filename",
          "data": original
      }).save((err) => {
          if(err)
          return handleError(err);
          console.log("Almacenado un nuevo fichero");
      }).then(function(){
          mongoose.connection.close();
      }); 
    };
    module.exports = create;
})();