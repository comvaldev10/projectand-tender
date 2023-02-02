var mysql = require('mysql');
var host = 'localhost'
var user = "comv_emirates"
var password = "bbdyMG3sHl@@!-dB"
var database = "comv_emirates"
var con = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected mysql");
});

module.exports = con