var mysql      = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'agush',
  database : 'turismo'
});
 
connection.connect();

module.exports = connection;
