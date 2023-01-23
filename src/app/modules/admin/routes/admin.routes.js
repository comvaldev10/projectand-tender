let express = require('express');
const { authenticate } = require('../../../middlewares/jwt.middleware');
const {add_tender,edit_project_sector3,edit_project_sector2,edit_project_sector,edit_project_sector1,add_sub_tender,login,what_we_do3,what_we_do1,what_we_do2,add_sub_admin,get_user,get_tender,what_we_do,get_sub_tender_by_id,get_tender_by_id,get_user_by_id,get_sub_sub_project_by_id,pending_user,get_sub_project_by_id,get_project_by_id,add_project,sub_add_project,sub_sub_add_project,complete_user,get_project} = require('../bussiness/admin.bussiness');
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
router.post('/add_tender',authenticate,add_tender)
router.post('/add_sub_tender',authenticate,add_sub_tender)
router.post('/what_we_do',authenticate,what_we_do)
router.put('/what_we_do/:id',authenticate,what_we_do2)
router.get('/what_we_do',what_we_do1)
router.get('/what_we_do/:id',what_we_do3)
router.post('/add_sub_admin',authenticate,add_sub_admin)
router.post('/edit_project_sector',authenticate,edit_project_sector)
router.put('/edit_project_sector/:id',authenticate,edit_project_sector1)
router.get('/edit_project_sector/:id',edit_project_sector2)
router.get('/edit_project_sector',edit_project_sector3)
module.exports = router;
