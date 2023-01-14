var conn=require('../db/mysql')
const jwt=require('jsonwebtoken')
exports.authenticate = async (req, res, next) => {
  try {
    const auth = req.header("Authorization");
    if (!auth) throw message.msg.unauthorisedRequest;
    const token=auth.split(" ");
    var decoded = jwt.verify(token[1], 'shhhhh');
    conn.query('select * from user where id='+decoded.id,(err,result)=>{
      if(err)
    res.send("unauthorisedRequest").status(401);
      req.user=result[0]
      return next();
    })
  } catch (err) {
    return res.status(400).send(err);
  }
};
