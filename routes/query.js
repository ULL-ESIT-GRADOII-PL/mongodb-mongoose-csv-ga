((filename) => {
    "use strict";
    const connect = require('connect');
        let query = (filename) => {
        CSV.find(filename);
        query.select(data);
        query.exec((err,data) => {
           if(err)
            console.log("ERROR: " + err);
        }).then(() => {
            mongoose.connection.close();
        });
    }
    module.exports = query;
})();