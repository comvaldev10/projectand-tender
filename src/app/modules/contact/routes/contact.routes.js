let express = require('express');
const { authenticate } = require('../../../middlewares/jwt.middleware');
const { get_contact,get_contact_info_id,get_contact_info,add_contact,edit_contact,delete_contact,get_contact_id,add_contact_info } = require('../bussiness/contact.bussines');
let router = express.Router();
router.post('/add_contact',authenticate,add_contact)
router.put('/update_contact/:id',authenticate,edit_contact)
router.get('/get_contact/',authenticate,get_contact)
router.get('/get_contact/:id',get_contact_id)
router.delete('/delete_contact/:id',authenticate,delete_contact)
router.post('/add_contact_info',add_contact_info)
router.get('/get_contact_info/',authenticate,get_contact_info)
router.get('/get_contact_info/:id',authenticate,get_contact_info_id)
module.exports = router;
