
(()=>{
    "use strict";
    const mongoose = require('mongoose');
    let CSV = mongoose.model('CSV');
    const create = (original) => {
      new CSV({
          "file": "filename",
          "data": original
      }).save((err) => {
          if(err)
          return handleError(err);
          console.log("Almacenado un nuevo fichero");
      }); 
    };
})();