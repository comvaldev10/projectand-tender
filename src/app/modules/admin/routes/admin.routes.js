let express = require('express');
const { authenticate } = require('../../../middlewares/jwt.middleware');
const { login,get_user,get_user_by_id,pending_user,add_project,sub_add_project,sub_sub_add_project} = require('../bussiness/admin.bussiness');
let router = express.Router();
router.post('/login',login)
router.get('/get_user',authenticate,get_user)
router.get('/get_user_by_id/:id',authenticate,get_user_by_id)// all user
router.get('/pending_user/',authenticate,pending_user)
router.post('/add_project',authenticate,add_project)
router.post('/sub_add_project',authenticate,sub_add_project)
router.post('/sub_sub_add_project',authenticate,sub_sub_add_project)
module.exports = router;
