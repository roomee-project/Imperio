//Database Connection and Functions
var mysql = require('mysql');

var connection;
if(process.env.JAWSDB_URL) {
  //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
    connection = mysql.createConnection({
      host      : 'localhost',
      user      : 'root',
      password  : '',
      database  : 'greenfield'
    });
};

module.exports = {
  connection: connection
};

//mysql -u -root > db/schema.sql
//mysql -u -root -p
