let express = require('express');
const { authenticate } = require('../../../middlewares/jwt.middleware');
const { get_request_assistance_type,add_request_assistance_type,edit_request_assistance_type,delete_request_assistance_type,get_request_assistance_type_id } = require('../bussiness/master_data.bussiness');
let router = express.Router();
router.post('/add_request_assistance_type',authenticate,add_request_assistance_type)
router.put('/update_request_assistance_type/:id',authenticate,edit_request_assistance_type)
router.get('/get_request_assistance_type/',authenticate,get_request_assistance_type)
router.get('/get_request_assistance_type/:id',authenticate,get_request_assistance_type_id)
router.delete('/delete_request_assistance_type/:id',authenticate,delete_request_assistance_type)
module.exports = router;
