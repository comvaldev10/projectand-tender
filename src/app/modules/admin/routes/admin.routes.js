let express = require('express');
const { authenticate } = require('../../../middlewares/jwt.middleware');
const { login,get_user,get_tender,get_sub_tender_by_id,get_tender_by_id,get_user_by_id,get_sub_sub_project_by_id,pending_user,get_sub_project_by_id,get_project_by_id,add_project,sub_add_project,sub_sub_add_project,complete_user,get_project} = require('../bussiness/admin.bussiness');
let router = express.Router();
router.post('/login',login)
router.get('/get_user',authenticate,get_user)
router.get('/get_user_by_id/:id',authenticate,get_user_by_id)// all user
router.get('/pending_user',authenticate,pending_user)
router.get('/complete_user',authenticate,complete_user)
router.get('/get_project/:id',authenticate,get_project)
router.get('/get_project_by_id/:id',authenticate,get_project_by_id)
router.get('/get_sub_project_by_id/:id',authenticate,get_sub_project_by_id)
router.get('/get_sub_project_by_id/:id',authenticate,get_sub_sub_project_by_id)
router.get('/get_tender/:id',authenticate,get_tender)
router.get('/get_tender_by_id/:id',authenticate,get_tender_by_id)
router.get('/get_sub_tender_by_id/:id',authenticate,get_sub_tender_by_id)
router.post('/add_project',authenticate,add_project)
router.post('/sub_add_project',authenticate,sub_add_project)
router.post('/sub_sub_add_project',authenticate,sub_sub_add_project)
module.exports = router;
