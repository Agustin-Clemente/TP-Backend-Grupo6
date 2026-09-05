var mysql = require('mysql2');

var pool = mysql.createPool({
  host     : 'bvtucyrmnotlhffwbcbl-mysql.services.clever-cloud.com',
  user     : 'uet0p8hxobxcaqkd',
  password : 'llmkUqfw0YAkjHlRCcj0',
  database : 'bvtucyrmnotlhffwbcbl',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;