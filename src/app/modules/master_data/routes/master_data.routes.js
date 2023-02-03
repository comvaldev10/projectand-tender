let express = require('express');
const { authenticate } = require('../../../middlewares/jwt.middleware');
const { get_request_assistance_type,add_request_assistance_type,edit_request_assistance_type,delete_request_assistance_type,get_request_assistance_type_id } = require('../bussiness/master_data.bussiness');
const { get_company_activity_type,add_company_activity_type,edit_company_activity_type,delete_company_activity_type,get_company_activity_type_id } = require('../bussiness/master_data.bussiness');
const { get_company_specialize,add_company_specialize,edit_company_specialize,delete_company_specialize,get_company_specialize_id } = require('../bussiness/master_data.bussiness');
const { get_what_are_you_interested_for,add_what_are_you_interested_for,edit_what_are_you_interested_for,delete_what_are_you_interested_for,get_what_are_you_interested_for_id } = require('../bussiness/master_data.bussiness');
const { get_company_type,add_company_type,edit_company_type,delete_company_type,get_company_type_id } = require('../bussiness/master_data.bussiness');
const { get_company_award,add_company_award,edit_company_award,delete_company_award,get_company_award_id } = require('../bussiness/master_data.bussiness');
let router = express.Router();

router.post('/add_company_award',authenticate,add_company_award)
router.put('/update_company_award/:id',authenticate,edit_company_award)
router.get('/get_company_award/',authenticate,get_company_award)
router.get('/get_company_award/:id',authenticate,get_company_award_id)
router.delete('/delete_company_award/:id',authenticate,delete_company_award)

router.post('/add_company_type',authenticate,add_company_type)
router.put('/update_company_type/:id',authenticate,edit_company_type)
router.get('/get_company_type/',authenticate,get_company_type)
router.get('/get_company_type/:id',authenticate,get_company_type_id)
router.delete('/delete_company_type/:id',authenticate,delete_company_type)

router.post('/add_what_are_you_interested_for',authenticate,add_what_are_you_interested_for)
router.put('/update_what_are_you_interested_for/:id',authenticate,edit_what_are_you_interested_for)
router.get('/get_what_are_you_interested_for/',authenticate,get_what_are_you_interested_for)
router.get('/get_what_are_you_interested_for/:id',authenticate,get_what_are_you_interested_for_id)
router.delete('/delete_what_are_you_interested_for/:id',authenticate,delete_what_are_you_interested_for)

router.post('/add_company_specialize',authenticate,add_company_specialize)
router.put('/update_company_specialize/:id',authenticate,edit_company_specialize)
router.get('/get_company_specialize/',authenticate,get_company_specialize)
router.get('/get_company_specialize/:id',authenticate,get_company_specialize_id)
router.delete('/delete_company_specialize/:id',authenticate,delete_company_specialize)

router.post('/add_company_activity_type',authenticate,add_company_activity_type)
router.put('/update_company_activity_type/:id',authenticate,edit_company_activity_type)
router.get('/get_company_activity_type/',authenticate,get_company_activity_type)
router.get('/get_company_activity_type/:id',authenticate,get_company_activity_type_id)
router.delete('/delete_company_activity_type/:id',authenticate,delete_company_activity_type)

router.post('/add_request_assistance_type',authenticate,add_request_assistance_type)
router.put('/update_request_assistance_type/:id',authenticate,edit_request_assistance_type)
router.get('/get_request_assistance_type/',authenticate,get_request_assistance_type)
router.get('/get_request_assistance_type/:id',authenticate,get_request_assistance_type_id)
router.delete('/delete_request_assistance_type/:id',authenticate,delete_request_assistance_type)
module.exports = router;
