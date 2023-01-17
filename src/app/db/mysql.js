var mysql = require('mysql');
var a={
  "host":"localhost",
  "user":"root",
  "password":"jayate",
  "database":"projectandtender"
}
var b={
  "host":'181.215.78.45',
  "user": "comv_emirates",
  "password": "bbdyMG3sHl@@!-dB",
  "database":"comv_emirates"
}
var con = mysql.createConnection({
  host:b.host,
  user:b.user,
  password:b.password,
  database:b.database
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports=con