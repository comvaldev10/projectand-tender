var conn = require('../db/mysql')
const jwt = require('jsonwebtoken')
exports.authenticate = async (req, res, next) => {
  try {
    const auth = req.header("Authorization");
    if (!auth)
      return res.json("No token get from user")
    const token = auth.split(" ");
    var decoded = jwt.verify(token[1], 'shhhhh');
    conn.query('select * from user where user_id=' + decoded.id, (err, result) => {
      if (err)
        return res.json("unauthorisedRequest").status(401);
      req.user = result[0]
      return next();
    })
  } catch (err) {
    return res.status(400).json(err);
  }
};
