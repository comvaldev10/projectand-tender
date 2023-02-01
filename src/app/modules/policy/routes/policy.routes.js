let express = require('express');
const { authenticate } = require('../../../middlewares/jwt.middleware');
const { get_cookie,get_policy,get_policy_id,add_term,edit_term,add_cookie,edit_cookie,add_policy,edit_policy,delete_cookie,get_cookie_id } = require('../bussiness/policy.bussiness');
let router = express.Router();

router.post('/add_cookie',authenticate,add_cookie)
router.put('/update_cookie/:id',authenticate,edit_cookie)
router.post('/add_policy',authenticate,add_policy)
router.put('/update_policy/:id',authenticate,edit_policy)
router.post('/add_term',authenticate,add_term)
router.put('/update_term/:id',authenticate,edit_term)
router.get('/get_cookie',authenticate,get_cookie)
router.get('/get_cookie/:id',get_cookie_id)
router.get('/get_policy',authenticate,get_policy)
router.get('/get_policy/:id',get_policy_id)
router.delete('/delete_cookie/:id',authenticate,delete_cookie)
module.exports=router;