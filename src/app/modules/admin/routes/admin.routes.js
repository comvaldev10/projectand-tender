let express = require('express');
const { authenticate } = require('../../../middlewares/jwt.middleware');
const { login,get_user,get_user_by_id,pending_user} = require('../bussiness/admin.bussiness');
let router = express.Router();
router.post('/login',login)
router.get('/get_user',authenticate,get_user)
router.get('/get_user_by_id/:id',authenticate,get_user_by_id)// all user
router.get('/pending_user/',authenticate,pending_user)
module.exports = router;
