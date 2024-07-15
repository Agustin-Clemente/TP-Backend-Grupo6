var mysql      = require('mysql2');
var connection = mysql.createConnection({
  /* host     : 'localhost',
  user     : 'root',
  password : 'agush',
  database : 'turismo' */
  host     : "beivyosjyljis0ocyp2p-mysql.services.clever-cloud.com",
  user     : 'uet0p8hxobxcaqkd',
  password : 'llmkUqfw0YAkjHlRCcj0',
  database : 'beivyosjyljis0ocyp2p'
});
 
connection.connect();

module.exports = connection;
