
(()=>{
    "use strict";
    const mongoose = require('mongoose');
    const CSV = mongoose.model('CSV');
    let create = (original) => {
      new CSV({
          "file": "filename",
          "data": original
      }).save((err) => {
          if(err)
          return handleError(err);
          console.log("Almacenado un nuevo fichero");
      }); 
    };
    let remote = (name) => {
      CSV.remove(name).then(() =>{
         console.log("Remove: ${name} "); 
      }).then(function() {
          mongoose.connection.close();
      }); 
    };
})();