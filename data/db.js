//#region DB Connection
const mysql        = require("mysql2");
const config       = require("../config");
const connection   = mySql.createConnection(config.db);

// let connection = mySql.createConnection({
//     host : "localhost",
//     user : "root" ,
//     password: "oguz",
//     database: "1"
// });

connection.connect(function(err) {
if(err){
    return console.log(err);
}



console.log("Db bağlantısı yapıldı");
});
//#endregion

module.exports = connection.promise();