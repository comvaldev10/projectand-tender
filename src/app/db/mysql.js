var mysql = require('mysql');
var a={
  "host":"localhost",
  "user":"root",
  "password":"jayate",
  "database":"comv_emirates"
}
var b={
  "host":'181.215.78.45',
  "user": "comv_emirates",
  "password": "bbdyMG3sHl@@!-dB",
  "database":"comv_emirates"
}
var con = mysql.createConnection({
  host:a.host,
  user:a.user,
  password:a.password,
  database:a.database
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected mysql");
});

module.exports=con