var mysql = require('mysql');
var con = mysql.createConnection({
  host:'181.215.78.45',
  user: "comv_emirates",
  password: "bbdyMG3sHl@@!-dB",
  database:"comv_emirates"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports=con